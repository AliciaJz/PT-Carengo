import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class DishesService {

  constructor(private http: Http) { }

  getList() {
    return this.http.get(`http://localhost:3000`)
      .map((res) => res.json());
  }

}
