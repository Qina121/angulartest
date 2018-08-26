import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-modaltip',
  templateUrl: './modaltip.component.html',
  styleUrls: ['./modaltip.component.css']
})
export class ModaltipComponent implements OnInit {
 
  public  type:string = "";
  public  tip:any = '';

  constructor() { }

  ngOnInit() {
  }

  getType(content,tip){
    this.type = content;
    this.tip = tip;
  }

}
