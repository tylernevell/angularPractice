/** add a decorator to tell angular that this isn't only a ts class, but something special; a component. */
/** Decorators are a ts feature that allows you to enhance your classes and other elements of your code */

import {Component} from '@angular/core';

/** Decorators always start with @ */

@Component({
  /** selector is the html tag that allows you to use this component later */
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverID = 10;
  serverStatus = 'offline';
  getServerStatus() {
    return this.serverStatus;
  }
}
