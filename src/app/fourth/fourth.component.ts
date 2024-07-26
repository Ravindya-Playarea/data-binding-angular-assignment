import { Component } from '@angular/core';
import {NgStyle} from "@angular/common";
import {Input} from "@angular/core";

@Component({
  selector: 'app-fourth',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './fourth.component.html',
  styleUrl: './fourth.component.css'
})
export class FourthComponent {
  @Input()
  radius: number = 0;
}
