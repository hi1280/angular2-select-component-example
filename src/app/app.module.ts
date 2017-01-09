import {NgModule}      from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

import {AppComponent }  from "./app.component";
import {AppRoutingModule, routedComponents } from "./app-routing.module"
import {SelectOptionsComponent } from "./select-options/select-optons.component"

@NgModule({
  imports:[ 
    BrowserModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    routedComponents,
    SelectOptionsComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
