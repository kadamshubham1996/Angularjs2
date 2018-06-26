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
 servers=['test1','test2'];
  constructor() {
    setTimeout(() => {
      this.allowed=true;
    },2000);
   }
  onCreateServer(){
    this.serverdirective=true;
    this.servers.push(this.servername)
    this.serverStaus='ServerIsCreated'+this.servername;
  }
  ngOnInit() {
  }
  onUpdateServerName(event:Event){
    this.servername=(<HTMLInputElement>event.target).value;

  }

}
