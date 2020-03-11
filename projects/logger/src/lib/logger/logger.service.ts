import { LoggerConfig } from './logger-config.interface';
import { LOGGER_CONFIG } from './logger.module';
import { Injectable, Inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggerService implements HttpInterceptor {


  constructor(@Inject(LOGGER_CONFIG) private config: LoggerConfig) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('a new http request from project', this.config.projectName);
    console.log(req);
    return next.handle(req);
  }


}
