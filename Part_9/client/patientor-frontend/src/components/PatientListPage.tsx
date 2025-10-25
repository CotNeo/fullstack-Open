import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Box
} from '@mui/material';
import { Patient } from '../types';
import { createPatient } from '../services/patientService';
import AddPatientModal from './AddPatientModal';

interface Props {
  patients: Patient[];
  setPatients: React.Dispatch<React.SetStateAction<Patient[]>>;
}

const PatientListPage = ({ patients, setPatients }: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const navigate = useNavigate();

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };

  const submitNewPatient = async (values: Patient) => {
    try {
      const patient = await createPatient(values);
      setPatients(patients.concat(patient));
      setModalOpen(false);
    } catch (e: unknown) {
      console.error('Error adding patient', e);
      setError('Failed to add patient');
    }
  };

  return (
    <div className="App">
      <Box>
        <Typography align="center" variant="h4" style={{ marginBottom: "1em" }}>
          Patient List
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Occupation</TableCell>
              <TableCell>Health Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(patients).map((patient: Patient) => (
              <TableRow key={patient.id}>
                <TableCell>
                  <Button
                    component="a"
                    href={`/patients/${patient.id}`}
                    onClick={() => navigate(`/patients/${patient.id}`)}
                  >
                    {patient.name}
                  </Button>
                </TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>{patient.occupation}</TableCell>
                <TableCell>{patient.entries.length}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddPatientModal
        modalOpen={modalOpen}
        onSubmit={submitNewPatient}
        error={error}
        onClose={closeModal}
      />
      <Button variant="contained" onClick={() => openModal()}>
        Add New Patient
      </Button>
    </div>
  );
};

export default PatientListPage;
