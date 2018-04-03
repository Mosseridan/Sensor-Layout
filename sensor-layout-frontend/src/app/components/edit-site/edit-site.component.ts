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
  selector: 'app-edit-site',
  templateUrl: './edit-site.component.html',
  styleUrls: ['./edit-site.component.css']
})
export class EditSiteComponent implements OnInit {

  selectedSite;
  @ViewChild('site') siteAC: AutoCompleteComponent;
  @ViewChild('parentSite') parentSiteAC: AutoCompleteComponent;

  constructor(
    private router: Router,
    private validateService: ValidationService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit(){

    this.selectedSite.parentSite = this.parentSiteAC.getSelectedOption();


    console.log('@@@ selectedSite ',this.selectedSite,'@@@');
    

    this.authService.post('sites/edit',this.selectedSite).subscribe((res) => {
      if(!res.success) {
        console.log(res.msg);
        return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
      console.log("Edit Site: ",res.data);
      this.flashMessage.show("Site Changed Successfully", {cssClass: 'alert-success', timeout: 5000});

      this.router.navigate(['/']);
    });
  }

  onDelete(){
    console.log('@@@ selectedSite ',this.selectedSite,'@@@');

    this.authService.post('sites/delete',this.selectedSite).subscribe((res) => {
      if(!res.success) {
        console.log(res.msg);
        return this.flashMessage.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
      console.log("Delete Site: ",res.data);
      this.flashMessage.show("Site Deleted Successfully", {cssClass: 'alert-success', timeout: 5000});

      this.router.navigate(['/']);
    });
  }

  onOptionSelected(selectedOption){
    this.selectedSite = selectedOption;
  }

}
