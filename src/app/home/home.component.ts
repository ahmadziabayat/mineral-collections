import { Component, OnInit } from '@angular/core';
import { GetMineralService } from '../get-mineral.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mineralList;
  constructor(private mineralService: GetMineralService) { }

  ngOnInit() {
    this.mineralService.getData().subscribe(data => {
      this.mineralList = data;
    });
  }

}
