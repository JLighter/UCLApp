import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VinylService } from 'src/app/core/services/vinyl.service';

@Component({
  selector: 'app-vinyl-preview',
  templateUrl: './vinyl-preview.component.html',
  styleUrls: ['./vinyl-preview.component.css']
})
export class VinylPreviewComponent implements OnInit {

  @Input() vinyl: any;

  isModified = false;

  @Output() clickButton = new EventEmitter();

  constructor(private vinylService: VinylService) {
    console.log('use vinyl service in preview', vinylService);
  }

  ngOnInit() {
  }

  switchModified() {
    this.isModified = !this.isModified;
  }

  onClickButton() {
    this.clickButton.emit(this.vinyl);
  }

}
