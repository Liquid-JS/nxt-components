'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nxt-pick-datetime documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="overview.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                            <li class="link">
                                <a href="index.html" data-type="chapter-link">
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/DateTimeModule.html" data-type="entity-link" class="deprecated-name">DateTimeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DateTimeModule-d37d6dc3ea2605f8a39265583ebbeb5f9500225d569dd5d89ab370079ff3bec1b336f167592dbc65ee941d71ca411deddbbadba4ffd9d569b6408b938798e3ec"' : 'data-bs-target="#xs-components-links-module-DateTimeModule-d37d6dc3ea2605f8a39265583ebbeb5f9500225d569dd5d89ab370079ff3bec1b336f167592dbc65ee941d71ca411deddbbadba4ffd9d569b6408b938798e3ec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DateTimeModule-d37d6dc3ea2605f8a39265583ebbeb5f9500225d569dd5d89ab370079ff3bec1b336f167592dbc65ee941d71ca411deddbbadba4ffd9d569b6408b938798e3ec"' :
                                            'id="xs-components-links-module-DateTimeModule-d37d6dc3ea2605f8a39265583ebbeb5f9500225d569dd5d89ab370079ff3bec1b336f167592dbc65ee941d71ca411deddbbadba4ffd9d569b6408b938798e3ec"' }>
                                            <li class="link">
                                                <a href="components/CalendarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalendarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DateTimeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DateTimeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DateTimeInlineComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DateTimeInlineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MonthViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MonthViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MultiYearViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MultiYearViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TimerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TimerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/YearViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >YearViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-DateTimeModule-d37d6dc3ea2605f8a39265583ebbeb5f9500225d569dd5d89ab370079ff3bec1b336f167592dbc65ee941d71ca411deddbbadba4ffd9d569b6408b938798e3ec"' : 'data-bs-target="#xs-directives-links-module-DateTimeModule-d37d6dc3ea2605f8a39265583ebbeb5f9500225d569dd5d89ab370079ff3bec1b336f167592dbc65ee941d71ca411deddbbadba4ffd9d569b6408b938798e3ec"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DateTimeModule-d37d6dc3ea2605f8a39265583ebbeb5f9500225d569dd5d89ab370079ff3bec1b336f167592dbc65ee941d71ca411deddbbadba4ffd9d569b6408b938798e3ec"' :
                                        'id="xs-directives-links-module-DateTimeModule-d37d6dc3ea2605f8a39265583ebbeb5f9500225d569dd5d89ab370079ff3bec1b336f167592dbc65ee941d71ca411deddbbadba4ffd9d569b6408b938798e3ec"' }>
                                        <li class="link">
                                            <a href="directives/DateTimeInputDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DateTimeInputDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DateTimeTriggerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DateTimeTriggerDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MomentDateTimeModule.html" data-type="entity-link" class="deprecated-name">MomentDateTimeModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NativeDateTimeModule.html" data-type="entity-link" class="deprecated-name">NativeDateTimeModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CalendarComponent.html" data-type="entity-link" >CalendarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DateTimeComponent.html" data-type="entity-link" >DateTimeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DateTimeInlineComponent.html" data-type="entity-link" >DateTimeInlineComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MonthViewComponent.html" data-type="entity-link" >MonthViewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MultiYearViewComponent.html" data-type="entity-link" >MultiYearViewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TimerComponent.html" data-type="entity-link" >TimerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/YearViewComponent.html" data-type="entity-link" >YearViewComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/DateTimeDirective.html" data-type="entity-link" >DateTimeDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/DateTimeInputDirective.html" data-type="entity-link" >DateTimeInputDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/DateTimeTriggerDirective.html" data-type="entity-link" >DateTimeTriggerDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CalendarCell.html" data-type="entity-link" >CalendarCell</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateTimeAdapter.html" data-type="entity-link" >DateTimeAdapter</a>
                            </li>
                            <li class="link">
                                <a href="classes/DialogConfig.html" data-type="entity-link" >DialogConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DialogRef.html" data-type="entity-link" >DialogRef</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DateTimeIntl.html" data-type="entity-link" >DateTimeIntl</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MomentDateTimeAdapter.html" data-type="entity-link" >MomentDateTimeAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NativeDateTimeAdapter.html" data-type="entity-link" >NativeDateTimeAdapter</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DateTimeFormats.html" data-type="entity-link" >DateTimeFormats</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DateTimeInputEvent.html" data-type="entity-link" >DateTimeInputEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogPosition.html" data-type="entity-link" >DialogPosition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MomentDateTimeAdapterOptions.html" data-type="entity-link" >MomentDateTimeAdapterOptions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});