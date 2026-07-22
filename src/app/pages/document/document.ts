import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar';
import { PageHeaderComponent } from '../../components/page-header/page-header';

interface DocumentItem {
  id: number;
  nom: string;
  categorie: string;
  type: string; // 'pdf' | 'doc' | 'xls' | 'img' | ...
  dateAjout: string | Date;
  tailleOctets: number;
  url?: string;
}

@Component({
  selector: 'app-document',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent, PageHeaderComponent],
  templateUrl: './document.html',
  styleUrl: './document.css',
})
export class Document implements OnInit {

  documents: DocumentItem[] = [];
  categories: string[] = ['Appel de fonds', 'Avis de rappel', 'Rapport de clôture', 'Relevé des opérations', 'Règlement', 'Procès-verbal'];

  searchTerm = '';
  selectedCategorie = '';

  page = 1;
  pageSize = 10;

  ngOnInit(): void {
    // TODO: remplacer par l'appel API (ex: this.documentService.getDocuments())
  }

  get documentsFiltres(): DocumentItem[] {
    let result = this.documents;

    if (this.selectedCategorie) {
      result = result.filter(d => d.categorie === this.selectedCategorie);
    }

    if (this.searchTerm?.trim()) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(d => d.nom.toLowerCase().includes(term));
    }

    const start = (this.page - 1) * this.pageSize;
    return result.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.documents.length / this.pageSize));
  }

  pagePrecedente(): void {
    if (this.page > 1) this.page--;
  }

  pageSuivante(): void {
    if (this.page < this.totalPages) this.page++;
  }

  getIconClass(type: string): string {
    switch (type) {
      case 'pdf': return 'fa-solid fa-file-pdf text-red-500';
      case 'doc': return 'fa-solid fa-file-word text-blue-500';
      case 'xls': return 'fa-solid fa-file-excel text-green-500';
      case 'img': return 'fa-solid fa-file-image text-purple-500';
      default: return 'fa-solid fa-file text-gray-400';
    }
  }

  getIconBg(type: string): string {
    switch (type) {
      case 'pdf': return 'bg-red-50';
      case 'doc': return 'bg-blue-50';
      case 'xls': return 'bg-green-50';
      case 'img': return 'bg-purple-50';
      default: return 'bg-gray-100';
    }
  }

  getCategorieBadge(categorie: string): string {
    switch (categorie) {
      case 'Appel de fonds': return 'bg-blue-50 text-[#2a73b9] border-blue-100';
      case 'Avis de rappel': return 'bg-red-50 text-red-600 border-red-100';
      case 'Rapport de clôture': return 'bg-green-50 text-green-600 border-green-100';
      case 'Relevé des opérations': return 'bg-orange-50 text-orange-600 border-orange-100';
      default: return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  }

  formatTaille(octets: number): string {
    if (!octets) return '-';
    const ko = octets / 1024;
    if (ko < 1024) return `${ko.toFixed(0)} Ko`;
    const mo = ko / 1024;
    return `${mo.toFixed(1)} Mo`;
  }

  onAjouterDocument(): void {
    // TODO: ouvrir modal / input file
  }

  onTelecharger(doc: DocumentItem): void {
    // TODO: appel API téléchargement
  }

  onApercu(doc: DocumentItem): void {
    // TODO: ouvrir aperçu (modal ou nouvel onglet)
  }

  onSupprimer(doc: DocumentItem): void {
    // TODO: confirmation + appel API suppression
  }
}