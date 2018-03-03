import { Component, OnInit } from '@angular/core';
import { Sensor, newSensor } from '../../types';

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

  gateways = [
    "gateway1",
    "gateway2",
    "gateway3",
    "gateway4",
    "gateway5"
  ];

  protocols = [
    "MQTT",
    "HTTP",
    "HTTPS",
    "RAW",
  ];

  sensor :Sensor;
    

  constructor() { }

  ngOnInit() {
    this.sensor = newSensor();
  }


  onSubmit(){
    console.log('Implement this!');
  }

}
