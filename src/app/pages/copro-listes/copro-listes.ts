import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar';
import { PageHeaderComponent } from '../../components/page-header/page-header';

@Component({
  selector: 'app-copro-listes',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent, PageHeaderComponent],
  templateUrl: './copro-listes.html',
  styleUrl: './copro-listes.css',
})
export class CoproListes {
  // Variables dyal la pagination
  page: number = 1;
  totalPages: number = 1;
activeTab: 'actifs' | 'inactifs' | 'attente' = 'actifs';
  // Tableau vide par défaut bach tbayan l'état "Aucun copropriétaire trouvé"
  coproprietaires: any[] = [];

  searchTerm: string = '';

  constructor() {
    // Hna fin ghtzidi l'appel l'API dyalek b Laravel mn b3d bach t3emri l'tableau
  }

  onAjouterCopro() {
    // TODO: logique dyal l'ouverture modal "Ajouter un copropriétaire"
  }
}