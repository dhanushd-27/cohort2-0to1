import { Component } from '@angular/core';
import { NameEditorComponent } from '../name-editor/name-editor.component';

@Component({
  selector: 'app-home',
  imports: [NameEditorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
