import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Typography, AppBar, Toolbar, Button } from '@mui/material';
import { Patient, Diagnosis } from './types';
import { getAllPatients } from './services/patientService';
import { getAllDiagnoses } from './services/diagnosisService';
import PatientListPage from './components/PatientListPage';
import PatientPage from './components/PatientPage';

const App = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);

  useEffect(() => {
    const fetchPatientList = async () => {
      const patients = await getAllPatients();
      setPatients(patients);
    };
    void fetchPatientList();
  }, []);

  useEffect(() => {
    const fetchDiagnoses = async () => {
      const diagnoses = await getAllDiagnoses();
      setDiagnoses(diagnoses);
    };
    void fetchDiagnoses();
  }, []);

  return (
    <div className="App">
      <Router>
        <Container>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Patientor
              </Typography>
              <Button component={Link} to="/" color="inherit">
                Home
              </Button>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={
              <PatientListPage
                patients={patients}
                setPatients={setPatients}
              />
            } />
            <Route path="/patients/:id" element={
              <PatientPage
                diagnoses={diagnoses}
              />
            } />
          </Routes>
        </Container>
      </Router>
    </div>
  );
};

export default App;
