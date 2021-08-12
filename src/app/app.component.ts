import { Component } from '@angular/core';
import { ProvaService } from './prova.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prova';
  constructor(private _provaService: ProvaService) {
    this._provaService
      .findPagamenti()
      .subscribe((res) => console.log(res, res.headers.keys()));
  }
}
