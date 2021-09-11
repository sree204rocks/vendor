import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SreenuService } from '../sreenu.service';

@Component({
  selector: 'app-screen5',
  templateUrl: './screen5.component.html',
  styleUrls: ['./screen5.component.scss']
})
export class Screen5Component implements OnInit {

dataform:any=this.sreenuservice.data;
ottp:any;

  constructor(public router:Router,private sreenuservice:SreenuService, private route:ActivatedRoute) { }

  
  ngOnInit(): void {
    this.ottp=this.dataform.otp;
  }
  
}
