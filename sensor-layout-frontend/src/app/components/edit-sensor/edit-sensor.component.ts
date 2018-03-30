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

  @ViewChild('sensor') sensorAC: AutoCompleteComponent;
  
  name: string;
  @ViewChild('type') typeAC: AutoCompleteComponent;
  @ViewChild('manufacturer') manufacturerAC: AutoCompleteComponent;
  @ViewChild('protocols') protocolsAC: MultipleChoiceComponent;
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

    let sensor = new Sensor(
      this.name,
      this.typeAC.getSelectedOption(),
      this.manufacturerAC.getSelectedOption(),
      this.protocolsAC.getSelectedOptions(),
      this.gatewayAC.getSelectedOption(),
      this.siteAC.getSelectedOption()
    );

    console.log('@@@',sensor,'@@@');
    this.authService.post('sensors/edit',sensor).subscribe((res) => {
      if(!res.success) {
        console.log(res.msg);
        return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
      console.log("Edit Sensor: ",res.data);
      this.flashMessage.show("Sensor Changed Successfully", {cssClass: 'alert-success', timeout: 5000});

      this.router.navigate(['/']);
    });

  }

}

