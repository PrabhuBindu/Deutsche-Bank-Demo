import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GET_COVID_DATA} from '../shared/constants/url';

@Injectable()
export class HomeService {
  url = GET_COVID_DATA;
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(this.url);
  }
}
