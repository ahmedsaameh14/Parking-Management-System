import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet , RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
constructor(private router:Router){}

  onLogout(){
    localStorage.removeItem('token')
    localStorage.removeItem('parkUser')

    this.router.navigate(['/login']);
  }
}
