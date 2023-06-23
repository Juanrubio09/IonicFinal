import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.page.html',
  styleUrls: ['./multimedia.page.scss'],
})
export class MultimediaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  navigateToMultimedia() {
    this.router.navigate(['/home']);
  }
  navigateToProyectos() {
    this.router.navigate(['/proyectos']);
  }

}

  