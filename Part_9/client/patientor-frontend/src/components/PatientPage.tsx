import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';
import { Patient, Diagnosis, Entry } from '../types';
import { getPatientById, addEntry } from '../services/patientService';
import EntryDetails from './EntryDetails';
import AddEntryModal from './AddEntryModal';

interface Props {
  diagnoses: Diagnosis[];
}

const PatientPage = ({ diagnoses }: Props) => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchPatient = async () => {
      if (id) {
        const patient = await getPatientById(id);
        setPatient(patient);
      }
    };
    void fetchPatient();
  }, [id]);

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };

  const submitNewEntry = async (values: Entry) => {
    try {
      if (patient) {
        const entry = await addEntry(patient.id, values);
        setPatient({
          ...patient,
          entries: patient.entries.concat(entry)
        });
        setModalOpen(false);
      }
    } catch (e: unknown) {
      console.error('Error adding entry', e);
      setError('Failed to add entry');
    }
  };

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Box>
        <Typography align="center" variant="h4" style={{ marginBottom: "1em" }}>
          {patient.name}
        </Typography>
        <Typography variant="body1">
          <strong>Gender:</strong> {patient.gender}
        </Typography>
        <Typography variant="body1">
          <strong>SSN:</strong> {patient.ssn}
        </Typography>
        <Typography variant="body1">
          <strong>Occupation:</strong> {patient.occupation}
        </Typography>
        <Typography variant="body1">
          <strong>Date of Birth:</strong> {patient.dateOfBirth}
        </Typography>
      </Box>
      
      <Typography variant="h5" style={{ marginTop: "1em" }}>
        Entries
      </Typography>
      {patient.entries.map((entry: Entry) => (
        <EntryDetails key={entry.id} entry={entry} diagnoses={diagnoses} />
      ))}
      
      <AddEntryModal
        modalOpen={modalOpen}
        onSubmit={submitNewEntry}
        error={error}
        onClose={closeModal}
        diagnoses={diagnoses}
      />
      <Button variant="contained" onClick={() => openModal()}>
        Add New Entry
      </Button>
    </div>
  );
};

export default PatientPage;
