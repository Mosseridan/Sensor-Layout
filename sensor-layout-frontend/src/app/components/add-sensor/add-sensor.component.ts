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
  selector: 'app-add-sensor',
  templateUrl: './add-sensor.component.html',
  styleUrls: ['./add-sensor.component.css']
})

export class AddSensorComponent implements OnInit {


  types = [
    "Automotive",
    "Digital Component",
    "Flow",
    "Fluid Property",
    "Force",
    "Humidity",
    "Mass Air Flow",
    "Multi-Sensor Module",
    "Photo Optic",
    "Piezo Film",
    "Position",
    "Pressure",
    "Rate & Inertial",
    "Scanner & System",
    "Speed",
    "Temperature",
    "Torque",
    "Traffic",
    "Ultrasonic",
    "Vibration",
    "Water-Level",
    "Other"
  ];

  name: string;
  @ViewChild('type') typeAC: AutoCompleteComponent;
  @ViewChild('manufacturer') manufacturerAC: AutoCompleteComponent;
  @ViewChild('protocols') protocolsAC: MultipleChoiceComponent;
  @ViewChild('gateway') gatewayAC: AutoCompleteComponent;
  @ViewChild('site') siteAC: AutoCompleteComponent;
  longitude: number;
  latitude: number;

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
      this.typeAC.getSelectedOptionId(),
      this.manufacturerAC.getSelectedOptionId(),
      this.protocolsAC.getSelectedOptionIds(),
      this.gatewayAC.getSelectedOptionId(),
      this.siteAC.getSelectedOptionId(),
      this.longitude,
      this.latitude
    );

    console.log('@@@',sensor,'@@@');
    this.authService.post('sensors/add',sensor).subscribe((res) => {
      if(!res.success) {
        console.log(res.msg);
        return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
      console.log("Added Sensor: ",res.data);
      this.flashMessage.show("Sensor Added Successfully", {cssClass: 'alert-success', timeout: 5000});

      this.router.navigate(['/']);
    });

  }

}
