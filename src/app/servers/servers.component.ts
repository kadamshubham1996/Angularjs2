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
  constructor() {
    setTimeout(() => {
      this.allowed=true;
    },2000);
   }
  onCreateServer(){
    this.serverStaus='ServerIsCreated';
  }
  ngOnInit() {
  }

}
