import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'als-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  cpfValid: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.validateUrl()
  }

  // Observa se existe o parâmetro CPF na url, se existir mostra o botão para inicar uma emissão, senão o botão não é mostrado
  validateUrl(){
    this.router.events.subscribe((event: any) => {
      if(event instanceof NavigationStart){
        if(event.url.search("cpf=") > 0){
          this.cpfValid = true
        }else{
          this.cpfValid = false
        }
      }
    });
  }

  newIssue(){
    this.router.navigate(['/validate-cpf'])
  }
}
