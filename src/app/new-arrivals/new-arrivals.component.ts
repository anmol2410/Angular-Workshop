import { Component, OnInit  } from '@angular/core';

interface Car {
  name: string;
  year: number;
  fuelType: string;
  kilometers: number;
  transmission: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.scss'
})
export class NewArrivalsComponent {
  cars: Car[] = [
    {
      name: 'Hyundai Creta',
      year: 2016,
      fuelType: 'Petrol',
      kilometers: 42000,
      transmission: 'Automatic',
      price: 8.00,
      imageUrl: 'path-to-creta-image'  // Replace with actual image URLs
    },
    {
      name: 'Toyota Fortuner',
      year: 2013,
      fuelType: 'Diesel',
      kilometers: 102358,
      transmission: 'Automatic',
      price: 13.00,
      imageUrl: 'path-to-fortuner-image'
    },
    {
      name: 'Tata Safari',
      year: 2014,
      fuelType: 'Diesel',
      kilometers: 75000,
      transmission: 'Manual',
      price: 3.50,
      imageUrl: 'path-to-safari-image'
    },
    {
      name: 'Maruti Suzuki Vitara Brezza',
      year: 2018,
      fuelType: 'Petrol',
      kilometers: 84000,
      transmission: 'Manual',
      price: 5.12,
      imageUrl: 'path-to-brezza-image'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
