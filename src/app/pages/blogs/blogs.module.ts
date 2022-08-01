import { NgModule } from '@angular/core';
import { BlogsPageRoutingModule } from './blogs-routing.module';
import { BlogsPage } from './blogs.page';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    SharedModule,
    BlogsPageRoutingModule
  ],
  declarations: [BlogsPage]
})
export class BlogsPageModule {}
