import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. Zidi CommonModule hna
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-syndic-dashboard',
  imports: [CommonModule, SidebarComponent], // 2. Zidih m3a SidebarComponent
  templateUrl: './syndic-dashboard.html',
  styleUrl: './syndic-dashboard.css',
})
export class SyndicDashboard {

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