import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private http: HttpClient) {}

  getTeam(posicao: any) {
    return this.http.get(`http://localhost:8080/api/v1/teams/${posicao}`);
  }
}
