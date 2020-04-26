import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http : HttpClient, public db : AngularFireDatabase) { }

  getProjekte(){
    // return (this.http.get('https://primaenrgy-7887e.firebaseio.com/projekte.json'))
     return(this.db.list('projekte').valueChanges())
  }
}
