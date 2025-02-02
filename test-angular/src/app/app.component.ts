import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrgCardComponent } from './components/org-card-component/org-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OrgCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-angular';
}
