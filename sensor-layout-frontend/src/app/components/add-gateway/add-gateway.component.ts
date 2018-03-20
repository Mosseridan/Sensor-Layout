import { Component, OnInit,  ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Gateway, newGateway } from '../../types';
import { FormControl } from '@angular/forms';
import { AutoCompleteComponent } from '../auto-complete/auto-complete.component';
import { AuthService } from '../../services/auth/auth.service';
import { ValidationService } from '../../services/validation/validation.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-gateway',
  templateUrl: './add-gateway.component.html',
  styleUrls: ['./add-gateway.component.css']
})
export class AddGatewayComponent implements OnInit {
    name: string;
    // @ViewChild('type') typeAC: AutoCompleteComponent;
    @ViewChild('manufacturer') manufacturerAC: AutoCompleteComponent;
    @ViewChild('site') siteAC: AutoCompleteComponent;
    @ViewChild('parentGateway') parentGatewayAC: AutoCompleteComponent;

    constructor(
      private router: Router,
      private validateService: ValidationService,
      private authService: AuthService,
      private flashMessage: FlashMessagesService
    ) {  }
  
    ngOnInit() {
      
    }
  
    onSubmit(){ 
  
      
      let gateway = new Gateway(
        this.name,
        // this.typeAC.selectedValue,
        this.manufacturerAC.selectedValue,
        this.siteAC.selectedValue,
        this.parentGatewayAC.selectedValue,
        [],
        []
      );
  
  
      console.log('@@@',gateway,'@@@');
      this.authService.post('gateways/add',gateway).subscribe((res) => {
        if(!res.success) {
          console.log(res.msg);
          return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});        
        }
        console.log("Added Gateway: ",res.data);
        this.flashMessage.show("Gateway Added Successfully", {cssClass: 'alert-success', timeout: 5000}); 
        
        this.router.navigate(['/']);    
      });
    }
  
  }
  