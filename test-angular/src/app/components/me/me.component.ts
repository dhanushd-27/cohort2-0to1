import { Component, inject, signal } from '@angular/core';
import { GetMeService } from '../../services/get-me.service';
import { MeResponse } from '../../model/me.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-me',
  imports: [],
templateUrl: './me.component.html',
  styleUrl: './me.component.css'
})
export class MeComponent {
  meService = inject(GetMeService);
  meData = signal<MeResponse>({ message: '', user: { _id: '', name: '', email: '', organizations: [] } });

  ngOnInit(): void {
    this.meService.getMe()
      .subscribe((data: MeResponse) => {
        this.meData.set(data);
      });
  }
}
