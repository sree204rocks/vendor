import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { SreenuService } from '../sreenu.service';

@Component({
  selector: 'app-screen4',
  templateUrl: './screen4.component.html',
  styleUrls: ['./screen4.component.scss']
})
export class Screen4Component implements OnInit {

  myForm: any;
  regex=/^[0-9][0-9]{5}$/;

  constructor(public router:Router,private sreenuservice:SreenuService, private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.myForm = new FormGroup({
      pin: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(8),Validators.pattern(this.regex)]),
     
    });
  }
  
  

  conti(){
               if (this.myForm.value,this.myForm.valid) {
               
                                     this.router.navigate(['screen5']);
               }else{
                 alert('enter valid pincode')
               }
  }
  
}

