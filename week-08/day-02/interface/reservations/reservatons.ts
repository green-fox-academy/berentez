// Create a Reservation class by implementing all the features as required by the interface.
// The booked reservations should look like the output below.
// Please note that the reservation code should contain 8 characters randomly from 0-Z, all uppercase letters.
// Also, the DOW is randomly ordered to the bookings from an array.
// DOW stands for Day of the Week (MON, TUE, etc.)

// The output will be sort of like this:-
// Booking# 1WBA3OMU for THU
// Booking# 0V5OH7VS for WED
// Booking# CV6QOAJO for MON
// Booking# 03GHEJMV for SAT
// Booking# M5JFB32I for THU
// Booking# W30PF0E0 for SAT
// Booking# S0R70GMN for SAT
// Booking# 3E032B3C for WED
// Booking# OD27E36J for SAT
// Booking# 4MEU0657 for MON

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  private static bookingNumber: number = 0;
  private counter: number;
  private code: string;
  private dow: string;

  constructor() {
    this.code = this.getCodeBooking();
    this.dow = this.getDowBooking();
    this.addCounterToBooking();
  }

  private addCounterToBooking(): void {
    Reservation.bookingNumber++;
    this.counter = Reservation.bookingNumber;
  }

  getDowBooking(): string {
    const days: string[] = ['MON', 'THU', 'WED', 'THR', 'FRY', 'SAT', 'SUN'];
    let index: number = Math.floor(Math.random() * 7);
    return days[index];
  }
  getCodeBooking(): string {
    let code: string[] = [];
    const abc: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i: number = 0; i < 8; i++) {
      let character: string = abc[Math.floor(Math.random() * abc.length)];
      code.push(character);
    }
    return code.join('');
  }

  printBooking(): void {
    console.log(`Booking${this.counter} ${this.code} for ${this.dow}`);
  }
}

//Test
let bookings: Reservation[] = [];

for (let i: number = 0; i < 10; i++) {
  bookings.push(new Reservation());
}

for (let booking of bookings) {
  booking.printBooking();
}
