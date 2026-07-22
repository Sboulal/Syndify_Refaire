import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar';
import { PageHeaderComponent } from '../../components/page-header/page-header';

@Component({
  selector: 'app-budgets-depenses',
  standalone: true,
  imports: [CommonModule, SidebarComponent, PageHeaderComponent],
  templateUrl: './budgets-depenses.html',
  styleUrl: './budgets-depenses.css'
})
export class BudgetsDepenses {
  activeTab: 'budgets' | 'depenses' = 'budgets';

  page: number = 1;
  totalPages: number = 1;

  budgets: any[] = [];
  depenses: any[] = [];

  switchTab(tab: 'budgets' | 'depenses') {
    this.activeTab = tab;
  }

  onNouveauClick() {
    // TODO: logique dyal l'ouverture modal "Nouveau mouvement / Nouvelle dépense"
  }

  onTelechargerClick() {
    // TODO: logique dyal télécharger le relevé
  }
}