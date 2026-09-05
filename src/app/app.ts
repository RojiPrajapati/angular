import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';

@Component({
  imports: [FormsModule, Home],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  @ViewChild('TestCheckboxTemp') tempCheckbox: ElementRef<HTMLInputElement> | undefined;
  protected readonly title = signal('HRM');

  header: string = "App Component";

  a: number = 5.1;
  b: number = 7;

  secondTitle: string = "The user is active";
  secondTitl2 = signal("The user is active");

  isChecked: boolean = true;
  isChecked2 = signal<boolean>(true);

  dothis: string = this.isChecked ? "True" : "false"; // ischecked
  changeCheckbox() {
    // Placeholder for checkbox handling logic
    console.log("Reached");
  }

  handleChildEvent(value: string) {
    // Update header from child component event
    this.header = value;
  }
}

// One way Binding

// Two way Binding

// Angular training project

