import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-json-view',
  template: `
    <div class="ngx-json-view">
      <json-view [data]="data" [level]="level" [levelOpen]="levelOpen" class="json-view"></json-view>
    </div>
  `
})
export class NgxJsonViewComponent implements OnInit {

  @Input() data;
  @Input() levelOpen: number;

  key: string;
  level: number = 0;
  ngOnInit() {
    console.error("ngOnInit");
  }

  // private _data: object;
  // @Input()
  // set data(data: object) {
  //   this._data = data;
  //   this.isInit && this.init();
  // }
  // get data(): object { return this._data; }
  // @Input() key: string;
  // @Input() level: number = 0;
  // @Input() levelOpen: number;

  // isOpen: boolean = false;
  // childrenKeys: string[];
  // hasChildren: boolean = false;
  // dataType: string;
  // value: any;
  // valueType: string;
  // isObject: boolean = false;
  // isArray: boolean = false;
  // isInit: boolean = false;

  // ngOnInit() {
  //   this.init();
  //   this.isInit = true;
  // }

  // init() {
  //   this.levelOpenHandle();
  //   this.childrenKeysHandle();
  //   this.dataHandle();
  // }

  // levelOpenHandle() {
  //   if (!Utils.isUndefined(this.levelOpen)) {
  //     (this.level <= this.levelOpen) && (this.isOpen = true);
  //   }
  // }

  // childrenKeysHandle() {
  //   if (Utils.isObject(this.data)) {
  //     this.childrenKeys = Object.keys(this.data);
  //     this.childrenKeys && this.childrenKeys.length && (this.hasChildren = true);
  //   }
  // }

  // dataHandle() {
  //   if (Utils.isObject(this.data)) {
  //     this.isObject = true;
  //     this.dataType = "Object";
  //     if (Utils.isArray(this.data)) {
  //       this.isArray = true;
  //       this.dataType = "Array";
  //     }
  //   } else {
  //     this.value = this.data;
  //     if (Utils.isString(this.data)) {
  //       this.valueType = "string";
  //     } else if (Utils.isNumber(this.data)) {
  //       this.valueType = "number";
  //     } else if (Utils.isBoolean(this.data)) {
  //       this.valueType = "boolean";
  //     } else if (null === this.data) {
  //       this.valueType = "null";
  //       this.value = "null";
  //     }
  //   }
  // }

  // toggle() {
  //   if (!(this.childrenKeys && this.childrenKeys.length)) {
  //     return;
  //   }
  //   this.isOpen = !this.isOpen;
  // }
}
