# ngx-json-view
A JSON View component for Angular 2+ (基于angular 2+ 的JSON展示组件)

## 安装

```
npm install ngx-json-view --save
```

## 使用
- 安装依赖包：`ngx-json-view`

```
npm install ngx-json-view --save
```

- 在module导入`NgxJsonViewModule`

```
import { NgxJsonViewModule } from 'ngx-json-view';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxJsonViewModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

- 准备JSON数据

```
data = {
  "name": "twp0217",
  "url": "https://github.com/twp0217",
  "string": "github",
  "number": 88,
  "boolean": true,
  "object": {
      "obj1": "obj1",
      "obj2": "obj2",
      "object": {
          "obj11": "obj11",
          "obj22": "obj22"
      },
      "emptyArray": []
  },
  "array": [
      1,
      2,
      3
  ],
  "date": new Date(),
  "null": null
};
```

- 在模板页面使用

```
<ngx-json-view [data]="data"></ngx-json-view>
```

# 文档
- `data` - Object - 数据
- `levelOpen` - number - 初始化展开层数

# 支持

- 如果项目对你有帮助，请点颗星:star:，谢谢。
- 如果你对项目有想法、问题、BUG，欢迎讨论。
