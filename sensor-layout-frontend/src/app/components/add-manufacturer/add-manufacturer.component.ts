import { Component, OnInit,  ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Manufacturer, newManufacturer } from '../../types';
import { FormControl } from '@angular/forms';
import { AutoCompleteComponent } from '../auto-complete/auto-complete.component';
import { AuthService } from '../../services/auth/auth.service';
import { ValidationService } from '../../services/validation/validation.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-add-manufacturer',
  templateUrl: './add-manufacturer.component.html',
  styleUrls: ['./add-manufacturer.component.css']
})
export class AddManufacturerComponent implements OnInit {

  name: string;
 
  constructor(
    private router: Router,
    private validateService: ValidationService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService
  ) {  }

  ngOnInit() {
    
  }

  onSubmit() { 

    let manufacturer = new Manufacturer(
      this.name,
    );


    console.log('@@@',manufacturer,'@@@');
    this.authService.post('manufacturers/add',manufacturer).subscribe((res) => {
      if(!res.success) {
        console.log(res.msg);
        return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});        
      }
      console.log("Added Manufacturer: ",res.data);
      this.flashMessage.show("Manufacturer Added Successfully", {cssClass: 'alert-success', timeout: 5000}); 
      
      this.router.navigate(['/']);    
    });
  }

}
