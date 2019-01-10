import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MyApp } from './app.component';
import { NewsProvider } from '../providers/news/news';
import { HttpInterceptorProvider } from '../providers/http-interceptor/http-interceptor';

@NgModule({
  declarations: [MyApp],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NewsProvider,
    HttpInterceptorProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: HttpInterceptorProvider,
      multi: true
    }
  ]
})
export class AppModule {}
