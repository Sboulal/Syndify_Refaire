import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-header.html'
})
export class PageHeaderComponent {
  @Input() breadcrumbActive: string = 'Gestion';
  @Input() title: string = 'Titre par défaut';
  @Input() subtitle: string = 'Sous-titre par défaut';
  @Input() buttonText: string = 'Ajouter';
  @Input() buttonIcon: string = 'fa-plus';
  @Input() showActionButton: boolean = true;

  @Input() userName: string = 'Nabil Qadri';
  @Input() userRole: string = 'syndic';
  @Input() userAvatar: string = 'https://i.pravatar.cc/150?img=11';
  @Input() hasNotification: boolean = false;

  @Output() actionClicked = new EventEmitter<void>();

  onActionClick() {
    this.actionClicked.emit();
  }
}