import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {

  alert: boolean = false;

  editRestaurant = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private router: ActivatedRoute, private restaurant: RestaurantService, private Router: Router) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id']);
    this.restaurant.getCurrentRestaurant(this.router.snapshot.params['id'])
      .subscribe(res => {
        console.warn(res);
        this.editRestaurant = new FormGroup({
          name: new FormControl(res['name']),
          address: new FormControl(res['address']),
          email: new FormControl(res['email'])
        })
      })
  }

  onUpdate() {
    console.warn(this.editRestaurant.value);
    this.restaurant.updateRestaurant(this.router.snapshot.params['id'], this.editRestaurant.value)
      .subscribe()
    this.alert = true;
  }

  closeAlert() {
    this.alert = false;
  }
}
