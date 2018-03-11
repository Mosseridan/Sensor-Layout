import { Component, OnInit } from '@angular/core';
import { Gateway, newGateway } from '../../types';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-add-gateway',
  templateUrl: './add-gateway.component.html',
  styleUrls: ['./add-gateway.component.css']
})
export class AddGatewayComponent implements OnInit {
  myControl: FormControl = new FormControl();
  options = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  types = [
    "Exclusive Gateway",
    "Event-based Gateway",
    "Parallel Gateway",
    "Parallel event-based Gateway",
    "Inclusive Gateway",
    "Complex Gateway",
  ];

  manufacturers = [
    "Adlink",
    "DELL",
    "ADVANTEC"
  ];

  gateways = [
    "Parent1",
    "Parent2",
    "Parent3"
  ];

  sites = [
    "Site1",
    "Site2",
    "Site3"
  ];



  displayName;

  gateway :Gateway;

  constructor() { }

  ngOnInit() {
    this.gateway = newGateway();

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
    let gateway = {

    }

  }

}
