import { Routes } from '@angular/router';
import { Login } from './pages/login/login';

// 1. Zidi les imports dyal les composants jdad hna
// (Bdl les chemins 3la 7ssab fin 7titi les composants f l'projet dyalk)
import { SyndicDashboard } from './pages/syndic-dashboard/syndic-dashboard';
import { CoproDashboard} from './pages/copro-dashboard/copro-dashboard';

export const routes: Routes = [
  // Page par défaut (Redirection vers le login)
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  // Page de connexion
  { path: 'login', component: Login },

  // ==========================================
  // ROUTES DYAL SYNDIC
  // ==========================================
  { 
    path: 'syndic', 
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: SyndicDashboard },
      // Hna t9edri tzidi les autres pages dyal syndic mn b3d, matalan:
      // { path: 'residences', component: ResidencesComponent },
      // { path: 'finance', component: FinanceComponent },
    ]
  },

  // ==========================================
  // ROUTES DYAL COPROPRIÉTAIRE
  // ==========================================
  { 
    path: 'copro', 
    children: [
      { path: '', redirectTo: 'espace', pathMatch: 'full' },
      { path: 'espace', component: CoproDashboard},
      // Hna t9edri tzidi les autres pages dyal copro mn b3d, matalan:
      // { path: 'charges', component: MesChargesComponent },
    ]
  },

  // ==========================================
  // PAGE 404 (Ila dar chi lien makaynch)
  // ==========================================
  { path: '**', redirectTo: '/login' } 
];