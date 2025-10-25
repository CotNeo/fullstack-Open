import axios from 'axios';
import { Patient, PublicPatient, NewPatient, NewEntry, Entry } from './types';

const baseUrl = 'http://localhost:3001/api';

export const getAllPatients = () => {
  return axios
    .get<PublicPatient[]>(`${baseUrl}/patients`)
    .then(response => response.data);
};

export const getPatientById = (id: string) => {
  return axios
    .get<Patient>(`${baseUrl}/patients/${id}`)
    .then(response => response.data);
};

export const createPatient = (object: NewPatient) => {
  return axios
    .post<Patient>(`${baseUrl}/patients`, object)
    .then(response => response.data);
};

export const addEntry = (patientId: string, object: NewEntry) => {
  return axios
    .post<Entry>(`${baseUrl}/patients/${patientId}/entries`, object)
    .then(response => response.data);
};
