
import { Component, OnInit, ViewChild} from '@angular/core';
import { ModaltipComponent } from '../modaltip/modaltip.component';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  // @ViewChild('ModaltipComponent') child: ModaltipComponent;
  @ViewChild(ModaltipComponent)
  private modal: ModaltipComponent;
  constructor() { }

  ngOnInit() {
  }

  dele(){
    console.log('这是删除事件');
    this.modal.getType('delenotesTip','嘻嘻');
 
  }
  fuzi(){
    console.log('这是复制事件')
  }
  warn(){
    console.log('这是警告事件')
  }

 
}
