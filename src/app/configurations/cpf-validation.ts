import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class CpfValidation {
    BuildFormBuilder(formBuilder: FormBuilder) {
        return formBuilder.group({
            cpf: ['', [Validators.required]]
        });
    }
}