import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onCloseModal() {
    this.closeModal.emit(true);
  }

}
