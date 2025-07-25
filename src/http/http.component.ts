import { Component, OnInit } from '@angular/core';
import { HttpsService } from './https.service';

@Component({
  selector: 'http-component',
  templateUrl: './http.component.html',
})
export class HttpComponent implements OnInit {
  constructor(private hs: HttpsService) {}

  food: any = [];
  food_name: string = '';
  food_price: number = 0;
  editingFood: any = null;

  ngOnInit() {
    this.getFoods();
  }

  getFoods() {
    this.hs.getFoods().subscribe({
      next: (data: any) => {
        this.food = data;
      },
      error: (error: any) => console.error('Error fetching foods:', error),
      complete: () => console.log('Data Loading Completed'),
    });
  }

  createFood() {
    if (!this.food_name.trim() && !this.food_price) {
      alert('Please enter a food name');
      return;
    }

    const foodData = { name: this.food_name.trim(), price: this.food_price };
    this.hs.addFood(foodData).subscribe({
      next: () => {
        this.getFoods();
        this.food_name = ''; // Reset input field
        this.food_price = 0; // Reset input field
        alert('Food Item Added Successfully');
      },
      error: (err: any) => {
        console.error('Error saving food:', err);
        alert('Error adding food item');
      },
    });
  }

  startEdit(food: any) {
    this.editingFood = { ...food }; // Create a copy for editing
  }

  cancelEdit() {
    this.editingFood = null;
  }

  updateFood(food: any) {
    if (!food.name.trim()) {
      alert('Please enter a food name');
      return;
    }

    this.hs.updateFood(food).subscribe({
      next: () => {
        this.getFoods();
        this.editingFood = null;
        alert('Food Item Updated Successfully');
      },
      error: (err: any) => {
        console.error('Error updating food:', err);
        alert('Error updating food item');
      },
    });
  }

  deleteFoods(food: any) {
    if (!food?.id) {
      console.error('Invalid food object', food);
      alert('Invalid food item');
      return;
    }
    if (window.confirm('Are you sure you want to delete this food item?')) {
      this.hs.deleteFoods(food.id).subscribe({
        next: () => {
          this.getFoods();
          alert('Food Item Deleted Successfully');
        },
        error: (err: any) => {
          console.error('Error deleting food:', err);
          alert('Error deleting food item');
        },
      });
    }
  }

  // TrackBy function for better performance
  trackByFoodId(index: number, food: any): number {
    return food.id;
  }
}
