import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [], /** angular uses modules to bundle different pieces like components into packages */
  bootstrap: [AppComponent]/** Tells angular this is a special component and to bootstrap the entire app with this root comp */
})
export class AppModule { }
