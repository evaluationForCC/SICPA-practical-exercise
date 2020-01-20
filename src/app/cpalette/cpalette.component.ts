import { Component, OnInit } from '@angular/core';

import { AnonymousSubject } from 'rxjs/internal/Subject';

import { Color } from '../color';

declare function generateColor(colorStart,colorEnd,colorCount): any;

@Component({
  selector: 'app-cpalette',
  templateUrl: './cpalette.component.html',
  styleUrls: ['./cpalette.component.scss']
})
export class CpaletteComponent implements OnInit {
  topLeftColor : String = "";
  bottomRightColor : String = "";
  gridColor: String[][];
  //color : Color ;
  constructor() { 
    this.gridColor = [];
  }

  ngOnInit() {
   //this.color.topLeftColor = "#1f0ff0" ;
   //this.color.bottomRightColor = "#04000" ;
   //var tmp = generateColor('#000000','#ff0ff0',10);
   //console.log(tmp);
  }

  draw () {
    
    var h0 = generateColor("#000000",this.topLeftColor,10);
    var h9 = generateColor(this.bottomRightColor,"#ffffff",10);

    console.log(h0[0]);
    console.log(h9[0]);
    let y = 10 ;
    
    for (let x = 0; x < 8; x++) {
     
      this.gridColor[x]=generateColor(h9[x] ,h0[x],10);
        
       
        console.log(h0[x],h9[x]);
  

    }
    this.gridColor[0] = h0 ;
    this.gridColor[9] = h9 ;
    console.log(this.gridColor);


  }

  
}
