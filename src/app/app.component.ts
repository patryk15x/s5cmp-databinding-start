import { Component } from '@angular/core';
import {ElementType} from './server-element/ElementType';
import {ServerData} from './cockpit/ServerData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: ServerElement[] = [{type: 'server', name: 'TestServer', content: 'Just a test!'}];

  onServerAdded(serverData: ServerData) {
    this.serverElements.push({
      type: ElementType.SERVER,
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: ServerData) {
    this.serverElements.push({
      type: ElementType.BLUEPRINT,
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}
