import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { ApisComponent } from './apis/apis.component';
import { YamlsComponent } from './yamls/yamls.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ConfigEnvComponent } from './config-env/config-env.component';
import { SecurityComponent } from './security/security.component';
import { IntegrationComponent } from './integration/integration.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonFilterPipe } from './utils/common-filter.pipe';
import { DataServiceComponent } from './data-service/data-service.component';
import { HeadingDirective } from './utils/heading.directive';
import { SubHeadingDirective } from './utils/sub-heading.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArchitectureComponent,
    ApisComponent,
    YamlsComponent,
    AuthenticationComponent,
    ConfigEnvComponent,
    SecurityComponent,
    IntegrationComponent,
    CommonFilterPipe,
    DataServiceComponent,
    HeadingDirective,
    SubHeadingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CommonFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
