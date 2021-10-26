import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';
import {PatientService} from '../../../services/patient.service';
import {Paginate} from '../../../models/paginate.model';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  evento: any;
  currentModal = null;
  paginated: Paginate;
  refres: any;
  isFixed = true;
  patients: any[] = [];

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(protected patientService: PatientService) {
  }

  ngOnInit() {
    this.list();

  }

  list() {
    this.patientService.getAllByManagerId().subscribe(res => {
      console.log(res);
      this.patients = res.data;
      this.paginated = res;

    });
  }


  doRefresh(event: any) {
    this.refres = event; // todo no funciona
    this.isFixed = false;
    setTimeout(() => {
      this.list();
      // this.list('');
      event.target.complete();

      // this.socios = [];
    }, 2000);
  }

  loadDataNext(event: any) {

    console.log('cargando');
    console.log(this.paginated.links.next);
    if (this.paginated.links.next) {
      this.patientService.netxPaginate(this.paginated.links.next)
        .pipe(finalize(() => {
          event.target.complete();
        }))
        .subscribe(res => {
          console.log('load', res);
          this.paginated = res;
          this.patients.push(...res.data);
        });
    } else {
      event.target.complete();
      this.infiniteScroll.disabled = true;
      return;
    }
  }

}
