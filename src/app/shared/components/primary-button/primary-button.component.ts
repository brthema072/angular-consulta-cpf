import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'als-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent implements OnInit {

  @Input() text: string = "";
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitClick() {
    this.clicked.emit()
  }

}
