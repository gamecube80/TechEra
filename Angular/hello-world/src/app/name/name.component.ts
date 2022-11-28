import { Component } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent {
  fname = 'FirstName';
  lname = 'LastName';

  onChangeEventFirst(event: any) {

    this.fname = (event.target.value);

  }

  onChangeEventLast(event: any) {

    this.lname = (event.target.value);

  }
}
