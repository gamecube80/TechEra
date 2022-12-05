import { Component } from '@angular/core';
import { TimeService } from './time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servicedemo';
  currentDate = "";
  currentTime = "";
  emps: [] = [];
  employeeService: any;
  constructor(private ts: TimeService) {
    this.currentDate = this.ts.getTime().toLocaleDateString();
    this.currentTime = this.ts.getTime().toLocaleTimeString();

  }


}
