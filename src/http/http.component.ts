import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpsService } from './https.service';
@Component({
  selector: 'http-component',
  templateUrl: './http.component.html',
})
export class HttpComponent implements OnInit {
  constructor(private hs: HttpsService) {}

  food: any = [];
  food_name: any;
  ngOnInit() {
    this.getFoods();
  }

  getFoods() {
    this.hs.getFoods().subscribe(
      (data: any) => {
        this.food = data;
      },
      (error: any) => console.error(error),
      () => console.log('Data Loading Completed')
    );
  }
  createFood(food: { name: string }) {
    // let food = { name: food_name };
    this.hs.addFood(food).subscribe({
      next: () => {
        this.getFoods();
        return true;
      },
      error: (err: any) => {
        console.error(err + 'Error is saving food');
        return err;
      },
    });
  }

  updateFood(food: any) {
    this.hs.updateFood(food).subscribe({
      next: () => {
        this.getFoods();
        alert('Food Item Updated Successfully');
        return true;
      },
      error: (err: any) => {
        console.error(err + 'Error is Updating food');
        return err;
      },
    });
  }
  deleteFoods(food: any) {
    if (window.confirm('Are you sure you want to delete this food item?')) {
      this.hs.deleteFoods(food.id).subscribe({
        next: () => {
          this.getFoods();
          alert('Food Item Deleted Successfully');
          return true;
        },
        error: (err: any) => {
          console.error(err + 'Error is deleting food');
          return err;
        },
      });
    }
  }
}
