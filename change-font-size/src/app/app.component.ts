import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'change-font-size';
  fontSize = 14;

  changeFontSize(element:HTMLInputElement) {
    return this.fontSize=Number(element.value);
  }
  
}
