import { Component } from '@angular/core';
// 1. Zidi had stter bach t-importi l'Sidebar
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-copro-dashboard',
  imports: [SidebarComponent],
  templateUrl: './copro-dashboard.html',
  styleUrl: './copro-dashboard.css',
})
export class CoproDashboard {

}
