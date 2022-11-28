import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  username = 'Username';
  password = 'Password';

  onChangeEventUsername(event: any) {

    this.username = (event.target.value);

  }

  onChangeEventPassword(event: any) {

    this.password = (event.target.value);

  }
}
