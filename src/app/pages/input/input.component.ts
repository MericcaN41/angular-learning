import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  name = signal("")
  
  inputChange = (e: Event) => {
    this.name.set((e.target as HTMLInputElement).value)
  }
}
