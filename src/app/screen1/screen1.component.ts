import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { url } from 'inspector';
import { element } from 'protractor';
import { elementAt } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { SreenuService } from '../sreenu.service';



@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component implements OnInit {
  myForm: any;
  Url: any;
  editValue:any;
  listdata: any;
  show: any;





  // number1: any = this.sreenuservice.number;



  constructor(public router: Router, private sreenuservice: SreenuService, private route: ActivatedRoute, public apiService: ApiService) { }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      name: new FormControl(''),
      name1: new FormControl(''),
      email: new FormControl(''),
      number: new FormControl(''),
      class: new FormControl(''),
    });

    this.listdata = [];
  }

  user1() {
    this.show = 'signin';
  }


  user() {
    // this.listdata.push(this.myForm.value);
    this.myForm.reset();

  }

  delete1(data: any) {
    let Url = 'http://localhost:3000/employees/' + data.id;
    this.apiService.delete(Url)
      .subscribe(data => {
        if (data) {
          console.log(data);
          this.get();
        }
      });
  }

  get() {
    let Url = 'http://localhost:3000/employees/';
    this.apiService.get(Url)
      .subscribe(data => {
        if (data) {
          console.log(data);
          this.show = 'signin';
          this.listdata = data;
        }
      });
  }

  post() {

    if(this.editValue){
      this.put(this.editValue);
      return;
    }
    let Url = 'http://localhost:3000/employees';
    let obj = this.myForm.value;
    let obj1 = {
      userId:'',
      name:'',
      transaction:{
        firstname:this.myForm.value.name,
        lastname:'',
        myEmail:'',
        Phone:'',
        className:'',
        phone:{
          landline:'',
          personal:''
        }
      }
    }
    this.apiService.post(Url, obj)

      .subscribe(data => {
        if (data) {
          console.log(data);
          this.myForm.reset();
          this.get();
        }
      });

  }
  getById(itemData: any) {
    let Url = 'http://localhost:3000/employees/' + itemData.id;

    this.apiService.get(Url)

      .subscribe(data => {
        if (data) {
          console.log(data);
          this.myForm.patchValue({
            name: data.name,
            name1: data.name1,
            email: data.email,
            number: data.number,
            class: data.class,
          });
          this.editValue = data.id;
        }
      });
  }
  put(id: any) {
    let obj = this.myForm.value;

    let Url = 'http://localhost:3000/employees/' + this.editValue;

    this.apiService.put(Url, obj)

      .subscribe(data => {
        if (data) {
          console.log(data);
          this.editValue='';
          this.get();
          this.myForm.reset();
        }
      });
  }





  delete() {
    let Url = 'http://localhost:3000/employees/2';


    this.apiService.delete(Url)

      .subscribe(data => {
        if (data) {
          console.log(data);
        }
      });
  }

}


function delete1() {
  throw new Error('Function not implemented.');
}
//function obj(Url: string, obj: any) {
 // throw new Error('Function not implemented.');
//}

//function i(i: any) {
 // throw new Error('Function not implemented.');
//}

