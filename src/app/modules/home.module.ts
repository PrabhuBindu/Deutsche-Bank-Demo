import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeService } from './home.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [HomeService]
})
export class HomeModule { }
