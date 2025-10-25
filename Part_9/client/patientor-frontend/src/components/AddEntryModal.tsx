import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Box
} from '@mui/material';
import { Entry, Diagnosis, HealthCheckRating } from '../types';

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (values: Entry) => void;
  error?: string;
  diagnoses: Diagnosis[];
}

const AddEntryModal = ({ modalOpen, onClose, onSubmit, error, diagnoses }: Props) => {
  const [formData, setFormData] = useState({
    type: 'HealthCheck' as const,
    description: '',
    date: '',
    specialist: '',
    diagnosisCodes: [] as string[],
    healthCheckRating: HealthCheckRating.Healthy,
    discharge: {
      date: '',
      criteria: ''
    },
    employerName: '',
    sickLeave: {
      startDate: '',
      endDate: ''
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData as Entry);
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    });
  };

  const handleDiagnosisChange = (event: any) => {
    setFormData({
      ...formData,
      diagnosisCodes: event.target.value
    });
  };

  const renderTypeSpecificFields = () => {
    switch (formData.type) {
      case 'HealthCheck':
        return (
          <FormControl fullWidth margin="normal">
            <InputLabel>Health Check Rating</InputLabel>
            <Select
              value={formData.healthCheckRating}
              onChange={(e) => setFormData({ ...formData, healthCheckRating: e.target.value as HealthCheckRating })}
            >
              <MenuItem value={HealthCheckRating.Healthy}>Healthy (0)</MenuItem>
              <MenuItem value={HealthCheckRating.LowRisk}>Low Risk (1)</MenuItem>
              <MenuItem value={HealthCheckRating.HighRisk}>High Risk (2)</MenuItem>
              <MenuItem value={HealthCheckRating.CriticalRisk}>Critical Risk (3)</MenuItem>
            </Select>
          </FormControl>
        );
      case 'Hospital':
        return (
          <>
            <TextField
              label="Discharge Date"
              type="date"
              fullWidth
              value={formData.discharge.date}
              onChange={(e) => setFormData({
                ...formData,
                discharge: { ...formData.discharge, date: e.target.value }
              })}
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Discharge Criteria"
              fullWidth
              value={formData.discharge.criteria}
              onChange={(e) => setFormData({
                ...formData,
                discharge: { ...formData.discharge, criteria: e.target.value }
              })}
              margin="normal"
            />
          </>
        );
      case 'OccupationalHealthcare':
        return (
          <>
            <TextField
              label="Employer Name"
              fullWidth
              value={formData.employerName}
              onChange={handleChange('employerName')}
              margin="normal"
            />
            <TextField
              label="Sick Leave Start Date"
              type="date"
              fullWidth
              value={formData.sickLeave.startDate}
              onChange={(e) => setFormData({
                ...formData,
                sickLeave: { ...formData.sickLeave, startDate: e.target.value }
              })}
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Sick Leave End Date"
              type="date"
              fullWidth
              value={formData.sickLeave.endDate}
              onChange={(e) => setFormData({
                ...formData,
                sickLeave: { ...formData.sickLeave, endDate: e.target.value }
              })}
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={modalOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Add a new entry</DialogTitle>
      <DialogContent>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Entry Type</InputLabel>
            <Select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
            >
              <MenuItem value="HealthCheck">Health Check</MenuItem>
              <MenuItem value="Hospital">Hospital</MenuItem>
              <MenuItem value="OccupationalHealthcare">Occupational Healthcare</MenuItem>
            </Select>
          </FormControl>
          
          <TextField
            label="Description"
            fullWidth
            value={formData.description}
            onChange={handleChange('description')}
            margin="normal"
          />
          
          <TextField
            label="Date"
            type="date"
            fullWidth
            value={formData.date}
            onChange={handleChange('date')}
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          
          <TextField
            label="Specialist"
            fullWidth
            value={formData.specialist}
            onChange={handleChange('specialist')}
            margin="normal"
          />
          
          <FormControl fullWidth margin="normal">
            <InputLabel>Diagnosis Codes</InputLabel>
            <Select
              multiple
              value={formData.diagnosisCodes}
              onChange={handleDiagnosisChange}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {diagnoses.map((diagnosis) => (
                <MenuItem key={diagnosis.code} value={diagnosis.code}>
                  {diagnosis.code} - {diagnosis.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {renderTypeSpecificFields()}
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

export default AddEntryModal;
