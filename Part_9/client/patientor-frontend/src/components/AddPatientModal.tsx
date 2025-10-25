import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Alert
} from '@mui/material';
import { Patient, Gender } from '../types';

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (values: Patient) => void;
  error?: string;
}

const AddPatientModal = ({ modalOpen, onClose, onSubmit, error }: Props) => {
  const [formData, setFormData] = useState({
    name: '',
    ssn: '',
    dateOfBirth: '',
    occupation: '',
    gender: Gender.Other
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData as Patient);
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    });
  };

  return (
    <Dialog open={modalOpen} onClose={onClose}>
      <DialogTitle>Add a new patient</DialogTitle>
      <DialogContent>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            value={formData.name}
            onChange={handleChange('name')}
            margin="normal"
          />
          <TextField
            label="SSN"
            fullWidth
            value={formData.ssn}
            onChange={handleChange('ssn')}
            margin="normal"
          />
          <TextField
            label="Date of Birth"
            type="date"
            fullWidth
            value={formData.dateOfBirth}
            onChange={handleChange('dateOfBirth')}
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Occupation"
            fullWidth
            value={formData.occupation}
            onChange={handleChange('occupation')}
            margin="normal"
          />
          <TextField
            select
            label="Gender"
            fullWidth
            value={formData.gender}
            onChange={handleChange('gender')}
            margin="normal"
            SelectProps={{ native: true }}
          >
            <option value={Gender.Male}>Male</option>
            <option value={Gender.Female}>Female</option>
            <option value={Gender.Other}>Other</option>
          </TextField>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPatientModal;
