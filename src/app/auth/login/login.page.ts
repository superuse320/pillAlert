import {Component, OnInit} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import {AlertController, NavController} from '@ionic/angular';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(protected loginservice: LoginService, public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController) {

    this.formularioLogin = this.fb.group({
      'correo': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })

  }

  ngOnInit() {
  }

  async ingresar() {
    var {correo, password} = this.formularioLogin.value;
    
    this.loginservice.login(correo, password)
    
      .subscribe(data => {
          console.log(data);
          this.navCtrl.navigateRoot('tabs');
        }, async error => {
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Datos Incorrectos',

            message: 'Ingreso SIstema',
            buttons: ['Aceptar']
          });

          await alert.present();
         
          
        }
        
      );

    // var usuario=JSON.parse(localStorage.getItem('usuario'));
    // this.navCtrl.navigateRoot('inicio');
    // if (usuario.correo==f.correo && usuario.password==f.password){
    //   const alert = await this.alertController.create({
    //     cssClass: 'my-custom-class',
    //     header: 'Datos Correctos',

    //     message: 'Ingresando al Sistema',
    //     buttons: ['Ingresar']
    //   });

    //   await alert.present();
    //   localStorage.setItem('ingresado','true');
    // }else{
    //   const alert = await this.alertController.create({
    //     cssClass: 'my-custom-class',
    //     header: 'Ingreso',
    //     subHeader: 'Error al Ingresar ',
    //     message: 'Verfique su usuario y/o contraseña!.',
    //     buttons: ['Aceptar']
    //   });

    //   await alert.present();
    // }
  }

}
