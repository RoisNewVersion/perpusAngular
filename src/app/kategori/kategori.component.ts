import { Component, OnInit } from '@angular/core';
import { KategoriService } from '../service/kategori.service';
import { Kategori } from '../model/kategori';
import { NotificationsService } from 'angular2-notifications';
import { BootstrapService } from '../service/bootstrap.service';
@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css'],
    providers: [KategoriService]

})
export class KategoriComponent implements OnInit {
  data: Kategori[]
  // add / edit
  dataCollect: any = {}
  // loading 
  loading: boolean = false
  constructor(private bs: BootstrapService, private notif: NotificationsService, private kategori: KategoriService) { }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.kategori.getAll().subscribe(data => {
      this.data = data
    }, err => {
      console.log('err', err)
    })
  }
  // add
  add(template) {
    this.dataCollect = {}
    this.dataCollect.type = 'new'
    this.bs.showModal(template)
  }
  // edit
  edit(d, temp) {
    this.dataCollect = d
    this.dataCollect.type = 'edit'
    this.bs.showModal(temp)
  }
  // save 
  save(d) {
    this.loading = true
    this.kategori.save(d).subscribe(res => {
      if (!res.error) {
        this.loading = false
        this.notif.success(res.type, res.msg)
        this.getAll()
        // this.closebs()
        this.bs.hideModal()
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
    if (confirm('Yakin Delete ' + d.nama_kategori + ' ???')) {
      this.kategori.delete(d).subscribe(res => {
        if (!res.error) {
          this.notif.success(res.type, res.msg)
          this.getAll()
        } else {
          this.notif.error(res.type, res.msg)
        }
      }, err => {

      })
    }
  }
}
