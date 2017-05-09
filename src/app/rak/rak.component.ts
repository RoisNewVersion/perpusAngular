import { Component, OnInit } from '@angular/core';
import { RakService } from '../service/rak.service';
import { Rak } from '../model/rak';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsService } from 'angular2-notifications';

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
  // for modal
  private modalRef: NgbModalRef
  // loading 
  loading: boolean = false

  constructor(private rak: RakService, private modal: NgbModal, private notif: NotificationsService) { }

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
    this.modalRef = this.modal.open(template)
  }
  // edit
  edit(d, temp) {
    this.dataCollect = d
    this.dataCollect.type = 'edit'
    this.modalRef = this.modal.open(temp)
  }
  // save 
  save(d) {
    this.loading = true
    this.rak.save(d).subscribe(res => {
      if (!res.error) {
        this.loading = false
        this.notif.success(res.type, res.msg)
        this.getAll()
        this.closeModal()
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

  // close modal
  closeModal() {
    this.modalRef.dismiss('haha')
  }
}
