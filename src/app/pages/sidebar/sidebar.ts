import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html'
})
export class SidebarComponent implements OnInit {
  isCoproOpen: boolean = false;
  isFinanceOpen: boolean = false;
  @Input() role: 'syndic' | 'coproprietaire' = 'coproprietaire';

  coproRoutes = ['/syndic/lots', '/syndic/copro-listes', '/syndic/cles', '/syndic/impayee'];
  financeRoutes = ['/syndic/budgets', '/syndic/appels-fonds', '/syndic/simuler-budget'];

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateOpenState(this.router.url);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateOpenState(event.urlAfterRedirects);
      });
  }

  private updateOpenState(url: string) {
    this.isCoproOpen = this.coproRoutes.some(r => url.startsWith(r));
    this.isFinanceOpen = this.financeRoutes.some(r => url.startsWith(r));
  }

  // Les liens dyal Syndic b les icons FontAwesome
  syndicMenu = [
    { title: 'Dashboard', icon: 'fa-solid fa-chart-line', link: '/syndic/dashboard' },
    { title: 'Résidences', icon: 'fa-solid fa-building', link: '/syndic/residences' },
    { title: 'Copropriétaires', icon: 'fa-solid fa-users', link: '/syndic/coproprietaires' },
    { title: 'Finance', icon: 'fa-solid fa-file-invoice-dollar', link: '/syndic/finance' },
    { title: 'Interventions', icon: 'fa-solid fa-screwdriver-wrench', link: '/syndic/interventions' },
    { title: 'Communication', icon: 'fa-solid fa-comments', link: '/syndic/communication' },
    { title: 'AG/Votes', icon: 'fa-solid fa-check-to-slot', link: '/syndic/votes' },
    { title: 'Réglages', icon: 'fa-solid fa-gear', link: '/syndic/reglages' }
  ];

  // Les liens dyal Copropriétaire b les icons FontAwesome
  coproMenu = [
    { title: 'Mon Espace', icon: 'fa-solid fa-house', link: '/copro/espace' },
    { title: 'Mon Lot', icon: 'fa-solid fa-door-closed', link: '/copro/lot' },
    { title: 'Mes Charges', icon: 'fa-solid fa-money-bill-wave', link: '/copro/charges' },
    { title: 'Mes Incidents', icon: 'fa-solid fa-triangle-exclamation', link: '/copro/incidents' },
    { title: 'Actualités', icon: 'fa-solid fa-newspaper', link: '/copro/actualites' },
    { title: 'Documents', icon: 'fa-solid fa-folder-open', link: '/copro/documents' },
    { title: 'Voter/AG', icon: 'fa-solid fa-check-to-slot', link: '/copro/votes' }
  ];

  get menuItems() {
    return this.role === 'syndic' ? this.syndicMenu : this.coproMenu;
  }
}