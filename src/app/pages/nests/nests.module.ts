import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NestsPageRoutingModule } from './nests-routing.module';

import { NestsPage } from './nests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NestsPageRoutingModule
  ],
  declarations: [NestsPage]
})
export class NestsPageModule {}
