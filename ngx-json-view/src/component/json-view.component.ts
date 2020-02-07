import { Component, Input, OnInit } from '@angular/core';

import { isUndefined, isObject, isArray, isString, isNumber, isBoolean } from '../utils/utils';

@Component({
  selector: 'json-view',
  templateUrl: './json-view.component.html',
  styleUrls: ['./json-view.component.scss']
})
export class JsonViewComponent implements OnInit {
  private _data: object;
  @Input()
  set data(data: object) {
    this._data = data;
    this.isInit && this.init();
  }
  get data(): object { return this._data; }
  @Input() key: string;
  @Input() level: number = 0;
  @Input() levelOpen: number;
  @Input() levelLabels: { [key: number]: { [key: string]: string } };

  isOpen: boolean = false;
  childrenKeys: string[];
  hasChildren: boolean = false;
  dataType: string;
  value: any;
  valueType: string;
  isObject: boolean = false;
  isArray: boolean = false;
  isInit: boolean = false;
  _levelLabels = {};

  ngOnInit() {
    this.init();
    this.isInit = true;
  }

  init() {
    this.levelLabelHandle();
    this.levelOpenHandle();
    this.childrenKeysHandle();
    this.dataHandle();
  }

  levelLabelHandle() {
    if (this.levelLabels !== undefined) {
      this._levelLabels = this.levelLabels[this.level] || {};
    }
  }

  levelOpenHandle() {
    if (!isUndefined(this.levelOpen)) {
      (this.level <= this.levelOpen) && (this.isOpen = true);
    }
  }

  childrenKeysHandle() {
    if (isObject(this.data)) {
      this.childrenKeys = Object.keys(this.data);
      this.childrenKeys && this.childrenKeys.length && (this.hasChildren = true);
    }
  }

  dataHandle() {
    if (isObject(this.data)) {
      this.isObject = true;
      this.dataType = "Object";
      if (isArray(this.data)) {
        this.isArray = true;
        this.dataType = "Array";
      }
      if (this._levelLabels[this.key]) {
        this.dataType = this._levelLabels[this.key];
      }
    } else {
      this.value = this.data;
      if (isString(this.data)) {
        this.valueType = "string";
      } else if (isNumber(this.data)) {
        this.valueType = "number";
      } else if (isBoolean(this.data)) {
        this.valueType = "boolean";
      } else if (null === this.data) {
        this.valueType = "null";
        this.value = "null";
      }
    }
  }

  toggle() {
    if (!(this.childrenKeys && this.childrenKeys.length)) {
      return;
    }
    this.isOpen = !this.isOpen;
  }

}