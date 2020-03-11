import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items$: Observable<any[]>;
  constructor(private httpClient: HttpClient) {
    this.items$ = this.httpClient.get<any[]>('http://localhost:4700/feed');
  }
}
