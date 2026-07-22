import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-copro-dashboard',
  imports: [CommonModule, SidebarComponent],
  templateUrl: './copro-dashboard.html',
  styleUrl: './copro-dashboard.css',
})
export class CoproDashboard {
  soldes: any[] = [];
  totalDu = 0;

  pourcentageUtilise = 0;
  budgetTotal = 0;
  depense = 0;
  restant = 0;

  activeTab: 'previsionnel' | 'travaux' = 'previsionnel';
  activeDetailTab: 'previsionnel' | 'travaux' = 'previsionnel';

  details: any[] = [];
  hasFluxData = false;

  page = 1;
  totalPages = 0;
}