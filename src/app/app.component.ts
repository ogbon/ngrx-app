import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-app';
  name: string = 'Seg'; // property
}


//ng generate effect User --root -m app.module.ts