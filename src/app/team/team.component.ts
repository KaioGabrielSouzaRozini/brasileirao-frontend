import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  teams: any;
  oneTeam: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    let response = this.http.get('http://localhost:8080/api/v1/teams');
    response.subscribe((data) => {
      this.teams = data;
    });
  }

  getTeam(posicao: any) {
    let response = this.http.get(
      `http://localhost:8080/api/v1/teams/${posicao}`
    );

    response.subscribe((data) => {
      this.oneTeam = data;
    });
  }
}
