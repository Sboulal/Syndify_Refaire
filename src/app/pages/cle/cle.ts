import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar';
import { PageHeaderComponent } from '../../components/page-header/page-header';

@Component({
  selector: 'app-cle',
  standalone: true,
  imports: [CommonModule, SidebarComponent, PageHeaderComponent],
  templateUrl: './cle.html',
  styleUrl: './cle.css'
})
export class Cle {
  activeTab: 'biens' | 'coproprietaires' = 'biens';
  cles: any[] = []; 

  onAddCle() {
    console.log('Ouverture du modal pour ajouter une clé');
  }
}