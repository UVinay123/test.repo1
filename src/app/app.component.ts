import { compileDeclareClassMetadata } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angproj';

  constructor(){

  console.log(this.arthmatic(15,25,30,"add"));
  console.log(this.comparison(287,290,"greater"));
  }
  arthmatic(a:any,b:any,c:any,type:any){
    if(type=="add"){
      return a+b+c;
    }else if(type=="sub"){
      return a-b-c;
    }else if(type=="mul"){
      return a*b*c;
    }
  }
  comparison(p:any,q:any,type:any){
    if(type=="greater"){
      return (p<=q);
    }else if(type=="less"){
      return(p);
    }
  }
}
let a=20;
let b=30;
let temp=0;

temp=a;
a=b;
b=temp;
console.log(a,b);

let i=10;
let multi=1;
for (i=10;i>=1;i--){
multi=multi*i;
} 
console.log(multi);

let q=10;
let add=0;
for (i=10;i>=1;i++){
add=add+i;
} 
console.log(add);

