import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { IUserModel, User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _userS: UserService , private router: Router) {}

  loginObj: User = {
    emailId: '',
    password: ''
  };

  onLogin() {
    // 1️⃣ Check empty inputs
    if (!this.loginObj.emailId || !this.loginObj.password) {
      alert('⚠️ Please fill in all fields');
      return;
    }

    // 2️⃣ Call API
    this._userS.loginUser(this.loginObj).subscribe({
      next: (res: IUserModel) => {
        if (res) {
          alert('✅ User Found... Welcome');
          localStorage.setItem("parkUser", JSON.stringify(res))
          this.router.navigateByUrl("/dashboard")
        } else {
          alert('❌ Invalid username or password');
        }
      },
      error: () => {
        alert('❌ Invalid username or password');
      }
    });
  }
}
