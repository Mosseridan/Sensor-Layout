import { Component, OnInit,  ViewChild } from '@angular/core';
import { Sensor, newSensor } from '../../types';
import { FormControl } from '@angular/forms';
import { AutoCompleteComponent } from '../auto-complete/auto-complete.component';
import { AuthService } from '../../services/auth/auth.service';
import { ValidationService } from '../../services/validation/validation.service';

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

  manufacturers = [
    "TE Connectivity",
    "Sonnoff",
    "Other"
  ];

  protocols = [
    "MQTT",
    "HTTP",
    "HTTPS",
    "RAW",
  ];

  gateways = [
    "gateway1",
    "gateway2",
    "gateway3",
    "gateway4",
    "gateway5",
    "gateway6",
    "gateway7",
    "gateway8",
    "gateway9",
    "gateway10",
    "gateway11",
    "gateway12",
    "gateway13",
    "gateway14",
    "gateway15"
  ];

  sites = [
    "gateway11",
    "gateway12",
    "gateway13",
    "gateway14",
    "gateway15"
  ];


  displayName: string;
  @ViewChild('type') typeAC: AutoCompleteComponent;
  @ViewChild('manufacturer') manufacturerAC: AutoCompleteComponent;
  @ViewChild('protocol') protocolAC: AutoCompleteComponent;  
  @ViewChild('gateway') gatewayAC: AutoCompleteComponent;
  @ViewChild('site') siteAC: AutoCompleteComponent;
  
  constructor(
    private validateService: ValidationService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    
    let sensor = new Sensor(
      this.displayName,
      this.typeAC.selectedValue,
      this.manufacturerAC.selectedValue,
      this.protocolAC.selectedValue,   
      this.gatewayAC.selectedValue,
      this.siteAC.selectedValue
    );
    console.log('@@@',sensor,'@@@');
   
  }

}
