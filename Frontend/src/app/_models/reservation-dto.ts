import { MovieShowtimeDto } from "./movie-showtime-dto";

export class ReservationDto{
    email: string = "";
    phone: string = "";
    movieTitle: string = "";
    movieShowtime: MovieShowtimeDto = new MovieShowtimeDto();
    cinema: string = "";
    seatColumn: number = 0;
    seatRow: number = 0;
}