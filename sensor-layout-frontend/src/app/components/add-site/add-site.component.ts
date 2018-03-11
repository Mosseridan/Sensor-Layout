import { Component, OnInit } from '@angular/core';
import { Site, newSite } from '../../types';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';


@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})

export class AddSiteComponent implements OnInit {
  myControl: FormControl = new FormControl();
  options = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;


  types = [
    "Room",
    "Floor",
    "Building",
    "Campus"
  ];

  sites = [
    "site1",
    "site2"
  ];

  displayName;

  site :Site;

  constructor() { }

  ngOnInit() {
    this.site = newSite();

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
    let site = {

    }

  }

}
