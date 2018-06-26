import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector:'.app-servers',
  selector:'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 allowed=false;
 serverStaus='ServerNotCreated';
 servername='';
 serverdirective=false;
  constructor() {
    setTimeout(() => {
      this.allowed=true;
    },2000);
   }
  onCreateServer(){
    this.serverdirective=true;
    this.serverStaus='ServerIsCreated'+this.servername;
  }
  ngOnInit() {
  }
  onUpdateServerName(event:Event){
    this.servername=(<HTMLInputElement>event.target).value;

  }

}
