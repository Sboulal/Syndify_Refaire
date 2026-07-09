import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // 1. Zidna FormsModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // 2. Ajoutinah f les imports
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';
  private router = inject(Router);

  onSubmit() {
    // 3. Logique fake bach n-testiw les deux rôles
    if (this.email.toLowerCase().includes('syndic')) {
      localStorage.setItem('userRole', 'syndic');
      this.router.navigate(['/syndic/dashboard']);
    } else if (this.email.toLowerCase().includes('copro')) {
      localStorage.setItem('userRole', 'coproprietaire');
      this.router.navigate(['/copro/espace']);
    } else {
      alert('Veuillez utiliser un email contenant "syndic" ou "copro" pour tester l\'interface.');
    }
  }
}