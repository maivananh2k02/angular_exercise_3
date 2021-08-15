import {Component} from '@angular/core';
import {Pet} from "./pet";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'show-pet-info';
  pet: Pet[] = [{
    id: 1,
    name: 'pug',
    image: 'https://petacy.com/wp-content/uploads/2020/10/cho-pug-mat-xe.jpg'
  }];

  updateName(elementName:HTMLInputElement) {
    if (String(elementName.value)==''){
      return this.pet[0].name='pug';
    }else {
      return this.pet[0].name=String(elementName.value);
    }

  }
  updateImage(elementImage:HTMLInputElement){
    if (String(elementImage.value)==''){
      return this.pet[0].image='https://petacy.com/wp-content/uploads/2020/10/cho-pug-mat-xe.jpg';
    }else {
      return this.pet[0].image=String(elementImage.value);
    }
  }
}
