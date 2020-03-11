import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items$: Observable<any[]>;
  constructor(
    private httpClient: HttpClient,
    private swUpdate: SwUpdate) {
    this.items$ = this.httpClient.get<any[]>('http://localhost:4700/feed');

    this.swUpdate.available.subscribe(() => {
      const x = confirm('New Version is ready for you');
      if (x) {
        window.location.reload();
      }
    });

  }
}
