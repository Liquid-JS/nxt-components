# Angular Date Time Picker

[![npm](https://img.shields.io/npm/v/nxt-pick-datetime.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/nxt-pick-datetime)
[![npm](https://img.shields.io/npm/dm/nxt-pick-datetime.svg)](https://www.npmjs.com/package/nxt-pick-datetime)

**Angular date time picker - Angular reusable UI component**
**This package supports Angular 9**

## Breaking Changes

-   The picker has been updated for Angular 9+ apps.

## Description

Simple Angular date time picker. Online doc is [here](https://daniel-projects.firebaseapp.com/nxtng/date-time-picker), Online demo(StackBlitz) is [here](https://stackblitz.com/github/DanielYKPan/nxt-examples/tree/date-time-picker).
This picker is responsive design, so feel free to try it in your desktops, tablets and mobile devices.

## How to Use

1.  Install with [npm](https://www.npmjs.com): `npm install nxt-pick-datetime --save` 
2.  Add styles.

If you are using Angular CLI, you can add this to `angular.json` : 

```js
"styles": [
    ...,
    "dist/nxt-pick-datetime/assets/picker.scss"
]
```

3.  Add **NxtDateTimeModule** and **NxtNativeDateTimeModule** to your **@NgModule** like example below

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyTestApp } from './my-test-app';

import { NxtDateTimeModule } from 'nxt-pick-datetime';
import { NxtNativeDateTimeModule } from 'nxt-pick-datetime/native-adapter';

@NgModule({
    imports: [ 
        BrowserModule, 
        NxtDateTimeModule, 
        NxtNativeDateTimeModule,
    ],
    declarations: [ MyTestApp ],
    bootstrap:    [ MyTestApp ]
})
export class MyTestAppModule {}
```

4.  Connecting a picker to an input and a trigger.

```html
<input [nxtDateTime]="dt1" [nxtDateTimeTrigger]="dt1" placeholder="Date Time">
<nxt-date-time #dt1></nxt-date-time>
```

```html
<input [nxtDateTime]="dt2" placeholder="Date Time">
<span [nxtDateTimeTrigger]="dt2"><i class="fa fa-calendar"></i></span>
<nxt-date-time #dt2></nxt-date-time>
```

The examples above are quite basic. The picker has much more features, 
and you could learn more about those from [demo page](https://danielykpan.github.io/date-time-picker/).

## Animation

This picker uses angular animations to improve the user experience, 
therefore you need to install `@angular/animations` and import `BrowserAnimationsModule` to your application.

    npm install @angular/animations --save

```typescript
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        //...
    ],
    //...
})
export class YourAppModule { }
```

If you prefer to disable animation effect, use `NoopAnimationsModule` instead.

## Choose a date implementation

The date-time picker was built to be date implementation agnostic.
Developers need to make sure to provide the appropriate pieces for the picker to work with their chosen implementation.
There are two pre-made modules, users need to import one of them or build your own one (learn more about this from [here](https://danielykpan.github.io/date-time-picker/#locale-formats)).

-   `NxtNativeDateTimeModule` - support for native JavaScript Date object
-   `NxtMomentDateTimeModule` - support for MomentJs

## Properties for `nxt-date-time`

| Name               | Type                            | Required | Default               | Description                                                                                                                                    |
| :----------------- | :------------------------------ | :------- | :-------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| `pickerType`       | `both` , `calendar` , `timer`   | Optional | `both`                | Set the type of the dateTime picker. `both` : show both calendar and timer, `calendar` : only show calendar, `timer` : only show timer.        |
| `pickerMode`       | `popup` , `dialog`              | Optional | `popup`               | The style the picker would open as.                                                                                                            |
| `startView`        | `month` , `year` , `multi-year` | Optional | `month`               | The view that the calendar should start in.                                                                                                    |
| `startAt`          | T/null                          | Optional | `null`                | The moment to open the picker to initially.                                                                                                    |
| `firstDayOfWeek`   | number                          | Optional | `0`                   | Set the first day of week. Valid value is from 0 to 6.0: Sunday ~ 6: Saturday                                                                  |
| `showSecondsTimer` | boolean                         | Optional | `false`               | When specify it to true, it would show a timer to configure the second's value                                                                 |
| `hideOtherMonths`  | boolean                         | Optional | `false`               | Whether to hide dates in other months at the start or end of the current month                                                                 |
| `hour12Timer`      | boolean                         | Optional | `false`               | When specify it to true, the timer would be in hour12 format mode                                                                              |
| `stepHour`         | number                          | Optional | `1`                   | Hours to change per step.                                                                                                                      |
| `stepMinute`       | number                          | Optional | `1`                   | Minutes to change per step.                                                                                                                    |
| `stepSecond`       | number                          | Optional | `1`                   | Seconds to change per step.                                                                                                                    |
| `scrollStrategy`   | ScrollStrategy                  | Optional | `BlockScrollStrategy` | Define the scroll strategy when the picker is open. Learn more this from <https://material.angular.io/cdk/overlay/overview#scroll-strategies>. |
| `disabled`         | boolean                         | Optional | `false`               | When specify to true, it would disable the picker.                                                                                             |
| `backdropClass`    | string/string\[]                | Optional | `null`                | Custom class for the picker backdrop.                                                                                                          |
| `panelClass`       | string/string\[]                | Optional | `null`                | Custom class for the picker overlay panel.                                                                                                     |

## Events for `nxt-date-time`

| Events              | Parameter | Description                                                                                      |
| :------------------ | :-------- | :----------------------------------------------------------------------------------------------- |
| `afterPickerOpen`   | null      | Callback to invoke when the picker is opened                                                     |
| `afterPickerClosed` | null      | Callback to invoke when the picker is closed.                                                    |
| `yearSelected`      | T         | Callback to invoke when the year is selected. This doesn't imply a change on the selected date.  |
| `monthSelected`     | T         | Callback to invoke when the month is selected. This doesn't imply a change on the selected date. |

## Properties for `input[nxtDateTime]`

| Name                | Type                                         | Required | Default  | Description                                                                                                                                                                                                                                                                                                                            |
| :------------------ | :------------------------------------------- | :------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nxtDateTime`       | `NxtDateTimeComponent<T>`                    | Require  | `null`   | The date time picker that this input is associated with.                                                                                                                                                                                                                                                                               |
| `nxtDateTimeFilter` | `( date: T)=>boolean `                       | Optional | `null`   | A function to filter date time.                                                                                                                                                                                                                                                                                                        |
| `disabled`          | boolean                                      | Optional | `false`  | When specify to true, it would disable the picker's input.                                                                                                                                                                                                                                                                             |
| `min`               | `<T>`                                        | Optional | `null`   | The minimum valid date time.                                                                                                                                                                                                                                                                                                           |
| `max`               | `<T>`                                        | Optional | `null`   | The maximum valid date time.                                                                                                                                                                                                                                                                                                           |
| `selectMode`        | `single` , `range` , `rangeFrom` , `rangeTo` | Optional | `single` | Specify the picker's select mode. `single` : a single value allowed, `range` : allow users to select a range of date-time, `rangeFrom` : the input would only show the 'from' value and the picker could only selects 'from' value, `rangeTo` : the input would only show the 'to' value and the picker could only selects 'to' value. |
| `rangeSeparator`    | string                                       | Optional | `~`      | The character to separate the 'from' and 'to' in input value in range selectMode.                                                                                                                                                                                                                                                      |

## Events for `input[nxtDateTime]`

| Events           | Parameter                                                              | Description                                                                         |
| :--------------- | :--------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| `dateTimeChange` | source: NxtDateTimeInput, value: input value, input: the input element | Callback to invoke when `change` event is fired on this `<input [nxtDateTime]>`     |
| `dateTimeInput`  | source: NxtDateTimeInput, value: input value, input: the input element | Callback to invoke when an `input` event is fired on this `<input [nxtDateTime]>` . |

## Properties for `[nxtDateTimeTrigger]`

| Name                 | Type                      | Required | Default | Description                                                |
| :------------------- | :------------------------ | :------- | :------ | :--------------------------------------------------------- |
| `nxtDateTimeTrigger` | `NxtDateTimeComponent<T>` | Require  | `null`  | The date time picker that this trigger is associated with. |
| `disabled`           | boolean                   | Optional | `false` | When specify to true, it would disable the trigger.        |

## Properties for `[nxtDateTimeTrigger]`

| Name                 | Type                      | Required | Default | Description                                                |
| :------------------- | :------------------------ | :------- | :------ | :--------------------------------------------------------- |
| `nxtDateTimeTrigger` | `NxtDateTimeComponent<T>` | Require  | `null`  | The date time picker that this trigger is associated with. |
| `disabled`           | boolean                   | Optional | `false` | When specify to true, it would disable the trigger.        |

## Properties for `nxt-date-time-inline`

| Name                | Type                                         | Required | Default  | Description                                                                                                                                                                                                                                                                                                                            |
| :------------------ | :------------------------------------------- | :------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pickerType`        | `both` , `calendar` , `timer`                | Optional | `both`   | Set the type of the dateTime picker. `both` : show both calendar and timer, `calendar` : only show calendar, `timer` : only show timer.                                                                                                                                                                                                |
| `startView`         | `month` , `year` , `multi-year`              | Optional | `month`  | The view that the calendar should start in.                                                                                                                                                                                                                                                                                            |
| `startAt`           | T/null                                       | Optional | `null`   | The moment to open the picker to initially.                                                                                                                                                                                                                                                                                            |
| `firstDayOfWeek`    | number                                       | Optional | `0`      | Set the first day of week. Valid value is from 0 to 6.0: Sunday ~ 6: Saturday                                                                                                                                                                                                                                                          |
| `showSecondsTimer`  | boolean                                      | Optional | `false`  | When specify it to true, it would show a timer to configure the second's value                                                                                                                                                                                                                                                         |
| `hideOtherMonths`   | boolean                                      | Optional | `false`  | Whether to hide dates in other months at the start or end of the current month                                                                                                                                                                                                                                                         |
| `hour12Timer`       | boolean                                      | Optional | `false`  | When specify it to true, the timer would be in hour12 format mode                                                                                                                                                                                                                                                                      |
| `stepHour`          | number                                       | Optional | `1`      | Hours to change per step.                                                                                                                                                                                                                                                                                                              |
| `stepMinute`        | number                                       | Optional | `1`      | Minutes to change per step.                                                                                                                                                                                                                                                                                                            |
| `stepSecond`        | number                                       | Optional | `1`      | Seconds to change per step.                                                                                                                                                                                                                                                                                                            |
| `disabled`          | boolean                                      | Optional | `false`  | When specify to true, it would disable the picker.                                                                                                                                                                                                                                                                                     |
| `nxtDateTimeFilter` | `( date: T)=>boolean `                       | Optional | `null`   | A function to filter date time.                                                                                                                                                                                                                                                                                                        |
| `min`               | `<T>`                                        | Optional | `null`   | The minimum valid date time.                                                                                                                                                                                                                                                                                                           |
| `max`               | `<T>`                                        | Optional | `null`   | The maximum valid date time.                                                                                                                                                                                                                                                                                                           |
| `selectMode`        | `single` , `range` , `rangeFrom` , `rangeTo` | Optional | `single` | Specify the picker's select mode. `single` : a single value allowed, `range` : allow users to select a range of date-time, `rangeFrom` : the input would only show the 'from' value and the picker could only selects 'from' value, `rangeTo` : the input would only show the 'to' value and the picker could only selects 'to' value. |

## Localization and DateTime Format

Localization for different languages and formats is defined by `NXT_DATE_TIME_LOCALE` and `NXT_DATE_TIME_FORMATS` . You could learn more about this from [here](https://danielykpan.github.io/date-time-picker#locale-formats).

## Dependencies

none

## Demo

-   Online doc is [here](https://daniel-projects.firebaseapp.com/nxtng/date-time-picker)
-   Online demo(StackBlitz) is [here](https://stackblitz.com/github/DanielYKPan/nxt-examples/tree/date-time-picker)

## License

-   License: MIT

## Author

**Daniel YK Pan**
