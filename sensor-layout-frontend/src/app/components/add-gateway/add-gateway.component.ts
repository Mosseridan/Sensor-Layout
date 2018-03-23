import { Component, OnInit,  ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Gateway, AutoCompleteOption } from '../../types';
import { FormControl } from '@angular/forms';
import { AutoCompleteComponent } from '../auto-complete/auto-complete.component';
import { MultipleChoiceComponent } from '../multiple-choice/multiple-choice.component';
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
    protocols: AutoCompleteOption[];
    @ViewChild('manufacturer') manufacturerAC: AutoCompleteComponent;
    @ViewChild('site') siteAC: AutoCompleteComponent;
    @ViewChild('protocols') protocolsAC: MultipleChoiceComponent;    
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
        this.manufacturerAC.getSelectedOption(),
        this.siteAC.getSelectedOption(),
        this.protocolsAC.getSelectedOptions(),
        this.parentGatewayAC.getSelectedOption(),
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
  