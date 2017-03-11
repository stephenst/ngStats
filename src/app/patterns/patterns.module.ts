import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatternsRoutingModule } from './patterns-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms/forms.component';
import { ModalsComponent } from './modals/modals.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    PatternsRoutingModule
  ],
  declarations: [ButtonsComponent, FormsComponent, ModalsComponent, TabsComponent],
  exports: [ButtonsComponent, ModalsComponent, TabsComponent]
})
export class PatternsModule { }
