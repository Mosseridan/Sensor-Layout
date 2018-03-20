import { Component, OnInit,  ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Type, newType } from '../../types';
import { FormControl } from '@angular/forms';
import { AutoCompleteComponent } from '../auto-complete/auto-complete.component';
import { AuthService } from '../../services/auth/auth.service';
import { ValidationService } from '../../services/validation/validation.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {

  name: string;
  // @ViewChild('kind') kindAC: AutoCompleteComponent;
 
  constructor(
    private router: Router,
    private validateService: ValidationService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService
  ) {  }

  ngOnInit() {
    
  }

  onSubmit(){ 

    
    let type = new Type(
      this.name,
      // this.kindAC.selectedValue,
    );


    console.log('@@@',type,'@@@');
    this.authService.post('types/add',type).subscribe((res) => {
      if(!res.success) {
        console.log(res.msg);
        return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});        
      }
      console.log("Added Type: ",res.data);
      this.flashMessage.show("Type Added Successfully", {cssClass: 'alert-success', timeout: 5000}); 
      
      this.router.navigate(['/']);    
    });
  }

}
