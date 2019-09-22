import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-mineral-collection-display',
  templateUrl: './mineral-collection-display.component.html',
  styleUrls: ['./mineral-collection-display.component.scss']
})
export class MineralCollectionDisplayComponent implements OnInit {
  mineralForm: FormGroup;

  submitted = false;
  success = false;

  constructor(private formbBuilder: FormBuilder) {
    this.mineralForm = this.formbBuilder.group({
      firstname:  ['', Validators.required],
      lastname:  ['' , Validators.required],
      email_address: ['', [Validators.required, Validators.email]],
      });
   }

  ngOnInit() {
  }


       // create onSubmit function
    OnSubmit(mineralData) {
      console.log(this.mineralForm);
        if (mineralData) {
          console.log(mineralData);
        }
        this.submitted = true;
        if (this.mineralForm.invalid) {
          return;
        }
        this.success = true;
    }

}
