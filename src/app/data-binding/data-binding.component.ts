import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
fname:string="Sameer";
lname:string="Moses";
age:number=21;
skillInfo:string="";
changeAge():void{
 this.age=25;
}

addSkill(skill:any):void{
console.log(skill);
this.skillInfo=skill;
}

fun():void{
console.log("Event fire");
}

}
