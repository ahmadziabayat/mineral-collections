import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetMineralService {

  constructor(private http: HttpClient) { }


  getMineralData() {
    return this.http.get('https://interview.api.numbersusa.com/rock_collection/');
  }

  getMineralById(id: string){
    return this.http.get('https://interview.api.numbersusa.com/rock_collection/' + id);
  }

  addMineralItem(newMineral){
    return this.http.post('https://interview.api.numbersusa.com/rock_collection/', newMineral);
  }

  public getToken(): string {
    return localStorage.getItem('1db5c217-dc1f-479a-866e-57618ed77097');
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean indicating whether or not the token is expired
    return decode.tokenNotExpired(token);
  }

  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
