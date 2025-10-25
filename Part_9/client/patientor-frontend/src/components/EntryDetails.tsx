import { Box, Typography } from '@mui/material';
import { Entry, Diagnosis } from '../types';
import { LocalHospital, Work, HealthAndSafety } from '@mui/icons-material';

interface Props {
  entry: Entry;
  diagnoses: Diagnosis[];
}

const EntryDetails = ({ entry, diagnoses }: Props) => {
  const getDiagnosisName = (code: string): string => {
    const diagnosis = diagnoses.find(d => d.code === code);
    return diagnosis ? diagnosis.name : code;
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'Hospital':
        return <LocalHospital />;
      case 'OccupationalHealthcare':
        return <Work />;
      case 'HealthCheck':
        return <HealthAndSafety />;
      default:
        return null;
    }
  };

  const getRatingColor = (rating: number) => {
    switch (rating) {
      case 0:
        return 'green';
      case 1:
        return 'yellow';
      case 2:
        return 'orange';
      case 3:
        return 'red';
      default:
        return 'black';
    }
  };

  return (
    <Box sx={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <Typography variant="h6">
        {entry.date} {getIcon(entry.type)}
      </Typography>
      <Typography variant="body2">
        <strong>Description:</strong> {entry.description}
      </Typography>
      <Typography variant="body2">
        <strong>Specialist:</strong> {entry.specialist}
      </Typography>
      {entry.diagnosisCodes && entry.diagnosisCodes.length > 0 && (
        <Typography variant="body2">
          <strong>Diagnosis codes:</strong>
          <ul>
            {entry.diagnosisCodes.map(code => (
              <li key={code}>
                {code} - {getDiagnosisName(code)}
              </li>
            ))}
          </ul>
        </Typography>
      )}
      
      {entry.type === 'HealthCheck' && (
        <Typography variant="body2">
          <strong>Health Check Rating:</strong> 
          <span style={{ color: getRatingColor(entry.healthCheckRating) }}>
            {entry.healthCheckRating}
          </span>
        </Typography>
      )}
      
      {entry.type === 'Hospital' && (
        <Typography variant="body2">
          <strong>Discharge:</strong> {entry.discharge.date} - {entry.discharge.criteria}
        </Typography>
      )}
      
      {entry.type === 'OccupationalHealthcare' && (
        <>
          <Typography variant="body2">
            <strong>Employer:</strong> {entry.employerName}
          </Typography>
          {entry.sickLeave && (
            <Typography variant="body2">
              <strong>Sick Leave:</strong> {entry.sickLeave.startDate} to {entry.sickLeave.endDate}
            </Typography>
          )}
        </>
      )}
    </Box>
  );
};

export default EntryDetails;
