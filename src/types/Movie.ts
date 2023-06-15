export interface Movie {
  status: 'UPCOMING' | 'BOOKING_OPEN';
  title: string;
  description: string;
  posterURL: string;
  rating: string;
  releasingDate: Date;
  runTime: number; // in minutes
  genre: string;
}
