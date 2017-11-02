export class Reservation {
  public idDB: string;
  public user: string;
  public date: Date;
  public guests: string[];
  public incident: string;
  public time: string;

  constructor(user: string, date: Date, time: string, idDB?: string, guests?: string[], incident?: string ) {
    this.idDB = idDB;
    this.user = user;
    this.date = date;
    this.guests = guests;
    this.incident = incident;
    this.time = time;
  }
}
