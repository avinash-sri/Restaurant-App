import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  alert: boolean = false;

  addRestaurant = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private restaurant: RestaurantService) { }

  ngOnInit(): void {
  }

  onAdd() {
    console.warn(this.addRestaurant.value);
    this.restaurant.postRestaurant(this.addRestaurant.value)
      .subscribe(res => {
        console.warn("result", res);
      })
    this.alert = true;
    this.addRestaurant.reset();
  }

  closeAlert() {
    this.alert = false;
  }
}
