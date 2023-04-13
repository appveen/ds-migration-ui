import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss']
})
export class ApisComponent implements OnInit {

  apiList: Array<any>;
  searchTerm!: string;
  constructor(private http: HttpClient) {
    this.apiList = [];
  }

  ngOnInit(): void {
    this.http.get('/assets/data/api-data.json').subscribe({
      next: (value: any) => {
        this.apiList = value;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

}
