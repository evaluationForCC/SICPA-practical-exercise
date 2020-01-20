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
    
  }

  ngOnInit() {
    
  }

  draw () {
    this.gridColor = [];
    var h0 = generateColor("#ffffff",this.topLeftColor,8);
    var h9 = generateColor(this.bottomRightColor,"#000000",8);

    console.log(h0[0]);
    console.log(h9[0]);
    let y = 10 ;
    
    for (let x = 0; x < 8; x++) {
     
      this.gridColor.push ( generateColor(h9[x],h0[x],8) );
      
       
        console.log(h0[x],h9[x]);
  

    }
    
    
   
    
    
    
    console.log(this.gridColor);


  }

  
}
