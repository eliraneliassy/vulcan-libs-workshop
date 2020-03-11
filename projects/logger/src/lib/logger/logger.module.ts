
import { LoggerConfig } from './logger-config.interface';
import { LoggerService } from './logger.service';
import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const LOGGER_CONFIG: InjectionToken<LoggerConfig> =
  new InjectionToken<LoggerConfig>('Logger Config');

@NgModule({

  providers: [
    LoggerService,
    { provide: HTTP_INTERCEPTORS, useClass: LoggerService, multi: true }
  ]
})
export class LoggerModule {
  static init(config: LoggerConfig): ModuleWithProviders<LoggerModule> {
    return {
      ngModule: LoggerModule,
      providers: [
        { provide: LOGGER_CONFIG, useValue: config }
      ]
    };
  }
}
