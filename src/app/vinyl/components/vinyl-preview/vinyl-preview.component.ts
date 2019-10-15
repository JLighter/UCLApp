import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vinyl-preview',
  templateUrl: './vinyl-preview.component.html',
  styleUrls: ['./vinyl-preview.component.css']
})
export class VinylPreviewComponent implements OnInit {

  @Input() vinyl: any;

  isModified = false;

  @Output() clickButton = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  switchModified() {
    this.isModified = !this.isModified;
  }

  onClickButton() {
    this.clickButton.emit(this.vinyl);
  }

}
