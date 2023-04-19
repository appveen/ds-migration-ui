import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-service',
  templateUrl: './data-service.component.html',
  styleUrls: ['./data-service.component.scss']
})
export class DataServiceComponent implements OnInit {

  code: { [ket: string]: string };
  constructor(private http: HttpClient) {
    this.code = {};
  }

  ngOnInit(): void {
    this.http.get('assets/data/old-definition.json').subscribe({
      next: (value: any) => {
        this.code['old-definition'] = value;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
    this.http.get('assets/data/new-definition.json').subscribe({
      next: (value: any) => {
        this.code['new-definition'] = value;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
    this.http.get('assets/data/definition-converter.json').subscribe({
      next: (value: any) => {
        this.code['definition-converter'] = value.join('\n');
      },
      error: (error: any) => {
        console.log(error);
      },
    });
    this.http.get('assets/data/date-data.json').subscribe({
      next: (value: any) => {
        this.code['date-data'] = value;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
