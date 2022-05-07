import { fade } from './../../animations/fade';
import { ModalConfig } from './interfaces/model-config';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade],
})
export class ModalComponent implements OnInit {
  @HostBinding('@fade') fade = true;
  public config: ModalConfig;
  constructor() {}

  ngOnInit(): void {}
}
