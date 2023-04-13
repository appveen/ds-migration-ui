import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { ApisComponent } from './apis/apis.component';
import { YamlsComponent } from './yamls/yamls.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ConfigEnvComponent } from './config-env/config-env.component';
import { SecurityComponent } from './security/security.component';
import { IntegrationComponent } from './integration/integration.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'architecture', component: ArchitectureComponent },
  { path: 'config-env', component: ConfigEnvComponent },
  { path: 'yamls', component: YamlsComponent },
  { path: 'apis', component: ApisComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'integration', component: IntegrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
