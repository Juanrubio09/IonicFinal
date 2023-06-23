import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.page.html',
  styleUrls: ['./proyectos.page.scss'],
})
export class ProyectosPage implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  navigateToMultimedia() {
    this.router.navigate(['/multimedia']);
  }
  navigateToProyectos() {
    this.router.navigate(['/home']);
  }
}