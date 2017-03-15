import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Inline Component</h1>
            <fa-other></fa-other>
            <fa-another>
              <div>
                <h2>Hello World!</h2>
              </div>
            </fa-another>
            <fa-another></fa-another>
            `,
  styles: [`
    h1 {
      color:red;
    }
  `]
})
export class AppComponent {
  title = 'app works!';
}
