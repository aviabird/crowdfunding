import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onCloseModal() {
    this.closeModal.emit(true);
  }

}
