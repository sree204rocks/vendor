
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SreenuService } from '../sreenu.service';

@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.scss']
})
export class Screen3Component implements OnInit {
 
show:boolean=true;
show1:boolean=false;
myForm:any;
pas:any;
pas1:any;




  constructor(public router:Router,private sreenuservice:SreenuService, private route:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.myForm = new FormGroup({
      pass: new FormControl('',[Validators.required, Validators.minLength(4)]),
      pass1: new FormControl('',[Validators.required, Validators.minLength(4)]),
     
      
     
    });


  }
  

  toggle(){
    this.show1=true;
    this.show=false;
  }
  toggle1(){
    this.show=true;
    this.show1=false;
  }
    
  submit(){
   if (this.myForm.valid ) { 
     
     
  
    if (this.pas1==this.pas) {
      this.router.navigate(['screen5'])
    }
    else{
      alert('password missmatch')
    }
     
   }
   else{
     alert('password dose not match Reqiured ctriteria')
   }
   
  }
  



 
}

