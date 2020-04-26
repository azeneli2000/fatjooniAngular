import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service'
@Component({
  selector: 'app-homeshqip',
  templateUrl: './homeshqip.component.html',
  styleUrls: ['./homeshqip.component.css']
})
export class HomeshqipComponent implements OnInit {

  constructor(public daata: DataService) { }
  arrayProjekte: any[] = []
  ngOnInit() {
    this.daata.getProjekte().subscribe((projekte) => {
      //nga objekt objektesh e kalon ne arrray objektesh
      // for (const key in projekte) {
      //   this.arrayProjekte.push(projekte[key]);
      // }
      // console.log(this.arrayProjekte.length)
      this.arrayProjekte = projekte;
    })
  }
}
