[![Build Status](https://travis-ci.org/killzoner/ng-json-view.svg?branch=master)](https://travis-ci.org/killzoner/ng-json-view)

# ng-json-view
A JSON View component for Angular 6+ (an angular 6+ based JSON display component)

## installation

```
npm install ng-json-view --save
```

## use
- Install the dependency package：`ng-json-view`

```
npm install ng-json-view --save
```

- Import in module `NgxJsonViewModule`

```
import { NgxJsonViewModule } from 'ng-json-view';

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

- Prepare JSON data

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

- Use on template page

```
<ngx-json-view [data]="data"></ngx-json-view>
```

# Document
- `data` - `Object` - Data
- `levelOpen` - `number` - Initialize the number of layers to be expanded (initial value: 0)

# stand by

- If the project is helpful to you, please click on the star,Thank you
- If you have ideas, questions, and bugs about the project, welcome to discuss.
