import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillComponent } from './skill/skill.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

    // {
    //   path: 'about',
    //   component: AboutComponent
    // },

    // {
    //   path: 'certificate',
    //   component: CertificateComponent
    // },

    // {
    //   path: 'contact',
    //   component: ContactComponent
    // },

    // {
    //   path: 'project',
    //   component: ProjectsComponent
    // },

    // {
    //   path: 'skill',
    //   component: SkillComponent
    // },

    // {
    //   path: 'home',
    //   component: HomeComponent
    // },

    // { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
