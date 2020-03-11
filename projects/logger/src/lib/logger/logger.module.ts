import { LoggerService } from './logger.service';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({

  providers: [
    LoggerService,
    { provide: HTTP_INTERCEPTORS, useClass: LoggerService, multi: true }
  ]
})
export class LoggerModule { }
