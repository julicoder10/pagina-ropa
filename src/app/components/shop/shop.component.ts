import { Component, OnInit } from '@angular/core';

// FONT AWESOME ICONS

import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  faStar = faStar;

  constructor() { }

  ngOnInit(): void {
  }

}
