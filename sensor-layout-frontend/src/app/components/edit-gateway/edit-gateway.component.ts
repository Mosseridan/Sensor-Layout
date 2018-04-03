import { Component, OnInit,  ViewChild } from '@angular/core';
import { Gateway,  } from '../../types';
import { FormControl } from '@angular/forms';
import { AutoCompleteComponent } from '../auto-complete/auto-complete.component';
import { MultipleChoiceComponent } from '../multiple-choice/multiple-choice.component';
import { AuthService } from '../../services/auth/auth.service';
import { ValidationService } from '../../services/validation/validation.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-gateway',
  templateUrl: './edit-gateway.component.html',
  styleUrls: ['./edit-gateway.component.css']
})
export class EditGatewayComponent implements OnInit {

  selectedGateway;

  @ViewChild('gateway') gatewayAC: AutoCompleteComponent;
  @ViewChild('manufacturer') manufacturerAC: AutoCompleteComponent;
  @ViewChild('site') siteAC: AutoCompleteComponent;
  @ViewChild('protocols') protocolsMC: MultipleChoiceComponent;  
  @ViewChild('parentGateway') parentGatewayAC: AutoCompleteComponent;

  constructor(
    private router: Router,
    private validateService: ValidationService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit(){

    this.selectedGateway.manufacturer = this.manufacturerAC.getSelectedOption();
    this.selectedGateway.site = this.siteAC.getSelectedOption();    
    this.selectedGateway.protocols = this.protocolsMC.getSelectedOptions();
    this.selectedGateway.parentGateway = this.parentGatewayAC.getSelectedOption();


    console.log('@@@ selectedGateway ',this.selectedGateway,'@@@');
    

    this.authService.post('gateways/edit',this.selectedGateway).subscribe((res) => {
      if(!res.success) {
        console.log(res.msg);
        return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
      console.log("Edit Gateway: ",res.data);
      this.flashMessage.show("Gateway Changed Successfully", {cssClass: 'alert-success', timeout: 5000});

      this.router.navigate(['/']);
    });
  }

  onDelete(){
    console.log('@@@ selectedGateway ',this.selectedGateway,'@@@');

    this.authService.post('gateways/delete',this.selectedGateway).subscribe((res) => {
      if(!res.success) {
        console.log(res.msg);
        return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
      console.log("Delete Gateway: ",res.data);
      this.flashMessage.show("Gateway Deleted Successfully", {cssClass: 'alert-success', timeout: 5000});

      this.router.navigate(['/']);
    });
  }

  onOptionSelected(selectedOption){
    this.selectedGateway = selectedOption;
  }

}
