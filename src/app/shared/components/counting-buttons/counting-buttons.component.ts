import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counting-buttons',
  templateUrl: './counting-buttons.component.html',
  styleUrls: ['./counting-buttons.component.css']
})
export class CountingButtonsComponent implements OnInit {

  @Input() value = 0;

  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emit() {
    this.valueChange.emit(this.value);
  }

  increment() {
    this.value += 1;
    this.emit();
  }

  decrement() {
    this.value -= 1;
    this.emit();
  }

}
