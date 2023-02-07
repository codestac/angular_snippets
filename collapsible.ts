import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    { title: 'Section 1', content: 'Content for section 1', isOpen: true },
    { title: 'Section 2', content: 'Content for section 2', isOpen: false },
    { title: 'Section 3', content: 'Content for section 3', isOpen: false },
  ];
  contentHeight = 100;
}
