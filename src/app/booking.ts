export class Booking {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    amount: number;
    dateIn: Date;
    dateOut: Date;
    typeBooking: string;

    constructor(id: number, firstName: string, lastName: string, email: string) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
    }
    /*
        constructor(id: number, firstName: string, lastName: string, email: string, amount: number, dateIn: Date, dateOut: Date) {
            this.id = id
            this.firstName = firstName
            this.lastName = lastName
            this.email = email
            this.amount = amount
            this.dateIn = dateIn
            this.dateOut = dateOut
        }
    */
}