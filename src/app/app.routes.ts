import { Routes } from '@angular/router';
import { Login } from './pages/login/login';

// 1. Les imports dyal les composants dyal Syndic w Copro
import { SyndicDashboard } from './pages/syndic-dashboard/syndic-dashboard';
import { CoproDashboard } from './pages/copro-dashboard/copro-dashboard';
import { Document } from './pages/document/document';
import { Lots } from './pages/lots/lots';
import { CoproListes } from './pages/copro-listes/copro-listes';
import { BudgetsDepenses } from './pages/budgets-depenses/budgets-depenses';
import { Appelsdefonds } from './pages/appelsdefonds/appelsdefonds';
import { Simulerbudget } from './pages/simulerbudget/simulerbudget';
import { Exercices } from './pages/exercices/exercices';
import { Cle } from './pages/cle/cle';
import { Impayee } from './pages/impayee/impayee';

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
      { path: 'documents', component: Document },
      { path: 'lots', component: Lots },
      { path: 'copro-listes', component: CoproListes },
      { path: 'budgets', component: BudgetsDepenses },
      { path: 'appels-fonds', component: Appelsdefonds },
      { path: 'simuler-budget', component: Simulerbudget },
      { path: 'exercices', component: Exercices },
      {path: 'cles', component: Cle},
      {path: 'impayee', component: Impayee}
    ]
  },

  // ==========================================
  // ROUTES DYAL COPROPRIÉTAIRE
  // ==========================================
  { 
    path: 'copro', 
    children: [
      { path: '', redirectTo: 'espace', pathMatch: 'full' },
      { path: 'espace', component: CoproDashboard },
    ]
  },

  // ==========================================
  // PAGE 404 (Ila dar chi lien makaynch)
  // ==========================================
  { path: '**', redirectTo: '/login' } 
];