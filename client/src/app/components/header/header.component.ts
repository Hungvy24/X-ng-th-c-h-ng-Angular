import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, BannerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
