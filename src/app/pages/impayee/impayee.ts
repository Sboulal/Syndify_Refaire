import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar';
import { PageHeaderComponent } from '../../components/page-header/page-header';

interface ImpayeItem {
  identifiant: string;
  coproprietaire: string;
  contact: string;
  montantDu: number;
}

@Component({
  selector: 'app-impayee',
  standalone: true,
  imports: [CommonModule, SidebarComponent, PageHeaderComponent],
  templateUrl: './impayee.html',
  styleUrl: './impayee.css'
})
export class Impayee {
  impayes: ImpayeItem[] = [];

  get totalARecouvrer(): number {
    return this.impayes.reduce((sum, i) => sum + i.montantDu, 0);
  }

  onRelancer(item: ImpayeItem) {
    console.log('Relance pour:', item.coproprietaire);
  }
}