import { Component, OnInit,  ViewChild } from '@angular/core';
import { Sensor,  } from '../../types';
import { FormControl } from '@angular/forms';
import { AutoCompleteComponent } from '../auto-complete/auto-complete.component';
import { MultipleChoiceComponent } from '../multiple-choice/multiple-choice.component';
import { AuthService } from '../../services/auth/auth.service';
import { ValidationService } from '../../services/validation/validation.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-sensor',
  templateUrl: './edit-sensor.component.html',
  styleUrls: ['./edit-sensor.component.css']
})
export class EditSensorComponent implements OnInit {

  selectedSensor;
  @ViewChild('sensor') sensorAC: AutoCompleteComponent;  
  @ViewChild('type') typeAC: AutoCompleteComponent;
  @ViewChild('manufacturer') manufacturerAC: AutoCompleteComponent;
  @ViewChild('protocols') protocolsMC: MultipleChoiceComponent;
  @ViewChild('gateway') gatewayAC: AutoCompleteComponent;
  @ViewChild('site') siteAC: AutoCompleteComponent;

  constructor(
    private router: Router,
    private validateService: ValidationService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit(){

    this.selectedSensor.type = this.typeAC.getSelectedOption();
    this.selectedSensor.manufacturer = this.manufacturerAC.getSelectedOption();
    this.selectedSensor.protocols = this.protocolsMC.getSelectedOptions();
    this.selectedSensor.gateway = this.gatewayAC.getSelectedOption();
    this.selectedSensor.site = this.siteAC.getSelectedOption();


    console.log('@@@ selectedSensor ',this.selectedSensor,'@@@');
    

    this.authService.post('sensors/edit',this.selectedSensor).subscribe((res) => {
      if(!res.success) {
        console.log(res.msg);
        return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
      console.log("Edit Sensor: ",res.data);
      this.flashMessage.show("Sensor Changed Successfully", {cssClass: 'alert-success', timeout: 5000});

      this.router.navigate(['/']);
    });
  }

  onDelete(){
    console.log('@@@ selectedSensor ',this.selectedSensor,'@@@');

    this.authService.post('sensors/delete',this.selectedSensor).subscribe((res) => {
      if(!res.success) {
        console.log(res.msg);
        return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
      console.log("Delte Sensor: ",res.data);
      this.flashMessage.show("Sensor Deleted Successfully", {cssClass: 'alert-success', timeout: 5000});

      this.router.navigate(['/']);
    });
  }

  onOptionSelected(selectedOption){
    this.selectedSensor = selectedOption;
  }

}
