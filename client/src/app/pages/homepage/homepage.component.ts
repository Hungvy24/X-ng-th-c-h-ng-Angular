import { Component, inject } from '@angular/core';
import { Product } from '../../../types/Product';
import { ProductService } from '../../services/product.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgFor,RouterLink, BannerComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  product: Product[]=[];
  productList = inject(ProductService);

  ngOnInit(){
    this.productList.getAllProducts().subscribe((data)=>{
      this.product = data;
    })
  }

}
