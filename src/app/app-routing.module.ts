import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroPage } from './intro/intro.page';

const routes: Routes = [
  {
    path: '',
            component: IntroPage,
            pathMatch: 'full'
    
  },

  {
    path: 'Vila',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  /* Eu que havia inserido
  {
    path: 'feed',
    loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule)
  },

*/

  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
