import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  statsData: any = {
    cases: '',
    recovered: '',
    active: '',
    deaths: ''
  };
  isLoader = false;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.isLoader = true;
    this.homeService.getData().subscribe(resp => {
      this.isLoader = false;
      this.statsData = resp;
    }, err => {
      this.isLoader = false;
      // logging error here
    });
  }

}
