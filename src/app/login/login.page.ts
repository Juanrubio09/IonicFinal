import { Component} from '@angular/core';
import { Route, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string='';
  password: string='';

  constructor(
    private router: Router,
    private AlertController: AlertController,
    private ToastController: ToastController
  ) {}

  async presentLoginAlert(){
    const alert = await this.AlertController.create({
      header: 'Iniciar sesion',
      backdropDismiss: false,
      inputs:[
        {
          name: 'username',
          type: 'text',
          placeholder: 'Usuario',
        },
        {
          name: 'password',
          type: 'text',
          placeholder: 'Contraseña',
        },
      ] ,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            if (data.username === 'juanrubio09' && data.password === '1234') {
              this.router.navigate(['/home']);
            } else {
              this.presentToast('Credenciales incorrectas.');
              this.presentLoginAlert();
            }
          },
        },
      ],
    });

    await alert.present();
  }

  async presentToast(message: string){
    const toast = await this.ToastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  ionViewDidEnter(){
    this.presentLoginAlert();
  }
}
