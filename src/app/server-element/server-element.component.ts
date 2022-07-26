import {Component, Input, OnInit} from '@angular/core';
import {ElementType} from './ElementType';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  server = ElementType.SERVER;
  blueprint = ElementType.BLUEPRINT;
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: ServerElement;

  constructor() { }

  ngOnInit(): void {
  }

}
