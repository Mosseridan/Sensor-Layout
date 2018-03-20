import { Component, OnInit,  ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Protocol, newProtocol } from '../../types';
import { FormControl } from '@angular/forms';
import { AutoCompleteComponent } from '../auto-complete/auto-complete.component';
import { AuthService } from '../../services/auth/auth.service';
import { ValidationService } from '../../services/validation/validation.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-protocol',
  templateUrl: './add-protocol.component.html',
  styleUrls: ['./add-protocol.component.css']
})
export class AddProtocolComponent implements OnInit {

  name: string;
 
  constructor(
    private router: Router,
    private validateService: ValidationService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService
  ) {  }

  ngOnInit() {
    
  }

  onSubmit(){     
    let protocol = new Protocol(this.name);

    console.log('@@@',protocol,'@@@');
    this.authService.post('protocols/add',protocol).subscribe((res) => {
      if(!res.success) {
        console.log(res.msg);
        return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});        
      }
      console.log("Added Protocol: ",res.data);
      this.flashMessage.show("Protocol Added Successfully", {cssClass: 'alert-success', timeout: 5000}); 
      
      this.router.navigate(['/']);    
    });
  }

}
