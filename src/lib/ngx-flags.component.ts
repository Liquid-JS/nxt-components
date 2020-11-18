import { Component, Input, OnInit } from '@angular/core';
import * as database from './ngx-flags.database';

@Component({
  selector: 'flag',
  template: `<div *ngIf="this.code" [style]="this.style" [ngClass]="['ngx-flag', this.class]"></div>`,
  styles: [
    `
      .ngx-flag {
        display: inline-block;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    `,
  ],
})
export class NgxFlagsComponent implements OnInit {
  @Input() code: string;
  @Input() format: string;
  @Input() size: any = 48;
  @Input() class: string = '';

  public imageUrl: string;
  public style;
  public database = database.db;

  constructor() {}

  ngOnInit(): void {
    this.imageUrl = `assets/flags/${this.getFlag()}.svg`;

    this.style = {
      borderRadius: this.getFormat() == FORMAT.ROUND ? '9999px' : '0%',
      width: `${this.getSize()}px`,
      height: this.getFormat() == FORMAT.NONE ? `${Math.floor(this.getSize() / 1.5)}px` : `${this.getSize()}px`,
      backgroundImage: `url("${this.imageUrl}")`,
    };
  }

  getSize(): number {
    return isNaN(+this.size) ? +SIZE[this.size.toUpperCase()] : this.size;
  }

  getFormat(): string {
    return this.format ? this.format.toLowerCase() : FORMAT.NONE;
  }

  getCode(): string {
    return this.code.toLowerCase();
  }

  getFlag(): string {
    return this.database[this.code.toLowerCase()];
  }
}

enum FORMAT {
  NONE = 'none',
  ROUND = 'round',
  SQUARE = 'square',
}

enum SIZE {
  XXS = 8,
  XS = 16,
  S = 24,
  M = 32,
  L = 48,
  XL = 64,
  XXL = 96,
}
