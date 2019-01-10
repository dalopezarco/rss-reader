import { ToastController } from 'ionic-angular';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class HttpInterceptorProvider implements HttpInterceptor {
  constructor(private toastCtrl: ToastController) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    return next.handle(req).pipe(
      catchError(err => {
        this.presentToast();
        return ErrorObservable.create(err);
      })
    );
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Sin conexión a internet',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
