import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeshqipComponent } from './homeshqip/homeshqip.component';
import { HomeanglishtComponent } from './homeanglisht/homeanglisht.component';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';

import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeshqipComponent,
    HomeanglishtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,   
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
