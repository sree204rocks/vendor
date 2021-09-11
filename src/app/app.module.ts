import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Screen2Component } from './screen2/screen2.component';
import { Screen3Component } from './screen3/screen3.component';
import { Screen4Component } from './screen4/screen4.component';
import { Screen5Component } from './screen5/screen5.component';
import { Screen6Component } from './screen6/screen6.component';
import { Screen1Component } from './screen1/screen1.component';
import { GstformComponent } from './gstform/gstform.component';
import { NogstformComponent } from './nogstform/nogstform.component';
import { BankformComponent } from './bankform/bankform.component';
import { SreenuService } from './sreenu.service';

@NgModule({
  declarations: [
    AppComponent,
    Screen2Component,
    Screen3Component,
    Screen4Component,
    Screen5Component,
    Screen6Component,
    Screen1Component,
    GstformComponent,
    NogstformComponent,
    BankformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,HttpClientModule
  ],
  providers: [SreenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
