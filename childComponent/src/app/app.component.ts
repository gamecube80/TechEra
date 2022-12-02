import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Child Components';

  firstname: string = "";

  onChangeEventFirst(event: any) {

    this.firstname = (event.target.value);

  }
}
