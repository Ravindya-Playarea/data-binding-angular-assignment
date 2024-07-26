import { Component } from '@angular/core';
import {Input} from "@angular/core";

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {
  @Input()
  value: number = 0;
}
