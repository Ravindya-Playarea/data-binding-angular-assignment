import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgStyle, PercentPipe} from "@angular/common";
import {SecondComponent} from "./second/second.component";
import {FirstComponent} from "./first/first.component";
import {ThirdComponent} from "./third/third.component";
import {FourthComponent} from "./fourth/fourth.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgStyle, PercentPipe, SecondComponent, FirstComponent, ThirdComponent, FourthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sharedValue: number = 0;
  sharedRadius: number = 0;

  onValueChange(newValue: number) {
    this.sharedValue = newValue;
    this.sharedRadius = newValue; // Update border radius
  }
}
