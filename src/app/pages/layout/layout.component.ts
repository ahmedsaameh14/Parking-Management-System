import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet , RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
constructor(private router:Router , public _userS:UserService){}

  onLogout(){
    localStorage.removeItem('token')
    localStorage.removeItem('parkUser')

    this.router.navigate(['/login']);
  }
}
