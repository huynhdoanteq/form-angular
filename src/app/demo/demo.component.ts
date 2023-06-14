import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface IUser {
  firstname: string;
}
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  reactiveForm!: FormGroup;
  currentCustomer = {'name': 'hello'};
  nullCustomer = null;
  items = ['Angular', 'Javascript', 'Reactjs', 'Vuejs', 'Laravel'];
  isSpecial: boolean = true;
  canSave: boolean = true;
  isUnchanged: boolean = true;
  currentStyles: Record<string, string> = {};
  dataForm: { last: string; first: string; }[] = [];
  user: IUser;

  constructor() {
    this.user = {} as IUser;
  }

  ngOnInit() {
    this.onColorChange();
    // this.reactiveForm = new FormGroup({
    //   firstname: new FormControl(this.user.firstname, [
    //     Validators.required,
    //     Validators.minLength(1),
    //     Validators.maxLength(250),
    //   ]),
    // });
  }

  // get firstname() {
  //   return this.reactiveForm.get('firstname')!;
  // }

  // validate(): void {
  //   if (this.reactiveForm.invalid) {
  //     for (const control of Object.keys(this.reactiveForm.controls)) {
  //       this.reactiveForm.controls[control].markAsTouched();
  //     }
  //     return;
  //   }

  //   this.user = this.reactiveForm.value;

  //   console.info('firstname:', this.user.firstname);
  // }

  onColorChange() {
    this.currentStyles = {
      'font-size': this.isSpecial ? '24px' : '12px'
    }
  }

  addText(firstname:string, lastname: string): void {
    console.log(firstname, lastname);
    this.dataForm.push({ last: lastname, first: firstname });
    console.log(this.dataForm);
  }
}
