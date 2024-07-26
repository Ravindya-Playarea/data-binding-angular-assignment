import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  value: number = 0;
  @Output()
  valueChange = new EventEmitter<number>();

  onInputChange() {
    this.valueChange.emit(this.value);
  }
}
