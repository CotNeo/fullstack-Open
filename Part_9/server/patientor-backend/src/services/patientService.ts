import patients from '../../data/patients';
import { Patient, PublicPatient, NewPatient, Entry, NewEntry } from '../types';
import { v1 as uuid } from 'uuid';

const getPatients = (): PublicPatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries
  }));
};

const getPatientById = (id: string): Patient | undefined => {
  return patients.find(patient => patient.id === id);
};

const addPatient = (newPatient: NewPatient): Patient => {
  const patient: Patient = {
    ...newPatient,
    id: uuid(),
    entries: []
  };
  
  patients.push(patient);
  return patient;
};

const addEntry = (patientId: string, newEntry: NewEntry): Entry => {
  const patient = patients.find(p => p.id === patientId);
  if (!patient) {
    throw new Error('Patient not found');
  }

  const entry: Entry = {
    ...newEntry,
    id: uuid()
  };

  patient.entries.push(entry);
  return entry;
};

export default {
  getPatients,
  getPatientById,
  addPatient,
  addEntry
};
