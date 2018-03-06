import { Component, OnInit } from '@angular/core';
import { Sensor, newSensor } from '../../types';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';


@Component({
  selector: 'app-add-sensor',
  templateUrl: './add-sensor.component.html',
  styleUrls: ['./add-sensor.component.css']
})

export class AddSensorComponent implements OnInit {
  myControl: FormControl = new FormControl();
  options = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
 
 
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

  protocols = [
    "MQTT",
    "HTTP",
    "HTTPS",
    "RAW",
  ];

  displayName;

  sensor :Sensor;
    

  constructor() { }

  ngOnInit() {
    this.sensor = newSensor();
    
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(val => this.filter(val))
    );
  }

  filter(val: string): string[] {
    return this.options.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }


  onSubmit(){
    
    console.log('Implement this!');
  }

}
