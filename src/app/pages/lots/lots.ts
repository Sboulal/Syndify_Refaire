import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// IMPORTANT : T2ekdi mn l'chemin dyal l'import dyal SidebarComponent 3la 7sab l'architecture dyalek
import { SidebarComponent } from '../sidebar/sidebar';
import { PageHeaderComponent } from '../../components/page-header/page-header';

@Component({
  selector: 'app-lots',
  standalone: true,
  imports: [CommonModule, SidebarComponent, PageHeaderComponent], // Zidna CommonModule w Sidebar hna
  templateUrl: './lots.html',
  styleUrls: ['./lots.css'] // (Optionnel ila knti dayra fichier css)
})
export class Lots {
  // Déclaration dyal les variables bach maib9ach i3tik ts2339
  page: number = 1;
  totalPages: number = 1;
  
  // Tableau vide par défaut bach *ngIf="!lots || lots.length === 0" tkhdem
  lots: any[] = []; 

  constructor() {
    // Hna t9edri tzidi la logique dyalek mn ba3d bach tjibi les données mn l'API
  }

  ajouterBien() {
    // Hna t9edri tzidi la logique dyalek bach t7ell formulaire dyal l'ajout dyal bien
  }
}