import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  fname = 'FirstName';
  lname = 'LastName';
  a=2;
  b=3;

  onChangeEventFirst(event: any) {

    this.fname = (event.target.value);

  }

  onChangeEventLast(event: any) {

    this.lname = (event.target.value);

  }

}
