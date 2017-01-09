import { Component, OnInit } from "@angular/core";

@Component({
    selector: "example",
    templateUrl: "./example.component.html"
})
export class ExampleComponent implements OnInit {
  selectedValue: string;
  options:any = [
    {name:"one",value:"1"},
    {name:"two",value:"2"},
    {name:"three",value:"3"}
  ]

  ngOnInit():void{
    this.selectedValue="1";
  }
}
