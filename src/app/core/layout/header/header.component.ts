import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { NgOptimizedImage } from '@angular/common';
import { MatCard, MatCardContent, MatCardImage, MatCardSubtitle, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    NgOptimizedImage,
    MatCard,
    MatCardContent,
    MatCardImage,
    MatCardTitle,
    MatCardSubtitle
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  imgSrc = 'assets/images/png/logo-jordan.png';
  bgImgSrc = 'assets/images/png/image-michael-jordan.png';
}
