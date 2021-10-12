import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  
  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl:NavController) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'correo': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
    
  }
  ngOnInit() {
  }
  async guardar(){
    var f=this.formularioRegistro.value;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Registro',
        subHeader: 'Error al Guardar ',
        message: 'Debes llenar todos los datos!.',
        buttons: ['Aceptar']
      });
  
      await alert.present();

    }else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Registro',
        message: 'Datos Registrados Correctamente',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
    var usuario={
      nombre:f.nombre,
      apellido:f.apellido,
      correo:f.correo,
      password:f.password

    }
    localStorage.setItem('usuario',JSON.stringify(usuario));
    this.navCtrl.navigateRoot('inicio');
    localStorage.setItem('ingresado','true');
  }

  

}
