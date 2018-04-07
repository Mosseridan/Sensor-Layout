import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  jsonLayout 

  constructor(private authService: AuthService, 
    private flashMessage: FlashMessagesService) { 
  }

  ngOnInit() {
  }

  getSiteJson(){
    this.authService.get('jsons/by-site').subscribe((res) => {
      if(!res.success) {
        console.log(res.msg);
        return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
      console.log("Sensors Layout By Site: ",res.data);
      this.flashMessage.show("Sensors Layout By Site Retreived Successfully", {cssClass: 'alert-success', timeout: 5000});
      this.jsonLayout = res.data;
    });
  }

  getGatewayJson(){
    this.authService.get('jsons/by-gateway').subscribe((res) => {
      if(!res.success) {
        console.log(res.msg);
        return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
      console.log("Sensors Layout By Gateway: ",res.data);
      this.flashMessage.show("Sensors Layout By Gateway Retreived Successfully", {cssClass: 'alert-success', timeout: 5000});
    });

  }

}
