import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private title: Title,
    private tooltipConfig: NgbTooltipConfig) {
    this.title.setTitle('Migration Docs');
    this.tooltipConfig.container = 'body';
  }
}
