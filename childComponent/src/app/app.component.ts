import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Child Components';

  // firstname: string = "";

  onSubmit(data: any) {
    console.log(data.value);
  }

  // onChangeEventFirst(event: any) {

  //   this.firstname = (event.target.value);

  // }
}
