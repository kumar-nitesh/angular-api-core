import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: string): Date {
    // Split the date and time parts
    const parts = value.split(' ');
    const datePart = parts[0];
    const timePart = parts[1];

    // Split the date parts into day, month, and year
    const dateParts = datePart.split('/');
    const day = Number(dateParts[0]);
    const month = Number(dateParts[1]) - 1; // Months are zero-based in JavaScript Date objects
    const year = Number(dateParts[2]);

    // Split the time parts into hours, minutes, and seconds
    const timeParts = timePart.split(':');
    const hours = Number(timeParts[0]);
    const minutes = Number(timeParts[1]);
    const seconds = Number(timeParts[2]);

    // Create and return a new Date object with the parsed values
    return new Date(year, month, day, hours, minutes, seconds);
  }
}
