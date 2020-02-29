import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agents } from './agents.modul';

@Injectable()
export class AppService {

  constructor(private http: HttpClient){}

  getData() {
    return this.http.get<Agents>('/assets/data.json');
  }

}
