import { Component } from '@angular/core';
// 1. Zidi had stter bach t-importi l'Sidebar
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-syndic-dashboard',
  imports: [SidebarComponent],
  templateUrl: './syndic-dashboard.html',
  styleUrl: './syndic-dashboard.css',
})
export class SyndicDashboard {

}
