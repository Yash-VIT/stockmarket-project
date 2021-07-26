import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyDto } from 'src/app/models/company/company-dto';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl ='http://localhost:8080/company/display';
  createCompanyUrl ='http://localhost:8080/company/create';

  constructor(private httpClient: HttpClient) { }

  getCompanyList(): Observable<CompanyDto[]> {
    console.log( this.httpClient.get<CompanyDto[]>(`${this.baseUrl}`));
    return this.httpClient.get<CompanyDto[]>(`${this.baseUrl}`);
  }

  createCompany(companyDto: CompanyDto): Observable<Object> {
    return this.httpClient.post(`${this.createCompanyUrl}`, companyDto);
  }


}
