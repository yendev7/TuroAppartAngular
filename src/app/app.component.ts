import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `
      <main>
        <header>
          <img class="brand-name" src="/assets/logo.svg" alt="logo" aria-hidden="true">
        </header>
        <section class="content">
          <app-home></app-home>
        </section>
      </main>
      `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'homes';
}
