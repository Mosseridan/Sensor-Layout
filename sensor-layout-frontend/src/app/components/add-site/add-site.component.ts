import { Component, OnInit,  ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Site, newSite } from '../../types';
import { FormControl } from '@angular/forms';
import { AutoCompleteComponent } from '../auto-complete/auto-complete.component';
import { AuthService } from '../../services/auth/auth.service';
import { ValidationService } from '../../services/validation/validation.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})

export class AddSiteComponent implements OnInit { 
  name: string;
  @ViewChild('parentSite') parentSiteAC: AutoCompleteComponent;
 
  constructor(
    private router: Router,
    private validateService: ValidationService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService
  ) {  }

  ngOnInit() {
    
  }

  onSubmit(){ 

    
    let site = new Site(
      this.name,
      [],
      this.parentSiteAC.selectedValue,
      []
    );


    console.log('@@@',site,'@@@');
    this.authService.post('sites/add',site).subscribe((res) => {
      if(!res.success) {
        console.log(res.msg);
        return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});        
      }
      console.log("Added Site: ",res.data);
      this.flashMessage.show("Site Added Successfully", {cssClass: 'alert-success', timeout: 5000}); 
      
      this.router.navigate(['/']);    
    });
  }

}
