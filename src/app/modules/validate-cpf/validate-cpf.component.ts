import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { CpfValidation } from 'src/app/base/configurations/cpf-validation';
import { Person } from 'src/app/base/models/person';
import data from 'src/app/data.json'

@Component({
  selector: 'als-validate-cpf',
  templateUrl: './validate-cpf.component.html',
  styleUrls: ['./validate-cpf.component.css']
})
export class ValidateCpfComponent implements OnInit {

  @ViewChild('modal') modal: any;

  form: FormGroup;
  validCpf: boolean = false;

  person: Person = new Person();

  constructor(public validatio: CpfValidation, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm()
    this.onChanges()
    this.validateUrl()
  }

  initializeForm() {
    const builder = new FormBuilder();
    this.form = this.validatio.BuildFormBuilder(builder);
  }

  clicked() {
    this.person = data.filter((d) => this.removeMask(d.cpf) == this.form.value.cpf)[0]
    this.checkPerson()
  }

  checkPerson(){
    if(this.person == undefined && this.form.valid){
      this.modal.setMessage("CPF não encontrado")
      this.modal.toggle()
    } else if(this.person == undefined && this.form.invalid){
      this.modal.setMessage("Informe um CPF válido")
      this.modal.toggle()
    }else{
      this.addParamInRoute()
    }
  }

  addParamInRoute(){
    this.router.navigate(['/validate-cpf', { cpf: this.form.value.cpf }])
  }

  removeMask(cpfNumber: string):string {
    return cpfNumber.replace(/\D/g,'')
  }
  
  onChanges(){
    this.form.valueChanges.subscribe((val) => {
      if(val.cpf != null){
        this.validateCpf(val.cpf)
      }
    })
  }
  
  validateCpf(cpfNumber){
    let sum: number = 0;
        
    if(cpfNumber.length === 11){
      if ((cpfNumber === '00000000000' || cpfNumber === '11111111111' || cpfNumber === '22222222222' || cpfNumber === '33333333333' || 
          cpfNumber === '44444444444' || cpfNumber === '55555555555' || cpfNumber === '66666666666' || cpfNumber === '77777777777' || cpfNumber === '88888888888' || 
          cpfNumber === '99999999999') && cpfNumber.length === 11) {
          this.validCpf = false
      }else{
        this.validCpf = true
      }
  
      for (let i = 1; i <= 9; i++) {
        sum = sum + parseInt(cpfNumber.substring(i - 1, i)) * (11 - i);
      }

      var resto = (sum * 10) % 11;
      if ((resto === 10) || (resto === 11)) {
        resto = 0;
      }

      if (resto !== parseInt(cpfNumber.substring(9, 10))) {
        this.validCpf = false
      }

      sum = 0;
      for (let k = 1; k <= 10; k++) {
        sum = sum + parseInt(cpfNumber.substring(k - 1, k)) * (12 - k)
      }

      resto = (sum * 10) % 11;
      if ((resto === 10) || (resto === 11)) {
        resto = 0;
      }

      if (resto !== parseInt(cpfNumber.substring(10, 11))) {
        this.validCpf = false
      }
      
    }else if(cpfNumber.length < 11){
      this.validCpf = false
    }
  }

  // Observa se existe o parâmetro CPF na url, se não existir, limpa a model person,
  // parando de mostrar as informações da pessoa com CPF válido
  validateUrl(){
    this.router.events.subscribe((event: any) => {
      if(event instanceof NavigationStart){
        if(event.url.search("cpf=") < 0){
          this.person = null
          this.form.reset()
        }
      }
    });
  }
}
