import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProvaService {
  constructor(private _http: HttpClient) {}

  findPagamenti() {
    let headers: HttpHeaders = new HttpHeaders({
      'X-Page': '0',
      'X-Size': '4',
      accept: 'application/json',
    });
    return this._http.get<any>(
      `http://nstar-anagrafica-base-tst.apps.os01.aciinfo.local/fe/pagamento?targa=BB208AA&annoValidita=2021`,
      { headers: headers, observe: 'response' }
    );
  }
}
