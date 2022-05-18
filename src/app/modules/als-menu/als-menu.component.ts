import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'als-menu',
  templateUrl: './als-menu.component.html',
  styleUrls: ['./als-menu.component.css']
})
export class AlsMenuComponent implements OnInit {

  isOpenMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
    var bodyStyles = document.body.style;
    bodyStyles.setProperty('--menuSize', "85px");
    bodyStyles.setProperty('--alignItens', "center");
    bodyStyles.setProperty('--paddingMenuItens', "0");
    bodyStyles.setProperty('--headerWith', "90vw");
  }

  openMenu(){
    this.isOpenMenu = !this.isOpenMenu
    var bodyStyles = document.body.style;
    bodyStyles.setProperty('--menuSize', this.isOpenMenu ? "406px" : "85px");
    bodyStyles.setProperty('--alignItens', this.isOpenMenu ? "flex-start" : "center");
    bodyStyles.setProperty('--paddingMenuItens', this.isOpenMenu ? "0 0 0 29px" : "0");
    bodyStyles.setProperty('--headerWith', this.isOpenMenu ? "67vw" : "90vw");
  }

}
