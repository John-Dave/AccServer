import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AccServerSharedModule } from 'app/shared/shared.module';
import { AccServerCoreModule } from 'app/core/core.module';
import { AccServerAppRoutingModule } from './app-routing.module';
import { AccServerHomeModule } from './home/home.module';
import { AccServerEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AccServerSharedModule,
    AccServerCoreModule,
    AccServerHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AccServerEntityModule,
    AccServerAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class AccServerAppModule {}
