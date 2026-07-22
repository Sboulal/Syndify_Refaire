import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  showLogin: boolean = false;
  email: string = '';
  password: string = '';
  errorMessage: string = ''; 

  private router = inject(Router);

  onSubmit() {
    this.errorMessage = ''; 

    // Verification بسيطة غير باش تيستي الـ Interfaces
    if (this.email.toLowerCase().includes('syndic')) {
      this.router.navigate(['/syndic/dashboard']);
    } else if (this.email.toLowerCase().includes('copro')) {
      this.router.navigate(['/copro/espace']);
    } else {
      this.errorMessage = 'Email awla mot de passe ghalat.';
    }
  }
}