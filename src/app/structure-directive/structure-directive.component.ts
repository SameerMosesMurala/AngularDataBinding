import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee.model';
@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {


  ngOnInit(): void {
  }
flag:boolean=false;
b1:string="show";
stdNames:Array<string>=["Sameer","SAmeena","Manish"];
skillNames:Array<string>=new Array();
emp:Employee=new Employee(100,"Sameer",100000);
employees:Array<Employee>=new Array();
constructor(){
  let emp1=new  Employee(100,"Sameer",100000);
  let emp2=new  Employee(200,"Sam",100000);
  let emp3=new  Employee(300,"Sameena",100000);
  let emp4=new  Employee(400,"Manish",100000);
  this.employees.push(emp1);
  this.employees.push(emp2);
  this.employees.push(emp3);
  this.employees.push(emp4);
}
change():void{
  this.flag=!this.flag;
  if(this.b1=="show")
  {
    this.b1="Hide";
  }
  else{
    this.b1="show";
  }
  
}

addSkillName(name:any):void{
  this.skillNames.push(name);
  }

}
