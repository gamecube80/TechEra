import { Component, ViewChild } from '@angular/core';
import { FirstComponent } from './first/first.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('firstComponent')
  public first!: FirstComponent;
  public title: string | undefined;

  constructor() {}

  ngOnInit(): void {
    alert(this.first.name);
  }
}
