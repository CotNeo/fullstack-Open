/**
 * Exercise Calculator
 * Exercise 9.2: Exercise tracking and statistical analysis
 */

interface ExerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const parseArguments = (args: string[]): number[] => {
  if (args.length < 3) throw new Error('Not enough arguments');
  
  const values = args.slice(2).map(arg => {
    if (isNaN(Number(arg))) {
      throw new Error('Provided values were not numbers!');
    }
    return Number(arg);
  });
  
  return values;
};

const calculateExercises = (dailyHours: number[], target: number): ExerciseResult => {
  const periodLength = dailyHours.length;
  const trainingDays = dailyHours.filter(hours => hours > 0).length;
  const average = dailyHours.reduce((sum, hours) => sum + hours, 0) / periodLength;
  const success = average >= target;
  
  let rating: number;
  let ratingDescription: string;
  
  if (average < target * 0.5) {
    rating = 1;
    ratingDescription = 'bad';
  } else if (average < target * 0.8) {
    rating = 2;
    ratingDescription = 'not too bad but could be better';
  } else if (average < target) {
    rating = 3;
    ratingDescription = 'good';
  } else {
    rating = 4;
    ratingDescription = 'excellent';
  }
  
  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  };
};

try {
  const args = parseArguments(process.argv);
  const target = args[0];
  const dailyHours = args.slice(1);
  
  const result = calculateExercises(dailyHours, target);
  console.log(result);
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
