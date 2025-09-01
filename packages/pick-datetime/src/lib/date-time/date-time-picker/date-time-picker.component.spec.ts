/* eslint-disable @angular-eslint/component-class-suffix */
import { OverlayContainer } from '@angular/cdk/overlay'
import { Component, Provider, Type, ViewChild } from '@angular/core'
import { ComponentFixture, fakeAsync, flush, inject, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule, UntypedFormControl } from '@angular/forms'
import { By } from '@angular/platform-browser'
import { provideNoopAnimations } from '@angular/platform-browser/animations'
import { createKeyboardEvent, dispatchFakeEvent, dispatchKeyboardEvent, dispatchMouseEvent, provideTestDateTimeAdapter } from '../../../test-helpers'
import { DateTimeContainerComponent } from '../date-time-picker-container/date-time-picker-container.component'
import { DateTimeInputDirective } from '../date-time-picker-input.directive'
import { DateTimeTriggerDirective } from '../date-time-picker-trigger.directive'
import { DateTimeModule } from '../date-time.module'
import { DateTimeComponent } from './date-time-picker.component'

describe('DateTimeComponent', () => {
    const SUPPORTS_INTL = typeof Intl != 'undefined'

    // Creates a test component fixture.
    const createComponent = (
        component: Type<any>,
        providers?: Provider[]
    ) => {
        TestBed.configureTestingModule({
            providers: [
                provideNoopAnimations(),
                ...providers || []
            ]
        })

        TestBed.compileComponents().catch(console.error)

        return TestBed.createComponent(component)
    }

    afterEach(inject([OverlayContainer], (container: OverlayContainer) => {
        container.ngOnDestroy()
    }))

    describe('with TestDateTimeModule', () => {
        describe('standard DateTimePicker', () => {
            let fixture: ComponentFixture<StandardDateTimePicker>
            let testComponent: StandardDateTimePicker
            let containerElement: HTMLElement

            beforeEach(fakeAsync(() => {
                fixture = createComponent(StandardDateTimePicker, provideTestDateTimeAdapter())
                fixture.detectChanges()
                testComponent = fixture.componentInstance
            }))

            afterEach(fakeAsync(() => {
                testComponent.dateTimePicker?.close()
                fixture.detectChanges()
                flush()
            }))

            it('should initialize with correct value shown in input', () => {
                if (SUPPORTS_INTL) {
                    expect(
                        fixture.nativeElement.querySelector('input').value
                    ).toBe('1/1/2020, 12:00 AM')
                }
            })

            it('should open popup when pickerMode is "popup"', () => {
                expect(
                    document.querySelector('.cdk-overlay-pane.nxt-dt-popup')
                ).toBeNull()

                testComponent.dateTimePicker?.open()
                fixture.detectChanges()

                expect(
                    document.querySelector('.cdk-overlay-pane.nxt-dt-popup')
                ).not.toBeNull()
            })

            it('should open dialog when pickerMode is "dialog"', () => {
                testComponent.pickerMode = 'dialog'
                fixture.detectChanges()

                expect(
                    document.querySelector(
                        '.nxt-dt-dialog nxt-dialog-container'
                    )
                ).toBeNull()

                testComponent.dateTimePicker?.open()
                fixture.detectChanges()

                expect(
                    document.querySelector(
                        '.nxt-dt-dialog nxt-dialog-container'
                    )
                ).not.toBeNull()
            })

            it('should open dateTimePicker if isOpen input is set to true', fakeAsync(() => {
                testComponent.isOpen = true
                fixture.detectChanges()
                flush()

                expect(
                    document.querySelector('.nxt-dt-container')
                ).not.toBeNull()

                testComponent.isOpen = false
                fixture.detectChanges()
                flush()

                expect(document.querySelector('.nxt-dt-container')).toBeNull()
            }))

            it('should NOT open dateTimePicker if it is disabled', () => {
                testComponent.disabled = true
                fixture.detectChanges()

                expect(document.querySelector('.cdk-overlay-pane')).toBeNull()
                expect(
                    document.querySelector('nxt-date-time-container')
                ).toBeNull()

                testComponent.dateTimePicker?.open()
                fixture.detectChanges()

                expect(document.querySelector('.cdk-overlay-pane')).toBeNull()
                expect(
                    document.querySelector('nxt-date-time-container')
                ).toBeNull()
            })

            it('disabled dateTimePicker input should open the picker panel if dateTimePicker is enabled', () => {
                testComponent.dateTimePicker!.disabled = false
                testComponent.dateTimePickerInput!.disabled = true
                fixture.detectChanges()

                expect(document.querySelector('.cdk-overlay-pane')).toBeNull()

                testComponent.dateTimePicker?.open()
                fixture.detectChanges()

                expect(
                    document.querySelector('.cdk-overlay-pane')
                ).not.toBeNull()
            })

            it('should close popup when fn close is called', fakeAsync(() => {
                testComponent.dateTimePicker?.open()
                fixture.detectChanges()
                flush()

                const popup = document.querySelector('.cdk-overlay-pane')
                expect(popup).not.toBeNull()
                expect(
                    parseInt(getComputedStyle(popup!).height, 10)
                ).not.toBe(0)

                testComponent.dateTimePicker?.close()
                fixture.detectChanges()
                flush()

                expect(parseInt(getComputedStyle(popup!).height || '0', 10)).toBe(
                    0
                )
            }))

            it('should close the popup when pressing Escape', fakeAsync(() => {
                testComponent.dateTimePicker?.open()
                fixture.detectChanges()
                flush()

                expect(testComponent.dateTimePicker?.isOpen)
                    .withContext('Expected dateTimePicker to be open.')
                    .toBe(
                        true
                    )

                dispatchKeyboardEvent(document.body, 'keydown', 'Escape')
                fixture.detectChanges()
                flush()

                expect(testComponent.dateTimePicker?.isOpen)
                    .withContext('Expected dateTimePicker to be closed.')
                    .toBe(
                        false
                    )
            }))

            it('should close dialog when fn close is called', fakeAsync(() => {
                testComponent.pickerMode = 'dialog'
                fixture.detectChanges()

                testComponent.dateTimePicker?.open()
                fixture.detectChanges()
                flush()

                expect(
                    document.querySelector('nxt-dialog-container')
                ).not.toBeNull()

                testComponent.dateTimePicker?.close()
                fixture.detectChanges()
                flush()

                expect(
                    document.querySelector('nxt-dialog-container')
                ).toBeNull()
            }))

            it('should close popup panel when cancel button clicked', fakeAsync(() => {
                testComponent.dateTimePicker?.open()
                fixture.detectChanges()
                flush()
                expect(testComponent.dateTimePicker?.isOpen)
                    .withContext('Expected dateTimePicker to be isOpen.')
                    .toBe(
                        true
                    )

                const containerDebugElement = fixture.debugElement.query(
                    By.directive(DateTimeContainerComponent)
                )
                containerElement = containerDebugElement.nativeElement

                const btns = containerElement.querySelectorAll(
                    '.nxt-dt-container-control-button'
                )
                dispatchMouseEvent(btns[0], 'click') // 'Cancel' button
                fixture.detectChanges()
                flush()

                expect(testComponent.dateTimePicker?.isOpen)
                    .withContext('Expected dateTimePicker to be closed.')
                    .toBe(
                        false
                    )
            }))

            it('should close popup panel and not update input value when cancel button clicked', fakeAsync(() => {
                testComponent.dateTimePicker?.open()
                fixture.detectChanges()
                flush()
                expect(testComponent.dateTimePicker?.isOpen)
                    .withContext('Expected dateTimePicker to be isOpen.')
                    .toBe(
                        true
                    )

                const containerDebugElement = fixture.debugElement.query(
                    By.directive(DateTimeContainerComponent)
                )
                containerElement = containerDebugElement.nativeElement

                const monthCell = containerElement.querySelector(
                    '[aria-label="January 2, 2020"]'
                );
                (monthCell as HTMLElement).click()
                fixture.detectChanges()

                const btns = containerElement.querySelectorAll(
                    '.nxt-dt-container-control-button'
                )
                dispatchMouseEvent(btns[0], 'click') // 'Cancel' button
                fixture.detectChanges()
                flush()

                expect(testComponent.dateTimePicker?.isOpen)
                    .withContext('Expected dateTimePicker to be closed.')
                    .toBe(
                        false
                    )
                expect(testComponent.dateTimePickerInput?.value).toEqual(
                    new Date(2020, 0, 1)
                ) // not update to clicked value
            }))

            it('should update input value to pickerMoment value and close popup panel when set button clicked', fakeAsync(() => {
                testComponent.dateTimePicker?.open()
                fixture.detectChanges()
                flush()
                expect(testComponent.dateTimePicker?.isOpen)
                    .withContext('Expected dateTimePicker to be isOpen.')
                    .toBe(
                        true
                    )

                const containerDebugElement = fixture.debugElement.query(
                    By.directive(DateTimeContainerComponent)
                )
                containerElement = containerDebugElement.nativeElement
                expect(
                    containerDebugElement.componentInstance.pickerMoment
                ).toEqual(new Date(2020, 0, 1))

                const btns = containerElement.querySelectorAll(
                    '.nxt-dt-container-control-button'
                )
                dispatchMouseEvent(btns[1], 'click') // 'Set' button
                fixture.detectChanges()
                flush()

                expect(testComponent.dateTimePicker?.isOpen)
                    .withContext('Expected dateTimePicker to be closed.')
                    .toBe(
                        false
                    )
                expect(testComponent.dateTimePickerInput?.value).toEqual(
                    new Date(2020, 0, 1)
                )
            }))

            it('should update input value to clicked date value and close popup panel when set button clicked', fakeAsync(() => {
                testComponent.dateTimePicker?.open()
                fixture.detectChanges()
                flush()
                expect(testComponent.dateTimePicker?.isOpen)
                    .withContext('Expected dateTimePicker to be isOpen.')
                    .toBe(
                        true
                    )

                const containerDebugElement = fixture.debugElement.query(
                    By.directive(DateTimeContainerComponent)
                )
                containerElement = containerDebugElement.nativeElement
                expect(
                    containerDebugElement.componentInstance.pickerMoment
                ).toEqual(new Date(2020, 0, 1))

                const monthCell = containerElement.querySelector(
                    '[aria-label="January 2, 2020"]'
                );
                (monthCell as HTMLElement).click()
                fixture.detectChanges()

                const btns = containerElement.querySelectorAll(
                    '.nxt-dt-container-control-button'
                )
                dispatchMouseEvent(btns[1], 'click') // 'Set' button
                fixture.detectChanges()
                flush()

                expect(testComponent.dateTimePicker?.isOpen)
                    .withContext('Expected dateTimePicker to be closed.')
                    .toBe(
                        false
                    )
                expect(testComponent.dateTimePickerInput?.value).toEqual(
                    new Date(2020, 0, 2)
                )
            }))

            it('should set startAt fallback to input value', () => {
                expect(testComponent.dateTimePicker?.startAt).toEqual(
                    new Date(2020, 0, 1)
                )
            })

            it('input should aria-owns nxt-date-time-container after isOpen in popup mode', fakeAsync(() => {
                const inputEl = fixture.debugElement.query(By.css('input'))
                    .nativeElement
                expect(inputEl.getAttribute('aria-owns')).toBeNull()

                testComponent.dateTimePicker?.open()
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                const ownedElementId = inputEl.getAttribute('aria-owns')
                expect(ownedElementId).not.toBeNull()

                const ownedElement = document.getElementById(ownedElementId)
                expect(ownedElement).not.toBeNull()
                expect((ownedElement as Element).tagName.toLowerCase()).toBe(
                    'nxt-date-time-container'
                )
            }))

            it('input should aria-owns nxt-date-time-container after isOpen in dialog mode', fakeAsync(() => {
                testComponent.pickerMode = 'dialog'
                fixture.detectChanges()

                const inputEl = fixture.debugElement.query(By.css('input'))
                    .nativeElement
                expect(inputEl.getAttribute('aria-owns')).toBeNull()

                testComponent.dateTimePicker?.open()
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                const ownedElementId = inputEl.getAttribute('aria-owns')
                expect(ownedElementId).not.toBeNull()

                const ownedElement = document.getElementById(ownedElementId)
                expect(ownedElement).not.toBeNull()
                expect((ownedElement as Element).tagName.toLowerCase()).toBe(
                    'nxt-date-time-container'
                )
            }))

            it('should close the picker popup panel using ALT + ArrowUp', fakeAsync(() => {
                testComponent.dateTimePicker?.open()
                fixture.detectChanges()
                flush()

                expect(testComponent.dateTimePicker?.isOpen).toBe(true)

                const event = createKeyboardEvent('keydown', 'ArrowUp')
                Object.defineProperty(event, 'altKey', { get: () => true })

                testComponent.dateTimePicker?.['popupRef']?.['_keyboardDispatcher']['_keydownListener'](event)
                fixture.detectChanges()
                flush()

                expect(testComponent.dateTimePicker?.isOpen).toBe(false)
            }))

            describe('with only calendar', () => {
                beforeEach(() => {
                    testComponent.pickerType = 'calendar'
                    fixture.detectChanges()
                })

                it('should initialize with correct value shown in input', () => {
                    if (SUPPORTS_INTL) {
                        expect(
                            fixture.nativeElement.querySelector('input').value
                        ).toBe('1/1/2020')
                    }
                })

                it('should NOT have any container control button', fakeAsync(() => {
                    testComponent.dateTimePicker?.open()
                    fixture.detectChanges()
                    flush()
                    expect(testComponent.dateTimePicker?.isOpen)
                        .withContext('Expected dateTimePicker to be isOpen.')
                        .toBe(
                            true
                        )

                    const containerDebugElement = fixture.debugElement.query(
                        By.directive(DateTimeContainerComponent)
                    )
                    containerElement = containerDebugElement.nativeElement
                    const btns = containerElement.querySelectorAll(
                        '.nxt-dt-container-control-button'
                    )

                    expect(btns.length).toBe(0)
                }))

                it('should update input value to clicked date value and close popup panel when date cell is clicked', fakeAsync(() => {
                    testComponent.dateTimePicker?.open()
                    fixture.detectChanges()
                    flush()
                    expect(testComponent.dateTimePicker?.isOpen)
                        .withContext('Expected dateTimePicker to be isOpen.')
                        .toBe(
                            true
                        )

                    const containerDebugElement = fixture.debugElement.query(
                        By.directive(DateTimeContainerComponent)
                    )
                    containerElement = containerDebugElement.nativeElement
                    expect(
                        containerDebugElement.componentInstance.pickerMoment
                    ).toEqual(new Date(2020, 0, 1))

                    const dateCell = containerElement.querySelector(
                        '[aria-label="January 2, 2020"]'
                    )
                    dispatchMouseEvent(dateCell!, 'click')
                    fixture.detectChanges()
                    flush()

                    expect(testComponent.dateTimePicker?.isOpen)
                        .withContext('Expected dateTimePicker to be closed.')
                        .toBe(
                            false
                        )
                    expect(testComponent.dateTimePickerInput?.value).toEqual(
                        new Date(2020, 0, 2)
                    )
                }))

                it('should update input value to clicked date value and close popup panel when date cell is clicked via pressing enter', fakeAsync(() => {
                    testComponent.dateTimePicker?.open()
                    fixture.detectChanges()
                    flush()
                    expect(testComponent.dateTimePicker?.isOpen)
                        .withContext('Expected dateTimePicker to be isOpen.')
                        .toBe(
                            true
                        )

                    const containerDebugElement = fixture.debugElement.query(
                        By.directive(DateTimeContainerComponent)
                    )
                    containerElement = containerDebugElement.nativeElement
                    expect(
                        containerDebugElement.componentInstance.pickerMoment
                    ).toEqual(new Date(2020, 0, 1))

                    const calendarBodyEl = containerElement.querySelector(
                        '.nxt-dt-calendar-body'
                    )

                    dispatchKeyboardEvent(
                        calendarBodyEl!,
                        'keydown',
                        'ArrowRight'
                    )
                    fixture.detectChanges()
                    flush()
                    dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'Enter')
                    fixture.detectChanges()
                    flush()

                    expect(testComponent.dateTimePicker?.isOpen)
                        .withContext('Expected dateTimePicker to be closed.')
                        .toBe(
                            false
                        )
                    expect(testComponent.dateTimePickerInput?.value).toEqual(
                        new Date(2020, 0, 2)
                    )
                }))

                it('should close popup panel when click on the selected date', fakeAsync(() => {
                    testComponent.dateTimePicker?.open()
                    fixture.detectChanges()
                    flush()
                    expect(testComponent.dateTimePicker?.isOpen)
                        .withContext('Expected dateTimePicker to be isOpen.')
                        .toBe(
                            true
                        )

                    const containerDebugElement = fixture.debugElement.query(
                        By.directive(DateTimeContainerComponent)
                    )
                    containerElement = containerDebugElement.nativeElement
                    expect(
                        containerDebugElement.componentInstance.pickerMoment
                    ).toEqual(new Date(2020, 0, 1))
                    expect(testComponent.dateTimePicker?.selected).toEqual(
                        new Date(2020, 0, 1)
                    )

                    const dateCell = containerElement.querySelector(
                        '[aria-label="January 1, 2020"]'
                    )
                    dispatchMouseEvent(dateCell!, 'click')
                    fixture.detectChanges()
                    flush()

                    expect(testComponent.dateTimePicker?.isOpen)
                        .withContext('Expected dateTimePicker to be closed.')
                        .toBe(
                            false
                        )
                    expect(testComponent.dateTimePickerInput?.value).toEqual(
                        new Date(2020, 0, 1)
                    )
                }))
            })

            describe('with only timer', () => {
                beforeEach(() => {
                    testComponent.pickerType = 'timer'
                    fixture.detectChanges()
                })

                it('should initialize with correct value shown in input', () => {
                    if (SUPPORTS_INTL) {
                        expect(
                            fixture.nativeElement.querySelector('input').value
                        ).toBe('12:00 AM')
                    }
                })

                it('should have container control buttons', fakeAsync(() => {
                    testComponent.dateTimePicker?.open()
                    fixture.detectChanges()
                    flush()
                    expect(testComponent.dateTimePicker?.isOpen)
                        .withContext('Expected dateTimePicker to be isOpen.')
                        .toBe(
                            true
                        )

                    const containerDebugElement = fixture.debugElement.query(
                        By.directive(DateTimeContainerComponent)
                    )
                    containerElement = containerDebugElement.nativeElement
                    const btns = containerElement.querySelectorAll(
                        '.nxt-dt-container-control-button'
                    )

                    expect(btns.length).toBe(2)
                }))
            })
        })

        describe('range DateTimePicker', () => {
            let fixture: ComponentFixture<RangeDateTimePicker>
            let testComponent: RangeDateTimePicker
            let containerElement: HTMLElement

            beforeEach(fakeAsync(() => {
                fixture = createComponent(RangeDateTimePicker, provideTestDateTimeAdapter())
                fixture.detectChanges()
                testComponent = fixture.componentInstance
            }))

            afterEach(fakeAsync(() => {
                testComponent.dateTimePicker?.close()
                fixture.detectChanges()
                flush()
            }))

            it('should initialize with correct value shown in input', () => {
                if (SUPPORTS_INTL) {
                    expect(
                        fixture.nativeElement.querySelector('input').value
                    ).toBe('1/1/2020, 12:00 AM ~ 2/1/2020, 12:00 AM')
                }
            })

            it('should have default activeSelectedIndex value as 0', () => {
                testComponent.dateTimePicker?.open()
                fixture.detectChanges()

                const containerDebugElement = fixture.debugElement.query(
                    By.directive(DateTimeContainerComponent)
                )
                expect(
                    containerDebugElement.componentInstance.activeSelectedIndex
                ).toBe(0)
            })

            it('clicking the dateCell should set the rangeFrom value when both rangeFrom and rangeTo had NO value', fakeAsync(() => {
                testComponent.dates = []
                fixture.detectChanges()

                testComponent.dateTimePicker?.open()
                fixture.detectChanges()
                flush()

                expect(testComponent.dateTimePicker?.selecteds.length).toBe(0)

                const containerDebugElement = fixture.debugElement.query(
                    By.directive(DateTimeContainerComponent)
                )
                containerElement = containerDebugElement.nativeElement

                const dateCell = containerElement.querySelector(
                    '[aria-label="January 2, 2020"]'
                )
                dispatchMouseEvent(dateCell!, 'click')
                fixture.detectChanges()
                flush()

                expect(
                    containerDebugElement.componentInstance.activeSelectedIndex
                ).toBe(0)
                expect(testComponent.dateTimePicker?.selecteds.length).toBe(2)
                expect(testComponent.dateTimePicker!.selecteds![0]).toEqual(
                    new Date(2020, 0, 2)
                )
                expect(testComponent.dateTimePicker!.selecteds![1]).toBe(undefined)
            }))

            it('clicking the dateCell should set the rangeFrom value when both rangeFrom and rangeTo already had value', fakeAsync(() => {
                testComponent.dateTimePicker?.open()
                fixture.detectChanges()
                flush()

                expect(testComponent.dateTimePicker?.selecteds.length).toBe(2)

                const containerDebugElement = fixture.debugElement.query(
                    By.directive(DateTimeContainerComponent)
                )
                containerElement = containerDebugElement.nativeElement

                const dateCell = containerElement.querySelector(
                    '[aria-label="January 2, 2020"]'
                )
                dispatchMouseEvent(dateCell!, 'click')
                fixture.detectChanges()
                flush()

                expect(
                    containerDebugElement.componentInstance.activeSelectedIndex
                ).toBe(0)
                expect(testComponent.dateTimePicker?.selecteds.length).toBe(2)
                expect(testComponent.dateTimePicker!.selecteds![0]).toEqual(
                    new Date(2020, 0, 2)
                )
                expect(testComponent.dateTimePicker!.selecteds![1]).toBe(undefined)
            }))

            it('clicking the dateCell should set the rangeFrom value when dateCell value is before the old rangeFrom value', fakeAsync(() => {
                testComponent.dates = [new Date(2020, 0, 2), undefined]
                fixture.detectChanges()

                testComponent.dateTimePicker?.open()
                fixture.detectChanges()
                flush()

                expect(testComponent.dateTimePicker?.selecteds.length).toBe(2)

                const containerDebugElement = fixture.debugElement.query(
                    By.directive(DateTimeContainerComponent)
                )
                containerElement = containerDebugElement.nativeElement

                const dateCell = containerElement.querySelector(
                    '[aria-label="January 1, 2020"]'
                )
                dispatchMouseEvent(dateCell!, 'click')
                fixture.detectChanges()
                flush()

                expect(
                    containerDebugElement.componentInstance.activeSelectedIndex
                ).toBe(0)
                expect(testComponent.dateTimePicker?.selecteds.length).toBe(2)
                expect(testComponent.dateTimePicker!.selecteds![0]).toEqual(
                    new Date(2020, 0, 1)
                )
                expect(testComponent.dateTimePicker!.selecteds![1]).toBe(undefined)
            }))

            it('clicking the dateCell should set the rangeTo value when rangeFrom already had value', fakeAsync(() => {
                testComponent.dates = [new Date(2020, 0, 2), undefined]
                fixture.detectChanges()

                testComponent.dateTimePicker?.open()
                fixture.detectChanges()
                flush()

                expect(testComponent.dateTimePicker?.selecteds.length).toBe(2)

                const containerDebugElement = fixture.debugElement.query(
                    By.directive(DateTimeContainerComponent)
                )
                containerElement = containerDebugElement.nativeElement

                const dateCell = containerElement.querySelector(
                    '[aria-label="January 3, 2020"]'
                )
                dispatchMouseEvent(dateCell!, 'click')
                fixture.detectChanges()
                flush()

                expect(
                    containerDebugElement.componentInstance.activeSelectedIndex
                ).toBe(1)
                expect(testComponent.dateTimePicker?.selecteds.length).toBe(2)
                expect(testComponent.dateTimePicker!.selecteds![0]).toEqual(
                    new Date(2020, 0, 2)
                )
                expect(testComponent.dateTimePicker!.selecteds![1]).toEqual(
                    new Date(2020, 0, 3)
                )
            }))

            it('should have the container info row', () => {
                testComponent.dateTimePicker?.open()
                fixture.detectChanges()

                const containerDebugElement = fixture.debugElement.query(
                    By.directive(DateTimeContainerComponent)
                )
                containerElement = containerDebugElement.nativeElement

                const infoRow = containerElement.querySelector(
                    '.nxt-dt-container-info'
                )

                expect(infoRow).toBeTruthy()
            })

            it('should set the activeSelectedIndex via clicking the info row radio', fakeAsync(() => {
                testComponent.dateTimePicker?.open()
                fixture.detectChanges()

                const containerDebugElement = fixture.debugElement.query(
                    By.directive(DateTimeContainerComponent)
                )
                containerElement = containerDebugElement.nativeElement

                const radioBtns = containerElement.querySelectorAll(
                    '.nxt-dt-container-range'
                )

                for (let i = 0; i < radioBtns.length; i++) {
                    dispatchMouseEvent(radioBtns[i], 'click')
                    fixture.detectChanges()
                    flush()

                    expect(
                        containerDebugElement.componentInstance
                            .activeSelectedIndex
                    ).toBe(i)
                }
            }))

            describe('with only calendar', () => {
                beforeEach(() => {
                    testComponent.pickerType = 'calendar'
                    fixture.detectChanges()
                })

                it('should initialize with correct value shown in input', () => {
                    if (SUPPORTS_INTL) {
                        expect(
                            fixture.nativeElement.querySelector('input').value
                        ).toBe('1/1/2020 ~ 2/1/2020')
                    }
                })

                it('should NOT close the dateTimePicker popup panel when only the rangeFrom value is selected', fakeAsync(() => {
                    testComponent.dates = []
                    fixture.detectChanges()

                    testComponent.dateTimePicker?.open()
                    fixture.detectChanges()
                    flush()

                    expect(testComponent.dateTimePicker?.selecteds.length).toBe(
                        0
                    )

                    const containerDebugElement = fixture.debugElement.query(
                        By.directive(DateTimeContainerComponent)
                    )
                    containerElement = containerDebugElement.nativeElement

                    const dateCell = containerElement.querySelector(
                        '[aria-label="January 2, 2020"]'
                    )
                    dispatchMouseEvent(dateCell!, 'click')
                    fixture.detectChanges()
                    flush()

                    expect(testComponent.dateTimePicker?.isOpen)
                        .withContext('Expected dateTimePicker to be isOpen.')
                        .toBe(
                            true
                        )
                }))

                it('should close the dateTimePicker popup panel when both the rangeFrom and the rangeTo value are selected', fakeAsync(() => {
                    testComponent.dates = []
                    fixture.detectChanges()

                    testComponent.dateTimePicker?.open()
                    fixture.detectChanges()
                    flush()

                    expect(testComponent.dateTimePicker?.selecteds.length).toBe(
                        0
                    )

                    const containerDebugElement = fixture.debugElement.query(
                        By.directive(DateTimeContainerComponent)
                    )
                    containerElement = containerDebugElement.nativeElement

                    let dateCell = containerElement.querySelector(
                        '[aria-label="January 2, 2020"]'
                    )
                    dispatchMouseEvent(dateCell!, 'click')
                    fixture.detectChanges()
                    flush()

                    dateCell = containerElement.querySelector(
                        '[aria-label="January 3, 2020"]'
                    )
                    dispatchMouseEvent(dateCell!, 'click')
                    fixture.detectChanges()
                    flush()

                    expect(testComponent.dateTimePicker?.selecteds.length).toBe(
                        2
                    )
                    expect(testComponent.dateTimePicker?.isOpen)
                        .withContext('Expected dateTimePicker to be closed.')
                        .toBe(
                            false
                        )
                }))
            })
        })

        describe('DateTimePicker with too many inputs', () => {
            it('should throw when multiple inputs registered', fakeAsync(() => {
                const fixture = createComponent(MultiInputDateTimePicker, provideTestDateTimeAdapter())
                expect(() => fixture.detectChanges()).toThrow()
            }))
        })

        describe('DateTimePicker with no input', () => {
            let fixture: ComponentFixture<NoInputDateTimePicker>
            let testComponent: NoInputDateTimePicker

            beforeEach(fakeAsync(() => {
                fixture = createComponent(NoInputDateTimePicker, provideTestDateTimeAdapter())
                fixture.detectChanges()

                testComponent = fixture.componentInstance
            }))

            afterEach(fakeAsync(() => {
                testComponent.dateTimePicker?.close()
                fixture.detectChanges()
            }))

            it('should NOT throw when accessing disabled property', () => {
                expect(
                    () => testComponent.dateTimePicker?.disabled
                ).not.toThrow()
            })

            it('should throw when isOpen with no registered inputs', fakeAsync(() => {
                expect(() => testComponent.dateTimePicker?.open()).toThrow()
            }))
        })

        describe('DateTimePicker with startAt', () => {
            let fixture: ComponentFixture<DateTimePickerWithStartAt>
            let testComponent: DateTimePickerWithStartAt

            beforeEach(fakeAsync(() => {
                fixture = createComponent(DateTimePickerWithStartAt, provideTestDateTimeAdapter())
                fixture.detectChanges()

                testComponent = fixture.componentInstance
            }))

            afterEach(fakeAsync(() => {
                testComponent.dateTimePicker?.close()
                fixture.detectChanges()
            }))

            it('should override input value by explicit startAt', () => {
                expect(testComponent.dateTimePicker?.startAt).toEqual(
                    new Date(2010, 0, 1)
                )
            })
        })

        describe('DateTimePicker with startView', () => {
            let fixture: ComponentFixture<DateTimePickerWithStartView>
            let testComponent: DateTimePickerWithStartView
            let containerDebugElement
            let containerElement

            beforeEach(async () => {
                fixture = createComponent(DateTimePickerWithStartView, provideTestDateTimeAdapter())
                fixture.detectChanges()

                testComponent = fixture.componentInstance
            })

            afterEach(() => {
                testComponent.dateTimePicker?.close()
                fixture.detectChanges()
            })

            describe('set to year', () => {
                beforeEach(() => {
                    testComponent.startView = 'year'
                    fixture.detectChanges()
                })

                it('should start at the year view', () => {
                    testComponent.dateTimePicker?.open()
                    fixture.detectChanges()

                    containerDebugElement = fixture.debugElement.query(
                        By.directive(DateTimeContainerComponent)
                    )
                    containerElement = containerDebugElement.nativeElement
                    const yearTable = containerElement.querySelector(
                        'table.nxt-dt-calendar-year-table'
                    )
                    expect(yearTable).toBeTruthy()
                })

                it('should fire monthSelected when user selects calendar month in year view', fakeAsync(() => {
                    spyOn(testComponent, 'onMonthSelection')
                    expect(
                        testComponent.onMonthSelection
                    ).not.toHaveBeenCalled()

                    testComponent.dateTimePicker?.open()
                    fixture.detectChanges()

                    containerDebugElement = fixture.debugElement.query(
                        By.directive(DateTimeContainerComponent)
                    )
                    containerElement = containerDebugElement.nativeElement
                    const cells = containerElement.querySelectorAll(
                        '.nxt-dt-calendar-cell'
                    )

                    dispatchMouseEvent(cells[0], 'click')
                    fixture.detectChanges()
                    flush()

                    expect(testComponent.onMonthSelection).toHaveBeenCalled()
                }))
            })

            describe('set to multi-years', () => {
                beforeEach(() => {
                    testComponent.startView = 'multi-years'
                    fixture.detectChanges()
                })

                it('should start at the multi-years view', () => {
                    testComponent.dateTimePicker?.open()
                    fixture.detectChanges()

                    containerDebugElement = fixture.debugElement.query(
                        By.directive(DateTimeContainerComponent)
                    )
                    containerElement = containerDebugElement.nativeElement
                    const multiYearTable = containerElement.querySelector(
                        'table.nxt-dt-calendar-multi-year-table'
                    )
                    expect(multiYearTable).toBeTruthy()
                })

                it('should fire yearSelected when user selects calendar year in multi-years view', fakeAsync(() => {
                    spyOn(testComponent, 'onYearSelection')
                    expect(
                        testComponent.onYearSelection
                    ).not.toHaveBeenCalled()

                    testComponent.dateTimePicker?.open()
                    fixture.detectChanges()

                    containerDebugElement = fixture.debugElement.query(
                        By.directive(DateTimeContainerComponent)
                    )
                    containerElement = containerDebugElement.nativeElement
                    const cells = containerElement.querySelectorAll(
                        '.nxt-dt-calendar-cell'
                    )

                    dispatchMouseEvent(cells[0], 'click')
                    fixture.detectChanges()
                    flush()

                    expect(testComponent.onYearSelection).toHaveBeenCalled()
                }))
            })
        })

        describe('DateTimePicker with NgModel', () => {
            let fixture: ComponentFixture<DateTimePickerWithNgModel>
            let testComponent: DateTimePickerWithNgModel

            beforeEach(fakeAsync(async () => {
                fixture = createComponent(DateTimePickerWithNgModel, provideTestDateTimeAdapter())
                fixture.detectChanges()
                await fixture.whenStable().then(() => {
                    fixture.detectChanges()

                    testComponent = fixture.componentInstance
                })
            }))

            afterEach(fakeAsync(() => {
                testComponent.dateTimePicker?.close()
                fixture.detectChanges()
                flush()
            }))

            it('should update dateTimePicker when model changes', fakeAsync(() => {
                expect(testComponent.dateTimePickerInput?.value).toBeUndefined()
                expect(testComponent.dateTimePicker?.selected).toBeUndefined()

                const selected = new Date(2017, 0, 1)
                testComponent.moment = selected
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                expect(testComponent.dateTimePickerInput?.value).toEqual(
                    selected
                )
                expect(testComponent.dateTimePicker?.selected).toEqual(selected)
            }))

            it('should update model when date is selected', fakeAsync(() => {
                expect(testComponent.moment).toBeUndefined()
                expect(testComponent.dateTimePickerInput?.value).toBeUndefined()

                const selected = new Date(2017, 0, 1)
                testComponent.dateTimePicker?.select(selected)
                fixture.detectChanges()
                flush()
                testComponent.dateTimePicker?.confirmSelect()
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                expect(testComponent.moment).toEqual(selected)
                expect(testComponent.dateTimePickerInput?.value).toEqual(
                    selected
                )
            }))

            it('should mark input dirty after input event', () => {
                const inputEl = fixture.debugElement.query(By.css('input'))
                    .nativeElement

                expect(inputEl.classList).toContain('ng-pristine')

                inputEl.value = '2001-01-01'
                dispatchFakeEvent(inputEl, 'input')
                fixture.detectChanges()

                expect(inputEl.classList).toContain('ng-dirty')
            })

            it('should mark input dirty after date selected', fakeAsync(() => {
                const inputEl = fixture.debugElement.query(By.css('input'))
                    .nativeElement

                expect(inputEl.classList).toContain('ng-pristine')

                testComponent.dateTimePicker?.select(new Date(2017, 0, 1))
                fixture.detectChanges()
                flush()
                testComponent.dateTimePicker?.confirmSelect()
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                expect(inputEl.classList).toContain('ng-dirty')
            }))

            it('should not mark dirty after model change', fakeAsync(() => {
                const inputEl = fixture.debugElement.query(By.css('input'))
                    .nativeElement

                expect(inputEl.classList).toContain('ng-pristine')

                testComponent.moment = new Date(2017, 0, 1)
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                expect(inputEl.classList).toContain('ng-pristine')
            }))

            it('should mark input touched on blur', () => {
                const inputEl = fixture.debugElement.query(By.css('input'))
                    .nativeElement

                expect(inputEl.classList).toContain('ng-untouched')

                dispatchFakeEvent(inputEl, 'focus')
                fixture.detectChanges()

                expect(inputEl.classList).toContain('ng-untouched')

                dispatchFakeEvent(inputEl, 'blur')
                fixture.detectChanges()

                expect(inputEl.classList).toContain('ng-touched')
            })

            it('should not reformat invalid dates on blur', () => {
                const inputEl = fixture.debugElement.query(By.css('input'))
                    .nativeElement

                inputEl.value = 'very-valid-date'
                dispatchFakeEvent(inputEl, 'input')
                fixture.detectChanges()

                dispatchFakeEvent(inputEl, 'blur')
                fixture.detectChanges()

                expect(inputEl.value).toBe('very-valid-date')
            })

            it('should mark input touched on calendar selection', fakeAsync(() => {
                const inputEl = fixture.debugElement.query(By.css('input'))
                    .nativeElement

                expect(inputEl.classList).toContain('ng-untouched')

                testComponent.dateTimePicker?.select(new Date(2017, 0, 1))
                fixture.detectChanges()
                flush()
                testComponent.dateTimePicker?.confirmSelect()
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                expect(inputEl.classList).toContain('ng-touched')
            }))

            describe('with range mode', () => {
                beforeEach(() => {
                    testComponent.selectMode = 'range'
                    fixture.detectChanges()
                    expect(testComponent.dateTimePicker?.selectMode).toBe(
                        'range'
                    )
                })

                it('should update dateTimePicker when model changes', fakeAsync(() => {
                    expect(
                        testComponent.dateTimePickerInput?.values.length
                    ).toBe(0)
                    expect(testComponent.dateTimePicker?.selecteds.length).toBe(
                        0
                    )

                    const from = new Date(2017, 0, 1)
                    const to = new Date(2017, 0, 3)
                    testComponent.moment = [from, to]
                    fixture.detectChanges()
                    flush()
                    fixture.detectChanges()

                    expect(
                        testComponent.dateTimePickerInput?.values.length
                    ).toBe(2)
                    expect(testComponent.dateTimePickerInput!.values[0]).toEqual(
                        from
                    )
                    expect(testComponent.dateTimePickerInput!.values[1]).toEqual(
                        to
                    )
                    expect(testComponent.dateTimePicker?.selecteds.length).toBe(
                        2
                    )
                    expect(testComponent.dateTimePicker!.selecteds![0]).toEqual(
                        from
                    )
                    expect(testComponent.dateTimePicker!.selecteds![1]).toEqual(
                        to
                    )
                }))

                it('should update model when date is selected', fakeAsync(() => {
                    expect(testComponent.moment).toBeUndefined()
                    expect(
                        testComponent.dateTimePickerInput?.values.length
                    ).toBe(0)

                    const from = new Date(2017, 0, 1)
                    const to = new Date(2017, 0, 3)
                    testComponent.dateTimePicker?.select([from, to])
                    fixture.detectChanges()
                    flush()
                    testComponent.dateTimePicker?.confirmSelect()
                    fixture.detectChanges()
                    flush()
                    fixture.detectChanges()

                    expect(Array.isArray(testComponent.moment)).toBeTrue()
                    if (Array.isArray(testComponent.moment)) {
                        expect(testComponent.moment[0]).toEqual(from)
                        expect(testComponent.moment[1]).toEqual(to)
                    }
                    expect(
                        testComponent.dateTimePickerInput?.values.length
                    ).toBe(2)
                    expect(testComponent.dateTimePickerInput?.values[0]).toEqual(
                        from
                    )
                    expect(testComponent.dateTimePickerInput?.values[1]).toEqual(
                        to
                    )
                }))
            })

            describe('with rangeFrom mode', () => {
                beforeEach(() => {
                    testComponent.selectMode = 'rangeFrom'
                    fixture.detectChanges()
                    expect(testComponent.dateTimePicker?.selectMode).toBe(
                        'rangeFrom'
                    )
                })

                it('should update dateTimePicker when model changes', fakeAsync(() => {
                    expect(
                        testComponent.dateTimePickerInput?.values.length
                    ).toBe(0)
                    expect(testComponent.dateTimePicker?.selecteds.length).toBe(
                        0
                    )

                    const from = new Date(2017, 0, 1)
                    testComponent.moment = [from]
                    fixture.detectChanges()
                    flush()
                    fixture.detectChanges()

                    expect(testComponent.dateTimePickerInput?.values[0]).toEqual(
                        from
                    )
                    expect(
                        testComponent.dateTimePickerInput?.values[1]
                    ).toBeFalsy()
                    expect(testComponent.dateTimePicker?.selecteds[0]).toEqual(
                        from
                    )
                    expect(
                        testComponent.dateTimePicker?.selecteds[1]
                    ).toBeFalsy()
                }))

                it('should only update fromValue when date is selected', fakeAsync(() => {
                    const from = new Date(2017, 0, 1)
                    const to = new Date(2017, 0, 3)
                    testComponent.moment = [from, to]
                    fixture.detectChanges()
                    flush()
                    fixture.detectChanges()

                    testComponent.dateTimePicker?.open()
                    fixture.detectChanges()
                    flush()

                    const newSelectedFrom = new Date(2017, 0, 2)
                    const containerDebugElement = fixture.debugElement.query(
                        By.directive(DateTimeContainerComponent)
                    )
                    containerDebugElement.componentInstance.dateSelected(
                        newSelectedFrom
                    )
                    fixture.detectChanges()
                    flush()
                    testComponent.dateTimePicker?.confirmSelect()
                    fixture.detectChanges()
                    flush()
                    fixture.detectChanges()

                    expect(testComponent.dateTimePicker?.selecteds[0]).toEqual(
                        newSelectedFrom
                    )
                    expect(testComponent.dateTimePicker?.selecteds[1]).toEqual(
                        to
                    )
                    expect(testComponent.dateTimePickerInput?.values[0]).toEqual(
                        newSelectedFrom
                    )
                    expect(testComponent.dateTimePickerInput?.values[1]).toEqual(
                        to
                    )
                    expect(testComponent.moment[0]).toEqual(newSelectedFrom)
                    expect(testComponent.moment[1]).toEqual(to)
                }))

                it('should update fromValue and set toValue to null when date is selected after toValue', fakeAsync(() => {
                    const from = new Date(2017, 0, 1)
                    const to = new Date(2017, 0, 3)
                    testComponent.moment = [from, to]
                    fixture.detectChanges()
                    flush()
                    fixture.detectChanges()

                    testComponent.dateTimePicker?.open()
                    fixture.detectChanges()
                    flush()

                    const newSelectedFrom = new Date(2017, 0, 4)
                    const containerDebugElement = fixture.debugElement.query(
                        By.directive(DateTimeContainerComponent)
                    )
                    containerDebugElement.componentInstance.dateSelected(
                        newSelectedFrom
                    )
                    fixture.detectChanges()
                    flush()
                    testComponent.dateTimePicker?.confirmSelect()
                    fixture.detectChanges()
                    flush()
                    fixture.detectChanges()

                    expect(testComponent.dateTimePicker?.selecteds[0]).toEqual(
                        newSelectedFrom
                    )
                    expect(
                        testComponent.dateTimePicker?.selecteds[1]
                    ).toBeFalsy()
                    expect(testComponent.dateTimePickerInput?.values[0]).toEqual(
                        newSelectedFrom
                    )
                    expect(
                        testComponent.dateTimePickerInput?.values[1]
                    ).toBeFalsy()
                    expect(testComponent.moment[0]).toEqual(newSelectedFrom)
                    expect(testComponent.moment[1]).toBeFalsy()
                }))
            })

            describe('with rangeTo mode', () => {
                beforeEach(() => {
                    testComponent.selectMode = 'rangeTo'
                    fixture.detectChanges()
                    expect(testComponent.dateTimePicker?.selectMode).toBe(
                        'rangeTo'
                    )
                })

                it('should update dateTimePicker when model changes', fakeAsync(() => {
                    expect(
                        testComponent.dateTimePickerInput?.values.length
                    ).toBe(0)
                    expect(testComponent.dateTimePicker?.selecteds.length).toBe(
                        0
                    )

                    const to = new Date(2017, 0, 3)
                    testComponent.moment = [undefined, to]
                    fixture.detectChanges()
                    flush()
                    fixture.detectChanges()

                    expect(
                        testComponent.dateTimePickerInput?.values[0]
                    ).toBeFalsy()
                    expect(testComponent.dateTimePickerInput?.values[1]).toEqual(
                        to
                    )
                    expect(
                        testComponent.dateTimePicker?.selecteds[0]
                    ).toBeFalsy()
                    expect(testComponent.dateTimePicker?.selecteds[1]).toEqual(
                        to
                    )
                }))

                it('should only update toValue when date is selected', fakeAsync(() => {
                    const from = new Date(2017, 0, 1)
                    const to = new Date(2017, 0, 3)
                    testComponent.moment = [from, to]
                    fixture.detectChanges()
                    flush()
                    fixture.detectChanges()

                    testComponent.dateTimePicker?.open()
                    fixture.detectChanges()
                    flush()

                    const newSelectedTo = new Date(2017, 0, 4)
                    const containerDebugElement = fixture.debugElement.query(
                        By.directive(DateTimeContainerComponent)
                    )
                    containerDebugElement.componentInstance.dateSelected(
                        newSelectedTo
                    )
                    fixture.detectChanges()
                    flush()
                    testComponent.dateTimePicker?.confirmSelect()
                    fixture.detectChanges()
                    flush()
                    fixture.detectChanges()

                    expect(testComponent.dateTimePicker?.selecteds[0]).toEqual(
                        from
                    )
                    expect(testComponent.dateTimePicker?.selecteds[1]).toEqual(
                        newSelectedTo
                    )
                    expect(testComponent.dateTimePickerInput?.values[0]).toEqual(
                        from
                    )
                    expect(testComponent.dateTimePickerInput?.values[1]).toEqual(
                        newSelectedTo
                    )
                    expect(testComponent.moment[0]).toEqual(from)
                    expect(testComponent.moment[1]).toEqual(newSelectedTo)
                }))

                it('should update toValue and set fromValue to null when date is selected before fromValue', fakeAsync(() => {
                    const from = new Date(2017, 0, 2)
                    const to = new Date(2017, 0, 3)
                    testComponent.moment = [from, to]
                    fixture.detectChanges()
                    flush()
                    fixture.detectChanges()

                    testComponent.dateTimePicker?.open()
                    fixture.detectChanges()
                    flush()

                    const newSelectedTo = new Date(2017, 0, 1)
                    const containerDebugElement = fixture.debugElement.query(
                        By.directive(DateTimeContainerComponent)
                    )
                    containerDebugElement.componentInstance.dateSelected(
                        newSelectedTo
                    )
                    fixture.detectChanges()
                    flush()
                    testComponent.dateTimePicker?.confirmSelect()
                    fixture.detectChanges()
                    flush()
                    fixture.detectChanges()

                    expect(
                        testComponent.dateTimePicker?.selecteds[0]
                    ).toBeFalsy()
                    expect(testComponent.dateTimePicker?.selecteds[1]).toEqual(
                        newSelectedTo
                    )
                    expect(
                        testComponent.dateTimePickerInput?.values[0]
                    ).toBeFalsy()
                    expect(testComponent.dateTimePickerInput?.values[1]).toEqual(
                        newSelectedTo
                    )
                    expect(testComponent.moment[0]).toBeFalsy()
                    expect(testComponent.moment[1]).toEqual(newSelectedTo)
                }))
            })
        })

        describe('DateTimePicker with FormControl', () => {
            let fixture: ComponentFixture<DateTimePickerWithFormControl>
            let testComponent: DateTimePickerWithFormControl

            beforeEach(fakeAsync(() => {
                fixture = createComponent(DateTimePickerWithFormControl, provideTestDateTimeAdapter())
                fixture.detectChanges()

                testComponent = fixture.componentInstance
            }))

            afterEach(fakeAsync(() => {
                testComponent.dateTimePicker?.close()
                fixture.detectChanges()
            }))

            it('should update dateTimePicker when formControl changes', () => {
                expect(testComponent.dateTimePickerInput?.value).toBeUndefined()
                expect(testComponent.dateTimePicker?.selected).toBeUndefined()

                const selected = new Date(2017, 0, 1)
                testComponent.formControl.setValue(selected)
                fixture.detectChanges()

                expect(testComponent.dateTimePickerInput?.value).toEqual(
                    selected
                )
                expect(testComponent.dateTimePicker?.selected).toEqual(selected)
            })

            it('should update formControl when date is selected', fakeAsync(() => {
                expect(testComponent.formControl.value).toBeNull()
                expect(testComponent.dateTimePickerInput?.value).toBeUndefined()

                const selected = new Date(2017, 0, 1)
                testComponent.dateTimePicker?.select(selected)
                fixture.detectChanges()
                flush()
                testComponent.dateTimePicker?.confirmSelect()
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                expect(testComponent.formControl.value).toEqual(selected)
                expect(testComponent.dateTimePickerInput?.value).toEqual(
                    selected
                )
            }))

            it('should disable input when form control disabled', () => {
                const inputEl = fixture.debugElement.query(By.css('input'))
                    .nativeElement

                expect(inputEl.disabled).toBe(false)

                testComponent.formControl.disable()
                fixture.detectChanges()

                expect(inputEl.disabled).toBe(true)
            })

            it('should disable toggle when form control disabled', () => {
                expect(testComponent.dateTimePickerToggle?.disabled).toBe(false)

                testComponent.formControl.disable()
                fixture.detectChanges()

                expect(testComponent.dateTimePickerToggle?.disabled).toBe(true)
            })
        })

        describe('DateTimePicker with nxtDateTimeTrigger', () => {
            let fixture: ComponentFixture<DateTimePickerWithTrigger>
            let testComponent: DateTimePickerWithTrigger

            beforeEach(fakeAsync(() => {
                fixture = createComponent(DateTimePickerWithTrigger, provideTestDateTimeAdapter())
                fixture.detectChanges()

                testComponent = fixture.componentInstance
            }))

            afterEach(fakeAsync(() => {
                testComponent.dateTimePicker?.close()
                fixture.detectChanges()
                flush()
            }))

            it('should open the picker when trigger clicked', () => {
                expect(
                    document.querySelector('nxt-date-time-container')
                ).toBeNull()

                const toggle = fixture.debugElement.query(By.css('button'))
                dispatchMouseEvent(toggle.nativeElement, 'click')
                fixture.detectChanges()

                expect(
                    document.querySelector('nxt-date-time-container')
                ).not.toBeNull()
            })

            it('should not open the picker when trigger clicked if dateTimePicker is disabled', () => {
                testComponent.dateTimePicker!.disabled = true
                fixture.detectChanges()
                const toggle = fixture.debugElement.query(By.css('button'))
                    .nativeElement

                expect(toggle.classList).toContain('nxt-dt-trigger-disabled')
                expect(
                    document.querySelector('nxt-date-time-container')
                ).toBeNull()

                dispatchMouseEvent(toggle, 'click')
                fixture.detectChanges()

                expect(
                    document.querySelector('nxt-date-time-container')
                ).toBeNull()
            })

            it('should not open the picker when trigger clicked if input is disabled', () => {
                expect(testComponent.dateTimePicker?.disabled).toBe(false)

                testComponent.dateTimePickerInput!.disabled = true
                fixture.detectChanges()
                const toggle = fixture.debugElement.query(By.css('button'))
                    .nativeElement

                expect(toggle.classList).toContain('nxt-dt-trigger-disabled')
                expect(
                    document.querySelector('nxt-date-time-container')
                ).toBeNull()

                dispatchMouseEvent(toggle, 'click')
                fixture.detectChanges()

                expect(
                    document.querySelector('nxt-date-time-container')
                ).toBeNull()
            })
        })

        describe('DateTimePicker with min and max validation', () => {
            let fixture: ComponentFixture<
                DateTimePickerWithMinAndMaxValidation
            >
            let testComponent: DateTimePickerWithMinAndMaxValidation
            let minMoment: Date | undefined
            let maxMoment: Date | undefined

            beforeEach(fakeAsync(() => {
                fixture = createComponent(
                    DateTimePickerWithMinAndMaxValidation, provideTestDateTimeAdapter()
                )
                fixture.detectChanges()

                testComponent = fixture.componentInstance

                minMoment = new Date(2010, 0, 1, 0, 30, 30)
                maxMoment = new Date(2020, 0, 1, 23, 30, 30)
                testComponent.min = minMoment
                testComponent.max = maxMoment
                fixture.detectChanges()
            }))

            afterEach(fakeAsync(() => {
                testComponent.dateTimePicker?.close()
                fixture.detectChanges()
                flush()
            }))

            it('should use min and max dates specified by the input', () => {
                expect(testComponent.dateTimePicker?.min).toEqual(
                    minMoment
                )
                expect(testComponent.dateTimePicker?.max).toEqual(
                    maxMoment
                )
            })

            it('should mark invalid when value is before minMoment', fakeAsync(() => {
                testComponent.date = new Date(2009, 11, 31)
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                expect(
                    fixture.debugElement.query(By.css('input')).nativeElement
                        .classList
                ).toContain('ng-invalid')
            }))

            it('should mark invalid when value is after maxMoment', fakeAsync(() => {
                testComponent.date = new Date(2020, 0, 2)
                fixture.detectChanges()
                flush()

                fixture.detectChanges()

                expect(
                    fixture.debugElement.query(By.css('input')).nativeElement
                        .classList
                ).toContain('ng-invalid')
            }))

            it('should not mark invalid when value equals minMoment', fakeAsync(() => {
                testComponent.date = new Date(minMoment!)
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                expect(
                    fixture.debugElement.query(By.css('input')).nativeElement
                        .classList
                ).not.toContain('ng-invalid')
            }))

            it('should not mark invalid when value equals maxMoment', fakeAsync(() => {
                testComponent.date = new Date(maxMoment!)
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                expect(
                    fixture.debugElement.query(By.css('input')).nativeElement
                        .classList
                ).not.toContain('ng-invalid')
            }))

            it('should not mark invalid when value is between minMoment and maxMoment', fakeAsync(() => {
                testComponent.date = new Date(2010, 0, 2)
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                expect(
                    fixture.debugElement.query(By.css('input')).nativeElement
                        .classList
                ).not.toContain('ng-invalid')
            }))

            it('should disable all decrease-time buttons when value equals minMoment', fakeAsync(() => {
                testComponent.date = new Date(minMoment!)
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                testComponent.dateTimePicker?.open()
                fixture.detectChanges()
                flush()
                fixture.detectChanges()
                const calendarDebugElement = fixture.debugElement.query(
                    By.directive(DateTimeContainerComponent)
                )
                const calendarElement = calendarDebugElement.nativeElement

                const decreaseHourBtn = calendarElement.querySelector(
                    '[aria-label="Minus a hour"]'
                )
                const decreaseMinuteBtn = calendarElement.querySelector(
                    '[aria-label="Minus a minute"]'
                )
                const decreaseSecondBtn = calendarElement.querySelector(
                    '[aria-label="Minus a second"]'
                )
                expect(decreaseHourBtn.hasAttribute('disabled')).toBe(true)
                expect(decreaseMinuteBtn.hasAttribute('disabled')).toBe(true)
                expect(decreaseSecondBtn.hasAttribute('disabled')).toBe(true)
            }))

            it('should disable all increase-time buttons when value equals maxMoment', fakeAsync(() => {
                testComponent.date = new Date(maxMoment!)
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                testComponent.dateTimePicker?.open()
                fixture.detectChanges()
                flush()
                fixture.detectChanges()
                const calendarDebugElement = fixture.debugElement.query(
                    By.directive(DateTimeContainerComponent)
                )
                const calendarElement = calendarDebugElement.nativeElement

                const increaseHourBtn = calendarElement.querySelector(
                    '[aria-label="Add a hour"]'
                )
                const increaseMinuteBtn = calendarElement.querySelector(
                    '[aria-label="Add a minute"]'
                )
                const increaseSecondBtn = calendarElement.querySelector(
                    '[aria-label="Add a second"]'
                )
                expect(increaseHourBtn.hasAttribute('disabled')).toBe(true)
                expect(increaseMinuteBtn.hasAttribute('disabled')).toBe(true)
                expect(increaseSecondBtn.hasAttribute('disabled')).toBe(true)
            }))
        })

        describe('DateTimePicker with filter validation', () => {
            let fixture: ComponentFixture<DateTimePickerWithFilterValidation>
            let testComponent: DateTimePickerWithFilterValidation

            beforeEach(fakeAsync(() => {
                fixture = createComponent(DateTimePickerWithFilterValidation, provideTestDateTimeAdapter())
                fixture.detectChanges()
                testComponent = fixture.componentInstance
            }))

            afterEach(fakeAsync(() => {
                testComponent.dateTimePicker?.close()
                fixture.detectChanges()
                flush()
            }))

            it('should mark input invalid', fakeAsync(() => {
                testComponent.date = new Date(2017, 0, 1)
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                expect(
                    fixture.debugElement.query(By.css('input')).nativeElement
                        .classList
                ).toContain('ng-invalid')

                testComponent.date = new Date(2017, 0, 2)
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                expect(
                    fixture.debugElement.query(By.css('input')).nativeElement
                        .classList
                ).not.toContain('ng-invalid')
            }))

            it('should disable filtered calendar cells', fakeAsync(() => {
                testComponent.date = new Date(2017, 0, 3)
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                testComponent.dateTimePicker?.open()
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                expect(
                    document.querySelector('nxt-date-time-container')
                ).not.toBeNull()

                const cellOne = document.querySelector<HTMLElement>(
                    '[aria-label="January 1, 2017"]'
                )
                const cellTwo = document.querySelector<HTMLElement>(
                    '[aria-label="January 2, 2017"]'
                )

                expect(cellOne?.classList).toContain(
                    'nxt-dt-calendar-cell-disabled'
                )
                expect(cellTwo?.classList).not.toContain(
                    'nxt-dt-calendar-cell-disabled'
                )
            }))
        })

        describe('DateTimePicker with change and input events', () => {
            let fixture: ComponentFixture<
                DateTimePickerWithChangeAndInputEvents
            >
            let testComponent: DateTimePickerWithChangeAndInputEvents
            let inputEl: HTMLInputElement

            beforeEach(fakeAsync(() => {
                fixture = createComponent(
                    DateTimePickerWithChangeAndInputEvents, provideTestDateTimeAdapter()
                )
                fixture.detectChanges()
                testComponent = fixture.componentInstance
                inputEl = fixture.debugElement.query(By.css('input'))
                    .nativeElement

                spyOn(testComponent, 'handleChange')
                spyOn(testComponent, 'handleInput')
                spyOn(testComponent, 'handleDateTimeChange')
                spyOn(testComponent, 'handleDateTimeInput')
            }))

            afterEach(fakeAsync(() => {
                testComponent.dateTimePicker?.close()
                fixture.detectChanges()
                flush()
            }))

            it('should fire input and dateTimeInput events when user types input', () => {
                expect(testComponent.handleChange).not.toHaveBeenCalled()
                expect(
                    testComponent.handleDateTimeChange
                ).not.toHaveBeenCalled()
                expect(testComponent.handleInput).not.toHaveBeenCalled()
                expect(
                    testComponent.handleDateTimeInput
                ).not.toHaveBeenCalled()

                inputEl.value = '2001-01-01'
                dispatchFakeEvent(inputEl, 'input')
                fixture.detectChanges()

                expect(testComponent.handleChange).not.toHaveBeenCalled()
                expect(
                    testComponent.handleDateTimeChange
                ).not.toHaveBeenCalled()
                expect(testComponent.handleInput).toHaveBeenCalled()
                expect(testComponent.handleDateTimeInput).toHaveBeenCalled()
            })

            it('should fire change and dateTimeChange events when user commits typed input', () => {
                expect(testComponent.handleChange).not.toHaveBeenCalled()
                expect(
                    testComponent.handleDateTimeChange
                ).not.toHaveBeenCalled()
                expect(testComponent.handleInput).not.toHaveBeenCalled()
                expect(
                    testComponent.handleDateTimeInput
                ).not.toHaveBeenCalled()

                dispatchFakeEvent(inputEl, 'change')
                fixture.detectChanges()

                expect(testComponent.handleChange).toHaveBeenCalled()
                expect(testComponent.handleDateTimeChange).toHaveBeenCalled()
                expect(testComponent.handleInput).not.toHaveBeenCalled()
                expect(
                    testComponent.handleDateTimeInput
                ).not.toHaveBeenCalled()
            })

            it('should fire dateTimeChange and dateTimeInput events when user selects calendar date', fakeAsync(() => {
                expect(testComponent.handleChange).not.toHaveBeenCalled()
                expect(
                    testComponent.handleDateTimeChange
                ).not.toHaveBeenCalled()
                expect(testComponent.handleInput).not.toHaveBeenCalled()
                expect(
                    testComponent.handleDateTimeInput
                ).not.toHaveBeenCalled()

                testComponent.dateTimePicker?.open()
                fixture.detectChanges()

                expect(
                    document.querySelector('nxt-date-time-container')
                ).not.toBeNull()

                const cells = document.querySelectorAll(
                    '.nxt-dt-calendar-cell'
                )
                dispatchMouseEvent(cells[0], 'click')
                fixture.detectChanges()
                flush()
                testComponent.dateTimePicker?.confirmSelect()
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                expect(testComponent.handleChange).not.toHaveBeenCalled()
                expect(testComponent.handleDateTimeChange).toHaveBeenCalled()
                expect(testComponent.handleInput).not.toHaveBeenCalled()
                expect(testComponent.handleDateTimeInput).toHaveBeenCalled()
            }))

            it('should fire dateTimeChange and dateTimeInput events when user change hour', fakeAsync(() => {
                expect(testComponent.handleChange).not.toHaveBeenCalled()
                expect(
                    testComponent.handleDateTimeChange
                ).not.toHaveBeenCalled()
                expect(testComponent.handleInput).not.toHaveBeenCalled()
                expect(
                    testComponent.handleDateTimeInput
                ).not.toHaveBeenCalled()

                testComponent.dateTimePicker?.open()
                fixture.detectChanges()

                expect(
                    document.querySelector('nxt-date-time-container')
                ).not.toBeNull()

                const increaseHourBtn = document.querySelector(
                    '[aria-label="Add a hour"]'
                )
                dispatchMouseEvent(increaseHourBtn!, 'click')
                fixture.detectChanges()
                flush()
                testComponent.dateTimePicker?.confirmSelect()
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                testComponent.dateTimePicker?.open()
                fixture.detectChanges()

                const decreaseHourBtn = document.querySelector(
                    '[aria-label="Minus a hour"]'
                )
                dispatchMouseEvent(decreaseHourBtn!, 'click')
                fixture.detectChanges()
                flush()
                testComponent.dateTimePicker?.confirmSelect()
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                expect(testComponent.handleChange).not.toHaveBeenCalled()
                expect(
                    testComponent.handleDateTimeChange
                ).toHaveBeenCalledTimes(2)
                expect(testComponent.handleInput).not.toHaveBeenCalled()
                expect(testComponent.handleDateTimeInput).toHaveBeenCalledTimes(
                    2
                )
            }))

            it('should fire dateTimeChange and dateTimeInput events when user change minute', fakeAsync(() => {
                expect(testComponent.handleChange).not.toHaveBeenCalled()
                expect(
                    testComponent.handleDateTimeChange
                ).not.toHaveBeenCalled()
                expect(testComponent.handleInput).not.toHaveBeenCalled()
                expect(
                    testComponent.handleDateTimeInput
                ).not.toHaveBeenCalled()

                testComponent.dateTimePicker?.open()
                fixture.detectChanges()

                expect(
                    document.querySelector('nxt-date-time-container')
                ).not.toBeNull()

                const increaseMinuteBtn = document.querySelector(
                    '[aria-label="Add a minute"]'
                )
                dispatchMouseEvent(increaseMinuteBtn!, 'click')
                fixture.detectChanges()
                flush()
                testComponent.dateTimePicker?.confirmSelect()
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                testComponent.dateTimePicker?.open()
                fixture.detectChanges()

                const decreaseMinuteBtn = document.querySelector(
                    '[aria-label="Minus a minute"]'
                )
                dispatchMouseEvent(decreaseMinuteBtn!, 'click')
                fixture.detectChanges()
                flush()
                testComponent.dateTimePicker?.confirmSelect()
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                expect(testComponent.handleChange).not.toHaveBeenCalled()
                expect(
                    testComponent.handleDateTimeChange
                ).toHaveBeenCalledTimes(2)
                expect(testComponent.handleInput).not.toHaveBeenCalled()
                expect(testComponent.handleDateTimeInput).toHaveBeenCalledTimes(
                    2
                )
            }))

            it('should fire dateTimeChange and dateTimeInput events when user change second', fakeAsync(() => {
                expect(testComponent.handleChange).not.toHaveBeenCalled()
                expect(
                    testComponent.handleDateTimeChange
                ).not.toHaveBeenCalled()
                expect(testComponent.handleInput).not.toHaveBeenCalled()
                expect(
                    testComponent.handleDateTimeInput
                ).not.toHaveBeenCalled()

                testComponent.dateTimePicker?.open()
                fixture.detectChanges()

                expect(
                    document.querySelector('nxt-date-time-container')
                ).not.toBeNull()

                const increaseSecondBtn = document.querySelector(
                    '[aria-label="Add a second"]'
                )
                dispatchMouseEvent(increaseSecondBtn!, 'click')
                fixture.detectChanges()
                flush()
                testComponent.dateTimePicker?.confirmSelect()
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                testComponent.dateTimePicker?.open()
                fixture.detectChanges()

                const decreaseSecondBtn = document.querySelector(
                    '[aria-label="Minus a second"]'
                )
                dispatchMouseEvent(decreaseSecondBtn!, 'click')
                fixture.detectChanges()
                flush()
                testComponent.dateTimePicker?.confirmSelect()
                fixture.detectChanges()
                flush()
                fixture.detectChanges()

                expect(testComponent.handleChange).not.toHaveBeenCalled()
                expect(
                    testComponent.handleDateTimeChange
                ).toHaveBeenCalledTimes(2)
                expect(testComponent.handleInput).not.toHaveBeenCalled()
                expect(testComponent.handleDateTimeInput).toHaveBeenCalledTimes(
                    2
                )
            }))

            it('should NOT fire the dateTimeInput event if the value has not changed', () => {
                expect(
                    testComponent.handleDateTimeInput
                ).not.toHaveBeenCalled()

                inputEl.value = '12/12/2012'
                dispatchFakeEvent(inputEl, 'input')
                fixture.detectChanges()

                expect(testComponent.handleDateTimeInput).toHaveBeenCalledTimes(
                    1
                )
                dispatchFakeEvent(inputEl, 'input')
                fixture.detectChanges()

                expect(testComponent.handleDateTimeInput).toHaveBeenCalledTimes(
                    1
                )
            })
        })

        describe('DateTimePicker with ISO strings', () => {
            let fixture: ComponentFixture<DateTimePickerWithISOStrings>
            let testComponent: DateTimePickerWithISOStrings

            beforeEach(fakeAsync(() => {
                fixture = createComponent(DateTimePickerWithISOStrings, provideTestDateTimeAdapter())
                fixture.detectChanges()
                testComponent = fixture.componentInstance
            }))

            afterEach(fakeAsync(() => {
                testComponent.dateTimePicker?.close()
                fixture.detectChanges()
                flush()
            }))

            it('should coerce ISO strings', fakeAsync(() => {
                expect(() => fixture.detectChanges()).not.toThrow()
                flush()
                fixture.detectChanges()

                expect(testComponent.dateTimePicker?.startAt).toEqual(
                    new Date(2017, 6, 1)
                )
                expect(testComponent.dateTimePickerInput?.value).toEqual(
                    new Date(2017, 5, 1)
                )
                expect(testComponent.dateTimePickerInput?.min).toEqual(
                    new Date(2017, 0, 1)
                )
                expect(testComponent.dateTimePickerInput?.max).toEqual(
                    new Date(2017, 11, 31)
                )
            }))
        })

        describe('DateTimePicker with events', () => {
            let fixture: ComponentFixture<DateTimePickerWithEvents>
            let testComponent: DateTimePickerWithEvents

            beforeEach(fakeAsync(() => {
                fixture = createComponent(DateTimePickerWithEvents, provideTestDateTimeAdapter())
                fixture.detectChanges()
                testComponent = fixture.componentInstance
            }))

            afterEach(fakeAsync(() => {
                testComponent.dateTimePicker?.close()
                fixture.detectChanges()
                flush()
            }))

            it('should dispatch an event when a dateTimePicker is isOpen', fakeAsync(() => {
                testComponent.dateTimePicker?.open()
                fixture.detectChanges()
                flush()

                expect(testComponent.isOpenSpy).toHaveBeenCalled()
            }))

            it('should dispatch an event when a dateTimePicker is closed', fakeAsync(() => {
                testComponent.dateTimePicker?.open()
                fixture.detectChanges()
                flush()

                testComponent.dateTimePicker?.close()
                flush()
                fixture.detectChanges()

                expect(testComponent.closedSpy).toHaveBeenCalled()
            }))
        })
    })

    describe('with missing DateTimeAdapter and NXT_DATE_TIME_FORMATS', () => {
        it('should throw when created', () => {
            expect(() => createComponent(StandardDateTimePicker)).toThrowError(
                /NG\d+: No provider found for .*/
            )
        })
    })
})

@Component({
    template: `
        <input [nxtDateTime]="dt" [value]="date">
        <nxt-date-time [isOpen]="isOpen"
                       [disabled]="disabled"
                       [pickerType]="pickerType"
                       [pickerMode]="pickerMode" #dt></nxt-date-time>
    `,
    imports: [
        FormsModule,
        DateTimeModule,
        ReactiveFormsModule
    ]
})
class StandardDateTimePicker {
    date: Date | null = new Date(2020, 0, 1)
    pickerType = 'both'
    pickerMode = 'popup'
    isOpen = false
    disabled = false
    @ViewChild('dt', { static: true })
    dateTimePicker?: DateTimeComponent<Date>
    @ViewChild(DateTimeInputDirective, { static: true })
    dateTimePickerInput?: DateTimeInputDirective<Date>
}

@Component({
    template: `
        <input [nxtDateTime]="dt" [selectMode]="selectMode" [values]="dates">
        <nxt-date-time [startAt]="startAt"
                       [pickerType]="pickerType" #dt></nxt-date-time>
    `,
    imports: [
        FormsModule,
        DateTimeModule,
        ReactiveFormsModule
    ]
})
class RangeDateTimePicker {
    dates?: Array<Date | undefined> = [new Date(2020, 0, 1), new Date(2020, 1, 1)]
    selectMode = 'range'
    pickerType = 'both'
    startAt = new Date(2020, 0, 1)
    @ViewChild('dt', { static: true })
    dateTimePicker?: DateTimeComponent<Date>
    @ViewChild(DateTimeInputDirective, { static: true })
    dateTimePickerInput?: DateTimeInputDirective<Date>
}

@Component({
    template: `
        <input [nxtDateTime]="dt">
        <input [nxtDateTime]="dt">
        <nxt-date-time #dt></nxt-date-time>
    `,
    imports: [
        FormsModule,
        DateTimeModule,
        ReactiveFormsModule
    ]
})
class MultiInputDateTimePicker { }

@Component({
    template: `
        <nxt-date-time #dt></nxt-date-time>
    `,
    imports: [
        FormsModule,
        DateTimeModule,
        ReactiveFormsModule
    ]
})
class NoInputDateTimePicker {
    @ViewChild('dt', { static: true })
    dateTimePicker?: DateTimeComponent<Date>
}

@Component({
    template: `
        <input [nxtDateTime]="dt" [value]="date">
        <nxt-date-time #dt [startAt]="startDate"></nxt-date-time>
    `,
    imports: [
        FormsModule,
        DateTimeModule,
        ReactiveFormsModule
    ]
})
class DateTimePickerWithStartAt {
    date = new Date(2020, 0, 1)
    startDate = new Date(2010, 0, 1)
    @ViewChild('dt', { static: true })
    dateTimePicker?: DateTimeComponent<Date>
}

@Component({
    template: `
        <input [nxtDateTime]="dt" [value]="date">
        <nxt-date-time #dt [startView]="startView"
                       (monthSelected)="onMonthSelection()"
                       (yearSelected)="onYearSelection()"></nxt-date-time>
    `,
    imports: [
        FormsModule,
        DateTimeModule,
        ReactiveFormsModule
    ]
})
class DateTimePickerWithStartView {
    date = new Date(2020, 0, 1)
    startView = 'month'
    @ViewChild('dt', { static: true })
    dateTimePicker?: DateTimeComponent<Date>

    onMonthSelection() { }

    onYearSelection() { }
}

@Component({
    template: `
        <input [(ngModel)]="moment" [selectMode]="selectMode" [nxtDateTime]="dt">
        <nxt-date-time #dt></nxt-date-time>
    `,
    imports: [
        FormsModule,
        DateTimeModule,
        ReactiveFormsModule
    ]
})
class DateTimePickerWithNgModel {
    moment?: Array<Date | undefined> | Date
    selectMode = 'single'
    @ViewChild('dt', { static: true })
    dateTimePicker?: DateTimeComponent<Date>
    @ViewChild(DateTimeInputDirective, { static: true })
    dateTimePickerInput?: DateTimeInputDirective<Date>
}

@Component({
    template: `
        <input [formControl]="formControl"
               [nxtDateTime]="dt"
               [nxtDateTimeTrigger]="dt">
        <nxt-date-time #dt></nxt-date-time>
    `,
    imports: [
        FormsModule,
        DateTimeModule,
        ReactiveFormsModule
    ]
})
class DateTimePickerWithFormControl {
    formControl = new UntypedFormControl()
    @ViewChild('dt', { static: true })
    dateTimePicker?: DateTimeComponent<Date>
    @ViewChild(DateTimeInputDirective, { static: true })
    dateTimePickerInput?: DateTimeInputDirective<Date>
    @ViewChild(DateTimeTriggerDirective, { static: true })
    dateTimePickerToggle?: DateTimeTriggerDirective<Date>
}

@Component({
    template: `
        <input [nxtDateTime]="dt">
        <button [nxtDateTimeTrigger]="dt">Icon</button>
        <nxt-date-time #dt></nxt-date-time>
    `,
    imports: [
        FormsModule,
        DateTimeModule,
        ReactiveFormsModule
    ]
})
class DateTimePickerWithTrigger {
    @ViewChild('dt', { static: true })
    dateTimePicker?: DateTimeComponent<Date>
    @ViewChild(DateTimeInputDirective, { static: true })
    dateTimePickerInput?: DateTimeInputDirective<Date>
}

@Component({
    template: `
        <input [(ngModel)]="date" [min]="min" [max]="max"
               [nxtDateTime]="dt"
               [nxtDateTimeTrigger]="dt">
        <nxt-date-time [showSecondsTimer]="true" #dt></nxt-date-time>
    `,
    imports: [
        FormsModule,
        DateTimeModule,
        ReactiveFormsModule
    ]
})
class DateTimePickerWithMinAndMaxValidation {
    @ViewChild('dt', { static: true })
    dateTimePicker?: DateTimeComponent<Date>
    @ViewChild(DateTimeInputDirective, { static: true })
    dateTimePickerInput?: DateTimeInputDirective<Date>
    @ViewChild(DateTimeTriggerDirective, { static: true })
    dateTimePickerToggle?: DateTimeTriggerDirective<Date>

    date?: Date
    min?: Date
    max?: Date
}

@Component({
    template: `
        <input [(ngModel)]="date"
               [dateTimeFilter]="filter"
               [nxtDateTime]="dt"
               [nxtDateTimeTrigger]="dt">
        <nxt-date-time [showSecondsTimer]="true" #dt></nxt-date-time>
    `,
    imports: [
        FormsModule,
        DateTimeModule,
        ReactiveFormsModule
    ]
})
class DateTimePickerWithFilterValidation {
    @ViewChild('dt', { static: true })
    dateTimePicker?: DateTimeComponent<Date>
    @ViewChild(DateTimeInputDirective, { static: true })
    dateTimePickerInput?: DateTimeInputDirective<Date>
    @ViewChild(DateTimeTriggerDirective, { static: true })
    dateTimePickerToggle?: DateTimeTriggerDirective<Date>
    date?: Date
    filter = (date: Date) => date.getDate() != 1
}

@Component({
    template: `
        <input [nxtDateTime]="dt"
               [nxtDateTimeTrigger]="dt"
               (change)="handleChange()"
               (input)="handleInput()"
               (dateTimeChange)="handleDateTimeChange()"
               (dateTimeInput)="handleDateTimeInput()">
        <nxt-date-time [showSecondsTimer]="true" #dt></nxt-date-time>
    `,
    imports: [
        FormsModule,
        DateTimeModule,
        ReactiveFormsModule
    ]
})
class DateTimePickerWithChangeAndInputEvents {
    @ViewChild('dt', { static: true })
    dateTimePicker?: DateTimeComponent<Date>
    @ViewChild(DateTimeInputDirective, { static: true })
    dateTimePickerInput?: DateTimeInputDirective<Date>
    @ViewChild(DateTimeTriggerDirective, { static: true })
    dateTimePickerToggle?: DateTimeTriggerDirective<Date>

    handleChange() { }

    handleInput() { }

    handleDateTimeChange() { }

    handleDateTimeInput() { }
}

@Component({
    template: `
    <input [nxtDateTime]="dt" [(ngModel)]="value" [min]="min" [max]="max">
    <nxt-date-time #dt [startAt]="startAt"></nxt-date-time>
  `,
    imports: [
        FormsModule,
        DateTimeModule,
        ReactiveFormsModule
    ]
})
class DateTimePickerWithISOStrings {
    value = new Date(2017, 5, 1).toISOString()
    min = new Date(2017, 0, 1).toISOString()
    max = new Date(2017, 11, 31).toISOString()
    startAt = new Date(2017, 6, 1).toISOString()
    @ViewChild('dt', { static: true })
    dateTimePicker?: DateTimeComponent<Date>
    @ViewChild(DateTimeInputDirective, { static: true })
    dateTimePickerInput?: DateTimeInputDirective<Date>
}

@Component({
    template: `
    <input [(ngModel)]="selected" [nxtDateTime]="dt">
    <nxt-date-time (open)="isOpenSpy()" (close)="closedSpy()" #dt></nxt-date-time>
  `,
    imports: [
        FormsModule,
        DateTimeModule,
        ReactiveFormsModule
    ]
})
class DateTimePickerWithEvents {
    selected: Date | null = null
    isOpenSpy = jasmine.createSpy('isOpen spy')
    closedSpy = jasmine.createSpy('closed spy')
    @ViewChild('dt', { static: true })
    dateTimePicker?: DateTimeComponent<Date>
}
