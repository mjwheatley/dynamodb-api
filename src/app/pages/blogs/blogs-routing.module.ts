import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogsPage } from './blogs.page';

const routes: Routes = [
  {
    path: '',
    component: BlogsPage
  },
  {
    path: 'blog/:id',
    loadChildren: () => import('./blog/blog.module').then( m => m.BlogPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsPageRoutingModule {}
