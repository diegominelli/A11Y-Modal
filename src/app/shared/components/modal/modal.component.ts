import { ModalConfig } from './interfaces/model-config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public config: ModalConfig;
  constructor() {}

  ngOnInit(): void {}
}
