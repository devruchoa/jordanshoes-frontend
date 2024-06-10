import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private metaService: Meta) { }

  ngOnInit() {
    this.metaService.addTag({ name: 'description', content: 'A Jordan Shoes é a melhor loja de Jordan. O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.' });
  }
}
