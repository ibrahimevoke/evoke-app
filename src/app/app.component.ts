import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evoke-app';
  ibrahim="IBrahim is working on this project";
}

@Component({
  selector: 'app-my-app',
  template: `<h2>{{ title }}</h2><p>{{ description }}</p>`,
  styles: [`
    h2 { color: darkgreen; }
    p { font-style: italic; }
  `]
})
export class MyAappComponentt {
  title = 'MyApp';
  description = 'This is a sample Angular application.';
}

// HTML +CSS+ TS