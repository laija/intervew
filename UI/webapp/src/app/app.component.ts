import { Component, OnInit } from '@angular/core';
import { Service } from './service';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(public service: Service){}
  operation="";
  result="";
  profileForm = new FormGroup({
    input1: new FormControl(''),
    input2: new FormControl(''),
  });
  title = 'webapp';
  formatLabel(value: number) {
    return value;
  }

  getOperationResult(){
    const body = { integer1: this.profileForm.controls.input1.value[0] , integer2: this.profileForm.controls.input2.value[0]  };

    if(this.operation == 'getaSum') {
      if (body.integer1 == undefined || body.integer2 == undefined) {
        this.result = 'You need to have both numbers to perform this operation';
      }
    } else {
      if (body.integer1 == undefined || body.integer1 == null ) {
        this.result = 'You need need to set the first integer';
      } else {
        this.service.getResult(this.operation, body).subscribe(response => {
          this.result = response.result;
        })
      }
    }
  }

  changeOperation(event:any) {
      this.operation = event;
  }

  checkFirstInteger(value) {
    value = this.checkString(value);
    this.profileForm.controls.input1.setValue(value);
  }

  checkSecondInteger(value) {
    value = this.checkString(value);
    this.profileForm.controls.input2.setValue(value);
  }

  checkString(value) {
    value = value.match(/^[0-9]+/g,);
    return value;
  }
}
