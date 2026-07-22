import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar';
import { PageHeaderComponent } from '../../components/page-header/page-header';

@Component({
  selector: 'app-exercices',
  standalone: true,
  imports: [CommonModule, SidebarComponent, PageHeaderComponent],
  templateUrl: './exercices.html',
  styleUrl: './exercices.css',
})
export class Exercices {
  // T9edri tzidi les variables dyal backend hna mn b3d

  onOuvrirExercice() {
    // TODO: logique dyal l'ouverture d'un nouvel exercice
  }
}