import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  Validator,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { GetMineralService } from "../get-mineral.service";

@Component({
  selector: "app-mineral-collection-display",
  templateUrl: "./mineral-collection-display.component.html",
  styleUrls: ["./mineral-collection-display.component.scss"]
})
export class MineralCollectionDisplayComponent implements OnInit {
  mineralForm: FormGroup;

  submitted = false;
  success = false;

  constructor(
    private formbBuilder: FormBuilder,
    private mineralService: GetMineralService
  ) {
    this.mineralForm = this.formbBuilder.group({
      collected_in: ['', Validators.required],
      type: ['', Validators.required],
      weight_in_grams: ['', [Validators.required]]
    });
  }

  ngOnInit() {}

  // create onSubmit function
  OnSubmit(mineralData) {
    this.submitted = true;
    if (this.mineralForm.invalid) {
      return;
    }
    if (this.mineralForm.valid) {
      this.mineralService
        .addMineralItem(this.mineralForm.value)
        .subscribe(data => console.log(data), err => console.log(err));
    }
    this.success = true;
  }
}
