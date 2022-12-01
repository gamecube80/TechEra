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
  a = 2;
  b = 3;
  fname1 = 'name';

  pageTitle: string = "Hello Tech Era";
  value: number = 0;
  bool: boolean = true;
  country: string = "Bolivia";
  object: string = "screw-driver";
  object2: string = "belt";

  weekdays: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  title1 = "Binding data";
  classtype = "text-danger";
  TechEra = "Angular";

  //binding examples
  text1 = "The <b>Angular</b> is printed in bold";
  text2 = "<p>This is first paragraph</p><p>This is second paragraph</p> ";

  itemImageUrl = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";

  color = 'red';

  //months start with jan at 0
  ourDateDay = new Date(2022,11,9);


  //objuser: usermodel = new usermodel();
  oneway: string = "one way databinding";
  application: String = "property binding"
  event: string = "chaman gautam";
  three = "Event binding";

  savedata() {
    alert();
    console.log("application")
  }

  Clickme(event: any) {
    alert("Welcome TechEra" + event);
  }

  onChangeEventFirst(event: any) {

    this.fname = (event.target.value);

  }

  onChangeEventLast(event: any) {

    this.lname = (event.target.value);

  }

  onChangeEventFirst1(event: any) {

    this.fname1 = (event.target.value);

  }

}
