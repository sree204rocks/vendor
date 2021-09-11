import { Component, OnInit } from '@angular/core';

import { SreenuService } from '../sreenu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';





@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.scss']
})
export class Screen2Component implements OnInit {

  number2: any = this.sreenuservice.number;

  emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  myForm: any;









  constructor(public router: Router, private sreenuservice: SreenuService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      name1: new FormControl('', [Validators.required, Validators.minLength(4)]),
      otp: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegEx), Validators.minLength(1)]),
     
    });
    
  }


  onSubmit() {
    if (this.myForm.value, this.myForm.valid) {
      this.sreenuservice.data = this.myForm.value;
      this.router.navigate(['screen5']);
    }
    else {
      alert('All Details are Mandatory')
    }
    this.myForm = this.sreenuservice.data;


  }



}
