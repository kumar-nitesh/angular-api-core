import { Component, OnInit } from '@angular/core';
import { Medicine } from '../models/medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {
  medicines: Medicine[] = [];

  constructor(private medicineService: MedicineService) { }

  ngOnInit(): void {
    this.medicineService.getMedicines().subscribe(
      (medicines: Medicine[]) => {
        this.medicines = medicines;
      },
      (error) => {
        console.error('Error fetching medicines:', error);
      }
    );
  }

  getExpiryColor(medicine: Medicine): string {
    const currentDate = new Date();
    console.log(currentDate);
    const expiryDate = new Date(medicine.expiryDate);
    console.log(expiryDate);
    const daysUntilExpiry = Math.floor((expiryDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
    console.log(daysUntilExpiry);
    if (daysUntilExpiry <= 0) {
      return 'red'; // Expired (show in red)
    } else if (daysUntilExpiry <= 30) {
      return 'orange'; // Expiring within 30 days (show in orange)
    } else {
      return 'green'; // Valid (show in green)
    }
  }
}
