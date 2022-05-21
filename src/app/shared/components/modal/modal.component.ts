import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'als-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  show: boolean = false;
  message: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  setMessage(message: string){
    this.message = message;
  }
  
  toggle () {
    this.show = !this.show;
  }

}
