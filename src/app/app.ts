import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OverHeaderComponent } from './components/over-header/over-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OverHeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.less',
})
export class App {}
