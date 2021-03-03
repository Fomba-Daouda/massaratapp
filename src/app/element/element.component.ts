import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  constructor(private http : HttpClient) { }
  elements : any ;
  page = 1;
  pageSize = 3 ;
  searchText :any ; // ngModel
  ngOnInit(): void {
    this.getElements();
  }
  getElements(){
    return this.elements = this.http.get("http://jsonplaceholder.typicode.com/photos");
  }
  getElementsMotCle(){
    if(this.searchText ==""){
      this.ngOnInit();
    }
    else{
      return this.elements = this.http.get("http://jsonplaceholder.typicode.com/photos?title_like="+this.searchText);
    } 
  }
  deleteElements(id){
    console.log(id);
    return this.http.delete("http://jsonplaceholder.typicode.com/photos/"+id);
   
  } 
   
}
