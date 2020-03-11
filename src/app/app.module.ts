import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, LoggerConfig } from '@vulcan/logger';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

export const loggerConfig: LoggerConfig = {
  projectName: 'main-app'
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoggerModule.init({ projectName: 'Noam' }),
    ServiceWorkerModule.register('ngsw-worker.js',
      { enabled: environment.production })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
