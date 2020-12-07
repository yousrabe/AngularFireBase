import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public number1: number;
  public result: number;
  public billetD:number;
  public billetC:number;
  public billetDix:number; 
  //submited=true;
  errorMessage: string = '';
  money: {title: string, subtitle: string, content: string, url: string}[] = [
    {title: '2 EURO', subtitle: 'Subtitle', content:'content here', url: '../assets/deux.jpg'},
    {title: '5 EURO', subtitle: 'Subtitle', content: 'Content here', url: '../assets/cinqe.jpg'},
    {title: '10 EURO', subtitle: 'Subtitle', content: 'Content here', url: '../assets/dix.jpg'},
    
  ];
  constructor() { }

  ngOnInit() {
  }
  logout()
  {}
calcul()
{

{let nombre=Number(this.number1)
let a=0;
let b=0;
let c=0;
//console.log(this.number1);
if( nombre === 0)
{
  this.errorMessage='';
  a=0;
  b=0;
  c=0;
} 
if( nombre === 1 )
{
 
  this.errorMessage='Désoler mais les piéces de un euro n éxiste pas' ;
  a=0;
  b=0;
  c=0;

  
}
if( nombre === 3)
{
 
  this.errorMessage='désoler il n existe pas les piéces de un euro' ;
  a=0;
  b=0;
  c=1;

  
}

//if impair
if(nombre % 2 == 1 && nombre!=3 && nombre!=1) {
   this.errorMessage='';
b=1;
nombre = nombre - 5;
console.log("Fardi");
console.log(nombre);
}

a = Math.floor(nombre /10);
nombre = nombre - a*10
c = Math.floor(nombre /2);
console.log(nombre)
console.log("on a alors"+a+"de dix et"+b+"de cinq et "+c+"de deux");
this.billetD=c;
this.billetC=b;
this.billetDix=a;
console.log("on a alors"+this.billetDix+"de dix et"+this.billetC+"de cinq et "+this.billetD+"de deux");

return {
two: c,
five: b,
ten: a


  }
  
}}

}
