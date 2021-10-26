import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PatientService} from "../../../services/patient.service";
import {NavController} from "@ionic/angular";
import {AlertsService} from "../../../services/alerts.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    private alertsService: AlertsService,
    private patientService: PatientService,
  ) {
    this.formGroup = this.formBuilder.group({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      fecha_nacimiento: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      celular: ['',],
      direccion: ['',],
    });
  }

  ngOnInit() {
  }


  save(value: any) {
    console.log(value);
    this.patientService.create(value).subscribe((res: any) => {
      if (res.ok) {
        this.alertsService.presentToast(res.message);
        this.navCtrl.navigateRoot('/patient');
      }

    }, error => {
      console.error(error);
      this.alertsService.presentToast(error.message, error);
    });
  }

  date(event: CustomEvent) {
    console.log(event.detail.value);
    const date = new Date(event.detail.value);
    this.formGroup.patchValue({
      'fecha_nacimiento':
        `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
    });
    // this.formGroup.patchValue({
    //   'fecha_nacimiento':
    //     new Intl.DateTimeFormat('en-US').format(date)
    // });
  }
}
