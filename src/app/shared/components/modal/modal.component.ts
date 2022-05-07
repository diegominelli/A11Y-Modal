import { fade } from './../../animations/fade';
import { ModalConfig } from './interfaces/model-config';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ModalRef } from './models/model-ref';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade],
})
export class ModalComponent implements OnInit {
  @HostBinding('@fade') fade = true;
  public config: ModalConfig;
  public modalRef: ModalRef;

  constructor() {}

  ngOnInit(): void {}
}
