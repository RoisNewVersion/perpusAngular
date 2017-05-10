import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Injectable()
export class BootstrapService {
  // for modal
  private modalRef: NgbModalRef

  constructor(
    private modal: NgbModal
  ) { }

  // show modal
  showModal(template, options?){
    this.modalRef = this.modal.open(template, options)
  }
  // hide modal
  hideModal(){
    this.modalRef.dismiss('close')
  }
}
