import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { Utils } from './utils.class';

@Component({
  selector: 'ngx-json-view',
  template: `
    <div class="ngx-json-view">
      <a (click)="toggle()">
        <span class="toggler" [ngClass]="{'collapse': isOpen, 'expand': !isOpen}" [style.visibility]="hasChildren?'visible':'hidden'"></span>
        <span class="key" *ngIf="key">
          <span>{{key}}</span>
          <span>: </span>
        </span>
        <span class="value">
          <span *ngIf="isObject">
            {{ dataType }}
            <span *ngIf="isArray">[ {{ data.length }} ]</span>
          </span>
          <span *ngIf="!isObject" [ngClass]="valueType">{{ value }}</span>
        </span>
      </a>
      <div class="children" *ngIf="hasChildren && isOpen">
        <ngx-json-view *ngFor="let _key of childrenKeys" [data]="data[_key]" [key]="_key" [level]="level+1" [levelOpen]="levelOpen"></ngx-json-view>
      </div>
    </div>
  `,
  styles: [`
    .ngx-json-view {
    	margin: 0;
    	padding: 0;
    }
    .ngx-json-view a {
    	cursor: pointer;
      text-decoration: none;
    }
    .ngx-json-view .toggler {
    	width: 1em;
    	padding: 0;
    	display: block;
    	text-align: center;
    	float: left;
    }
    .ngx-json-view .collapse::before {
    	content: "-";
    }
    .ngx-json-view .expand::before {
    	content: "+";
    }
    .ngx-json-view .key {
    	color: #92278f;
    }
    .ngx-json-view .value {
    	color: #000000;
    }
    .ngx-json-view .value .string {
    	color: #3ab54a;
    }
    .ngx-json-view .value .number {
    	color: #25aae2;
    }
    .ngx-json-view .value .boolean {
    	color: #aa0d91;
    }
    .ngx-json-view .value .null {
    	color: #f1592a;
    }
    .ngx-json-view .children {
    	margin-left: 1em;
    }
  `]
})
export class NgxJsonViewComponent implements OnInit {

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
  
  isOpen: boolean = false;
  childrenKeys: string[];
  hasChildren: boolean = false;
  dataType: string;
  value: any;
  valueType: string;
  isObject: boolean = false;
  isArray: boolean = false;
  isInit: boolean = false;

  ngOnInit() {
    this.init();
    this.isInit = true;
  }

  init() {
    this.levelOpenHandle();
    this.childrenKeysHandle();
    this.dataHandle();
  }

  levelOpenHandle() {
    if (!Utils.isUndefined(this.levelOpen)) {
      (this.level <= this.levelOpen) && (this.isOpen = true);
    }
  }

  childrenKeysHandle() {
    if (Utils.isObject(this.data)) {
      this.childrenKeys = Object.keys(this.data);
      this.childrenKeys && this.childrenKeys.length && (this.hasChildren = true);
    }
  }

  dataHandle() {
    if (Utils.isObject(this.data)) {
      this.isObject = true;
      this.dataType = "Object";
      if (Utils.isArray(this.data)) {
        this.isArray = true;
        this.dataType = "Array";
      }
    } else {
      this.value = this.data;
      if (Utils.isString(this.data)) {
        this.valueType = "string";
      } else if (Utils.isNumber(this.data)) {
        this.valueType = "number";
      } else if (Utils.isBoolean(this.data)) {
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
