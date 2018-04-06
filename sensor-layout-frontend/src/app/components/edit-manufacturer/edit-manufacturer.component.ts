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
  selector: 'app-edit-manufacturer',
  templateUrl: './edit-manufacturer.component.html',
  styleUrls: ['./edit-manufacturer.component.css']
})
export class EditManufacturerComponent implements OnInit {

  selectedManufacturer;
  @ViewChild('manufacturer') manufacturerAC: AutoCompleteComponent;

  constructor(
    private router: Router,
    private validateService: ValidationService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('@@@ selectedManufacturer ',this.selectedManufacturer,'@@@');

    this.authService.post('manufacturers/edit',this.selectedManufacturer).subscribe((res) => {
      if(!res.success) {
        console.log(res.msg);
        return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
      console.log("Edit Manufacturer: ",res.data);
      this.flashMessage.show("Manufacturer Changed Successfully", {cssClass: 'alert-success', timeout: 5000});

      this.router.navigate(['/']);
    });
  }

  onDelete() {
    console.log('@@@ selectedManufacturer ',this.selectedManufacturer,'@@@');

    this.authService.post('manufacturers/delete',this.selectedManufacturer).subscribe((res) => {
      if(!res.success) {
        console.log(res.msg);
        return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
      console.log("Delete Manufacturer: ",res.data);
      this.flashMessage.show("Manufacturer Deleted Successfully", {cssClass: 'alert-success', timeout: 5000});

      this.router.navigate(['/']);
    });
  }

  onOptionSelected(selectedOption) {
    this.selectedManufacturer = selectedOption;
  }

}
