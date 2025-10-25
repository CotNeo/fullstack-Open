import express, { Response } from 'express';
import { z } from 'zod';
import patientService from '../services/patientService';
import { PublicPatient, Patient, NewPatient, NewEntry, HealthCheckRating } from '../types';

const router = express.Router();

router.get('/', (_req, res: Response<PublicPatient[]>) => {
  res.send(patientService.getPatients());
});

router.get('/:id', (req, res) => {
  const patient = patientService.getPatientById(req.params.id);
  
  if (patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }
});

router.post('/', (req, res) => {
  try {
    const NewPatientSchema = z.object({
      name: z.string(),
      dateOfBirth: z.string().date(),
      ssn: z.string(),
      gender: z.enum(['male', 'female', 'other']),
      occupation: z.string()
    });

    const newPatient = NewPatientSchema.parse(req.body);
    const addedPatient = patientService.addPatient(newPatient);
    res.json(addedPatient);
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      res.status(400).send({ error: error.issues });
    } else {
      res.status(400).send({ error: 'unknown error' });
    }
  }
});

router.post('/:id/entries', (req, res) => {
  try {
    const parseDiagnosisCodes = (object: unknown): Array<string> => {
      if (!object || typeof object !== 'object' || !('diagnosisCodes' in object)) {
        return [] as Array<string>;
      }
      return object.diagnosisCodes as Array<string>;
    };

    const baseEntrySchema = z.object({
      description: z.string(),
      date: z.string().date(),
      specialist: z.string(),
      diagnosisCodes: z.array(z.string()).optional()
    });

    const healthCheckSchema = baseEntrySchema.extend({
      type: z.literal('HealthCheck'),
      healthCheckRating: z.nativeEnum(HealthCheckRating)
    });

    const hospitalSchema = baseEntrySchema.extend({
      type: z.literal('Hospital'),
      discharge: z.object({
        date: z.string().date(),
        criteria: z.string()
      })
    });

    const occupationalHealthcareSchema = baseEntrySchema.extend({
      type: z.literal('OccupationalHealthcare'),
      employerName: z.string(),
      sickLeave: z.object({
        startDate: z.string().date(),
        endDate: z.string().date()
      }).optional()
    });

    const entrySchema = z.discriminatedUnion('type', [
      healthCheckSchema,
      hospitalSchema,
      occupationalHealthcareSchema
    ]);

    const newEntry = entrySchema.parse(req.body);
    const addedEntry = patientService.addEntry(req.params.id, newEntry);
    res.json(addedEntry);
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      res.status(400).send({ error: error.issues });
    } else {
      res.status(400).send({ error: 'unknown error' });
    }
  }
});

export default router;
