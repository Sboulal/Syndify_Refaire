import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar';
import { PageHeaderComponent } from '../../components/page-header/page-header';

@Component({
  selector: 'app-appelsdefonds',
  standalone: true,
  imports: [CommonModule, SidebarComponent, PageHeaderComponent],
  templateUrl: './appelsdefonds.html',
  styleUrl: './appelsdefonds.css'
})
export class Appelsdefonds {
  // Par défaut, l'onglet "prévisionnel" howa li m7loul
  activeTab: 'previsionnel' | 'travaux' = 'previsionnel';

  // Fonction bach tbedli bin les onglets
  switchTab(tab: 'previsionnel' | 'travaux') {
    this.activeTab = tab;
  }
}