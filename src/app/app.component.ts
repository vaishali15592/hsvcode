import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalRef: BsModalRef;
  title = 'hsv';
  showSingle = false;
  showTwo = false;
  changeText: boolean;
  constructor(private modalService: BsModalService) {
    this.changeText = false;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  addSingleElement() {
    this.modalRef.hide();
    this.showTwo = false;
    this.showSingle = true;
  }

  addTwoElement() {
    this.modalRef.hide();
    this.showSingle = false;
    this.showTwo = true;
  }

  mouseFunction() {
    this.showTwo = false;
    this.showSingle = false;
  }


}