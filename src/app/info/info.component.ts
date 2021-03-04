import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  public idElement ;
  element ;
  
  constructor(private route : ActivatedRoute,private http : HttpClient) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.idElement = id ;
    this.getElementById();
    console.log(this.element);
  } 
  getElementById(){
      return this.element = this.http.get("http://jsonplaceholder.typicode.com/photos?id="+this.idElement);
  }
}
