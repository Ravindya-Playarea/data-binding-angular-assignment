import { Component } from '@angular/core';
import {Input} from "@angular/core";

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  @Input()
  value: number = 0;
}
