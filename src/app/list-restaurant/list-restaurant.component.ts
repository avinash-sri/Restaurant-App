import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {

  restaurantList: any

  constructor(private restaurant: RestaurantService) { }

  ngOnInit(): void {
    this.restaurant.getList()
      .subscribe(res => {
        console.warn(res);
        this.restaurantList = res;
      })
  }

  deleteRestaurant(id: number){
    this.restaurantList.splice(id-1,1);
    this.restaurant.deleteRestaurant(id)
    .subscribe()
  }

}
