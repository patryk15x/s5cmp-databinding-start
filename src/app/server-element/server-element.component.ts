import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  server = ElementType.SERVER;
  blueprint = ElementType.BLUEPRINT;
  @Input() element: ServerElement;

  constructor() { }

  ngOnInit(): void {
  }

}
