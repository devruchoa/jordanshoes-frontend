import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';
import { ProductModel } from '../../product.model';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    MatCard,
    NgOptimizedImage,
    MatCardImage,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent
  ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  products: ProductModel[] = [
    {
      imageUrl: 'assets/images/png/jordan-1.png',
      title: 'Air Jordan 1 Mid Dutch Green',
      category: 'Tênis Air Jordan',
      price: 'R$ 1.199,99'
    },
    {
      imageUrl: 'assets/images/png/jordan-2.png',
      title: 'Air Jordan 1 High Zoom CMFT Tropical Twist',
      category: 'Tênis Air Jordan',
      price: 'R$ 1.049,00'
    },
    {
      imageUrl: 'assets/images/png/jordan-3.png',
      title: 'Air Jordan 1 Mid Dutch Green',
      category: 'Tênis Air Jordan',
      price: 'R$ 1.350,00'
    },
    {
      imageUrl: 'assets/images/png/jordan-4.png',
      title: 'Air Jordan 1 Mid GS "Light Smoke Grey"',
      category: 'Tênis Air Jordan',
      price: 'R$ 1.585,00'
    },
    {
      imageUrl: 'assets/images/png/jordan-5.png',
      title: 'Air Jordan 1 Mid SE Bright Citrus',
      category: 'Tênis Air Jordan',
      price: 'R$ 949,99'
    },
    {
      imageUrl: 'assets/images/png/jordan-6.png',
      title: 'Air Jordan 1 Mid Grey Camo',
      category: 'Tênis Air Jordan',
      price: 'R$ 999,99'
    }
  ];
}
