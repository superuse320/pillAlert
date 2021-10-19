import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-duracion',
  templateUrl: './duracion.page.html',
  styleUrls: ['./duracion.page.scss'],
})
export class DuracionPage implements OnInit {

  myForm: FormGroup;
  estado:string;

  constructor(private fb: FormBuilder) {
    this.estado="";
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      hasta: ['', ],
     // email: ['', [Validators.required, Validators.email]],
     // message: ['', [Validators.required, Validators.minLength(15)]],
    });
    this.myForm.valueChanges.subscribe(res=>{
    console.log(res);
    
    })
  }
  onSubmit(form: FormGroup) {
    // console.log('Valid?', form.valid); // true or false
    // console.log('Name', form.value.hasta);
  }
  change(event:any){
    console.log(event.detail.value);
    this.estado=event.detail.value;
  }
}
