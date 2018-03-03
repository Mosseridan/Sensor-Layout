import { Component, OnInit } from '@angular/core';

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

  displayName = "";


  constructor() { }

  ngOnInit() {
  }

}
