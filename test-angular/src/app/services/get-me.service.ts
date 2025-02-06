import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MeResponse } from '../model/me.type';

@Injectable({
  providedIn: 'root'
})
export class GetMeService {
  http = inject(HttpClient);

  getMe() {
    return this.http.get<MeResponse>('http://localhost:3003/api/v1/user/me', 
      { headers: { Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OWRiMzFjMWYxYTlkMmMwYjI4NGY0OSIsImVtYWlsIjoia29iZUBnbWFpbC5jb20iLCJpYXQiOjE3MzgzODgyNjJ9.KX4sfhIXmGvABGLZcVDcQBSaJAqY_SHfe-yornWgX28` } }
    );
  }

  // createUser() {
  //   return this.http.post('http://localhost:3003/api/v1/user', 
      
  // }
  constructor() { }
}
