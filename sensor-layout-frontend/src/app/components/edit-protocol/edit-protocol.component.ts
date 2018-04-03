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
  selector: 'app-edit-protocol',
  templateUrl: './edit-protocol.component.html',
  styleUrls: ['./edit-protocol.component.css']
})
export class EditProtocolComponent implements OnInit {


  selectedProtocol;
  @ViewChild('protocol') protocolAC: AutoCompleteComponent;

  constructor(
    private router: Router,
    private validateService: ValidationService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit() {

    console.log('@@@ selectedProtocol ',this.selectedProtocol,'@@@');

    this.authService.post('protocols/edit',this.selectedProtocol).subscribe((res) => {
      if(!res.success) {
        console.log(res.msg);
        return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
      console.log("Edit Protocol: ",res.data);
      this.flashMessage.show("Protocol Changed Successfully", {cssClass: 'alert-success', timeout: 5000});

      this.router.navigate(['/']);
    });
  }

  onDelete() {
    console.log('@@@ selectedProtocol ',this.selectedProtocol,'@@@');

    this.authService.post('protocols/delete',this.selectedProtocol).subscribe((res) => {
      if(!res.success) {
        console.log(res.msg);
        return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
      console.log("Delete Protocol: ",res.data);
      this.flashMessage.show("Protocol Deleted Successfully", {cssClass: 'alert-success', timeout: 5000});

      this.router.navigate(['/']);
    });
  }

  onOptionSelected(selectedOption) {
    this.selectedProtocol = selectedOption;
  }

}
