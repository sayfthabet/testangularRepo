import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarSayfeddinethabetComponentComponent } from './nav-bar-sayfeddinethabet-component/nav-bar-sayfeddinethabet-component.component';
import { VehiculeSayfeddinethabetComponentComponent } from './vehicule-sayfeddinethabet-component/vehicule-sayfeddinethabet-component.component';
import { AddVehiculeSayfeddinethabetComponentComponent } from './add-vehicule-sayfeddinethabet-component/add-vehicule-sayfeddinethabet-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarSayfeddinethabetComponentComponent,
    VehiculeSayfeddinethabetComponentComponent,
    AddVehiculeSayfeddinethabetComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
