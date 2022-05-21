import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/base/models/person';

@Component({
  selector: 'als-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  @Input() person: Person = new Person();

  constructor() { }

  ngOnInit(): void {
  }

}
