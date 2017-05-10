import { Component, OnInit } from '@angular/core';
import { RakService } from '../service/rak.service';
import { Rak } from '../model/rak';
import { NotificationsService } from 'angular2-notifications';
import { BootstrapService } from '../service/bootstrap.service';

@Component({
  selector: 'app-rak',
  templateUrl: './rak.component.html',
  styleUrls: ['./rak.component.css'],
  providers: [RakService]
})
export class RakComponent implements OnInit {
  data: Rak[]
  // add / edit
  dataCollect: any = {}
  // loading 
  loading: boolean = false

  constructor(private rak: RakService, private modal: BootstrapService, private notif: NotificationsService) { }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.rak.getAll().subscribe(data => {
      this.data = data
    }, err => {
      console.log('err', err)
    })
  }
  // add
  add(template) {
    this.dataCollect = {}
    this.dataCollect.type = 'new'
    this.modal.showModal(template)
  }
  // edit
  edit(d, temp) {
    this.dataCollect = d
    this.dataCollect.type = 'edit'
    this.modal.showModal(temp)
  }
  // save 
  save(d) {
    this.loading = true
    this.rak.save(d).subscribe(res => {
      if (!res.error) {
        this.loading = false
        this.notif.success(res.type, res.msg)
        this.getAll()
        // this.closeModal()
        this.modal.hideModal()
        // console.log(res)
      } else {
        this.notif.error(res.type, res.msg)
      }
    }, err => {
      console.log(err)
    })
  }
  // delete 
  delete(d) {
    if (confirm('Yakin Delete ' + d.nama_rak + ' ???')) {
      this.rak.delete(d).subscribe(res => {
        if (!res.error) {
          this.notif.success(res.type, res.msg)
          this.getAll()
        }else{
          this.notif.error(res.type, res.msg)          
        }
      }, err => {

      })
    }
  }
}
