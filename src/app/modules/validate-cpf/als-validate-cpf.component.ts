import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CpfValidation } from 'src/app/configurations/cpf-validation';

@Component({
  selector: 'als-validate-cpf',
  templateUrl: './als-validate-cpf.component.html',
  styleUrls: ['./als-validate-cpf.component.css']
})
export class AlsValidateCpfComponent implements OnInit {

  form: FormGroup;
  validCpf: boolean = false;

  constructor(public validatio: CpfValidation) { }

  ngOnInit(): void {
    this.initializeForm()
    this.onChanges()
  }

  initializeForm() {
    const builder = new FormBuilder();
    this.form = this.validatio.BuildFormBuilder(builder);
  }

  clicked() {
    console.log(this.form.value)
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

}
