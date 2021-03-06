import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { AuthService } from '../../services/auth/auth.service';
import { ValidationService } from '../../services/validation/validation.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AutoCompleteOption } from '../../types';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnInit {
  myControl: FormControl
  @Input() optionsSourceUrl;
  @Input() placeHolder;
  options: AutoCompleteOption[];
  selectedValues: AutoCompleteOption[];
  @Input() initialIds: string[];
  filteredOptions: Observable<AutoCompleteOption[]>;

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
      this.options = res.data.map(option => new AutoCompleteOption(option._id,option.name));
      if (this.initialIds) this.selectedValues = this.getValuesByIds(this.initialIds);
      else this.selectedValues = [];
      this.myControl = new FormControl(this.selectedValues);
    });
  }

  getValuesByIds(ids): any {
    return ids.map(id => this.getValueById(id));
  }

  getValueById(id): any {
      return this.options[this.options.map(option => option._id).indexOf(id)];
  }

  getSelectedOptions(): AutoCompleteOption[] {
    return this.selectedValues;
  }

  getSelectedOptionIds(): string[] {
    return this.selectedValues.map(val => val._id);
  }
}
