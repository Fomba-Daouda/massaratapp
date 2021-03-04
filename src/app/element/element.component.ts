import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  constructor(private http : HttpClient,private router:Router) { }
  elements : any ;
  page = 2;
  pageSize = 10 ;
  searchText :any ; // ngModel
  ngOnInit(): void {
    this.getElements();
  }
  getElements(){
    return this.elements = this.http.get("http://jsonplaceholder.typicode.com/photos");
  }
  getElementsByTilte(){
    if(this.searchText ==""){
      this.ngOnInit();
    }
    else{
      return this.elements = this.http.get("http://jsonplaceholder.typicode.com/photos?title_like="+this.searchText);
    } 
  }
  deleteElements(id){
    console.log("L'élement " +id+ " supprimé");
    return this.http.delete("http://jsonplaceholder.typicode.com/photos/"+id);
   
  } 
  onSelect(element){
       this.router.navigate(['/element',element.id]);
  }
}
