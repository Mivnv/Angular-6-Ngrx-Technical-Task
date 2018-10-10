import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CompaniesJSON } from '../companies/models/company';

@Injectable({
  providedIn: 'root'
})

export class CompaniesService {
	private path: string = '../../assets/companies-list.json'

  constructor(private http: HttpClient) { }

	getCompanies() : Observable<CompaniesJSON> {
	  return this.http.get(this.path) as Observable<CompaniesJSON>; 
	}
}