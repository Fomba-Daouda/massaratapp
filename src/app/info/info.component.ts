import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  public idElement ;
  elements  ;
  color;
  constructor(private route : ActivatedRoute,private http : HttpClient) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.idElement = id ;
    this.elements = this.http.get("http://jsonplaceholder.typicode.com/photos?id="+this.idElement);
  
  } 
}
