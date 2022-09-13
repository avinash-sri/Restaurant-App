import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  url = "http://localhost:3000/restaurants";
  rootUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getList() {
    console.log()
    return this.http.get(this.url);
  }

  postRestaurant(data: any) {
    return this.http.post(this.url, data);
  }

  deleteRestaurant(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getCurrentRestaurant(id: number) {
    return this.http.get(`${this.url}/${id}`)
      .pipe(map((res: any) => {
        return res
      }))
  }

  updateRestaurant(id: number, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }

  registerUser(data: any) {
    return this.http.post(this.rootUrl + "users", data);
  }
}
