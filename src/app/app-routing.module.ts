import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import{Screen1Component} from './screen1/screen1.component';
import{Screen2Component} from './screen2/screen2.component';
import{Screen3Component} from './screen3/screen3.component';
import{Screen4Component} from './screen4/screen4.component';
import{Screen5Component} from './screen5/screen5.component';
import{Screen6Component} from './screen6/screen6.component';
import{GstformComponent} from './gstform/gstform.component';
import{NogstformComponent} from './nogstform/nogstform.component';
import{BankformComponent} from './bankform/bankform.component'

const routes: Routes = [
  {
    path:'',
    redirectTo:'screen2',
    pathMatch:'full'
  },
  {
    path:'app',
    component:AppComponent
  },
  {
    path:'screen2',
    component:Screen2Component
  },
  {
    path:'screen3',
    component:Screen3Component
  },
  {
    path:'screen4',
    component:Screen4Component
  },
  {
    path:'screen5',
    component:Screen5Component
  },
  {
    path:'screen6',
    component:Screen6Component
  },
  {
    path:'screen1',
    component:Screen1Component
  },
  {
    path:'gstform',
    component:GstformComponent
  },
  {
    path:'nogstform',
    component:NogstformComponent
  },
  {
    path:'bankform',
    component:BankformComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
