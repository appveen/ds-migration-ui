import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-env',
  templateUrl: './config-env.component.html',
  styleUrls: ['./config-env.component.scss']
})
export class ConfigEnvComponent implements OnInit {

  envList: Array<any>;
  searchTerm!: string;

  constructor(private http: HttpClient) {
    this.envList = [];
  }

  ngOnInit(): void {
    this.http.get('/assets/data/env-data.json').subscribe({
      next: (value: any) => {
        this.envList = value;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
