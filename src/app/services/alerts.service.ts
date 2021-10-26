import {Injectable} from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(public toastController: ToastController) {
  }

  async presentToast(text?: string, type?: boolean) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000,
      color: type?'danger':'success'
    });
    await toast.present();
  }
}
