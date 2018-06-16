import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {Routes, RouterModule} from '@angular/router';
import {TypingAnimationDirective, TypingAnimationModule} from 'angular-typing-animation';

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
  MatTreeModule,
} from '@angular/material';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {SidenavitemsComponent} from './sidenavitems/sidenavitems.component';
import {RightsidenavComponent} from './rightsidenav/rightsidenav.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {EducationComponent} from './education/education.component';
import {SkillsComponent} from './skills/skills.component';
import {ProjectsComponent} from './projects/projects.component';
import {WorkshopsComponent} from './workshops/workshops.component';
import {AchievementsComponent} from './achievements/achievements.component';
import {InternshipComponent} from './internship/internship.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'workshops',
    component: WorkshopsComponent
  },
  {
    path: 'achievements',
    component: AchievementsComponent
  },
  {
    path: 'internship',
    component: InternshipComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SidenavitemsComponent,
    RightsidenavComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    WorkshopsComponent,
    AchievementsComponent,
    InternshipComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    TypingAnimationModule,
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
  exports: [
    RouterModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
