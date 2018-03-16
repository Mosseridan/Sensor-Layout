import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { AuthService } from '../../services/auth/auth.service';
import { ValidationService } from '../../services/validation/validation.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  myControl: FormControl = new FormControl();
  @Input() optionsSourceUrl;
  @Input() placeHolder;
  options: string[];
  selectedValue: string;
  filteredOptions: Observable<string[]>;
 
  constructor(
    private validateService: ValidationService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService
  ) { 
    this.options = [];
  }

  ngOnInit() {
    this.authService.get(this.optionsSourceUrl).subscribe((res) => {
      if(!res.success) {
        console.log(res.msg);
        return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});        
      }
      console.log(res.data);
      console.log(res.data.map(option => option.name));
      this.options = res.data.map(option => option.name);
      
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(val => this.filter(val))
      );
    });
  }

  filter(val: string): string[] {
    return this.options.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0).sort();
  }
  
}
