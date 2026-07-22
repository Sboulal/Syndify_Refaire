import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar';
import { PageHeaderComponent } from '../../components/page-header/page-header';

@Component({
  selector: 'app-simulerbudget',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent, PageHeaderComponent],
  templateUrl: './simulerbudget.html',
  styleUrl: './simulerbudget.css'
})
export class Simulerbudget {
  // Par défaut, l'onglet "Par copropriétaire" howa li m7loul
  activeTab: 'coproprietaire' | 'bien' = 'coproprietaire';

  cleSelectionnee: string = '';
  montant: string = '';

  // Fonction bach tbedli bin les onglets
  switchTab(tab: 'coproprietaire' | 'bien') {
    this.activeTab = tab;
  }

  onGenererResultat() {
    // TODO: logique dyal génération de la simulation
  }
}