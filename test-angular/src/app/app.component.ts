import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingsComponent } from './greetings/greetings.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GreetingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-angular';
  greetings = signal('Hello Hello I am here');
  count = signal(0);

  increase(){
    this.count.update(val => val + 1); 
  }

  decrease(){
    this.count.update(val => val - 1);
  }
}
