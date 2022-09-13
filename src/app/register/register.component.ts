import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUser = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private restaurant: RestaurantService) { }

  ngOnInit(): void {
  }

  Register() {
    console.warn(this.registerUser.value);
    this.restaurant.registerUser(this.registerUser.value).subscribe(res=>{
      console.warn(res);
    })
    this.registerUser.reset();
  }
}
