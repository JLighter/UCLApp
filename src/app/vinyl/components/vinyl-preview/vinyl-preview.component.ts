import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vinyl-preview',
  templateUrl: './vinyl-preview.component.html',
  styleUrls: ['./vinyl-preview.component.css']
})
export class VinylPreviewComponent implements OnInit {

  @Input() vinyl: any;

  @Output() clickButton = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickButton() {
    this.clickButton.emit(this.vinyl);
  }

}
