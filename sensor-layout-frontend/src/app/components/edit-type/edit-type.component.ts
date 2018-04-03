import { Component, OnInit,  ViewChild } from '@angular/core';
import { Gateway,  } from '../../types';
import { FormControl } from '@angular/forms';
import { AutoCompleteComponent } from '../auto-complete/auto-complete.component';
import { MultipleChoiceComponent } from '../multiple-choice/multiple-choice.component';
import { AuthService } from '../../services/auth/auth.service';
import { ValidationService } from '../../services/validation/validation.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-type',
  templateUrl: './edit-type.component.html',
  styleUrls: ['./edit-type.component.css']
})
export class EditTypeComponent implements OnInit {


  selectedType;
  @ViewChild('type') typeAC: AutoCompleteComponent;

  constructor(
    private router: Router,
    private validateService: ValidationService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit() {

    console.log('@@@ selectedType ',this.selectedType,'@@@');

    this.authService.post('types/edit',this.selectedType).subscribe((res) => {
      if(!res.success) {
        console.log(res.msg);
        return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
      console.log("Edit Type: ",res.data);
      this.flashMessage.show("Type Changed Successfully", {cssClass: 'alert-success', timeout: 5000});

      this.router.navigate(['/']);
    });
  }

  onDelete() {
    console.log('@@@ selectedType ',this.selectedType,'@@@');

    this.authService.post('types/delete',this.selectedType).subscribe((res) => {
      if(!res.success) {
        console.log(res.msg);
        return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
      console.log("Delete Type: ",res.data);
      this.flashMessage.show("Type Deleted Successfully", {cssClass: 'alert-success', timeout: 5000});

      this.router.navigate(['/']);
    });
  }

  onOptionSelected(selectedOption) {
    this.selectedType = selectedOption;
  }

}
