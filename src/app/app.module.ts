import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {Routes, RouterModule} from '@angular/router';
import {
  MatSidenavModule,
  MatMenuModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatListModule,
  MatTabsModule,
  MatTreeModule
} from '@angular/material';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { SidenavitemsComponent } from './sidenavitems/sidenavitems.component';
import { RightsidenavComponent } from './rightsidenav/rightsidenav.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SidenavitemsComponent,
    RightsidenavComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTabsModule,
    MatTreeModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatDividerModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
