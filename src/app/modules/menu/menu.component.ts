import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'als-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isOpenMenu: boolean = false;
  menuImage: string = "assets/images/logo.png"
  constructor() { }

  ngOnInit(): void {
    var bodyStyles = document.body.style;
    bodyStyles.setProperty('--menuSize', "85px");
    bodyStyles.setProperty('--alignItens', "center");
    bodyStyles.setProperty('--paddingMenuItens', "10px 0 10px 0");
  }

  switchImage(){
    if(this.isOpenMenu){
      this.menuImage = "assets/images/google-logo-1.png"
    }else{
      this.menuImage = "assets/images/logo.png"
    }
  }

  openMenu(){
    this.isOpenMenu = !this.isOpenMenu
    
    this.switchImage()

    var bodyStyles = document.body.style;
    bodyStyles.setProperty('--menuSize', this.isOpenMenu ? "406px" : "85px");
    bodyStyles.setProperty('--alignItens', this.isOpenMenu ? "flex-start" : "center");
    bodyStyles.setProperty('--paddingMenuItens', this.isOpenMenu ? "10px 0 10px 29px" : "10px 0 10px 0");
  }

}
