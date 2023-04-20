import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  isLogin = false;
  constructor(private router: Router, private scroller: ViewportScroller) {}
  navegarA(anchor: string) {
    this.scroller.setOffset([0, 80]);
    this.scroller.scrollToAnchor(anchor);
  }

  ngOnInit(): void {}

  salir() {
    return alert('Sesión finalizada');
  }
}
