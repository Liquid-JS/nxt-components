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
                    <a href="index.html" data-type="index-link">nxt-highlightjs documentation</a>
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
                                <span class="icon ion-ios-paper"></span>README
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
                                <a href="modules/HighlightExstrasModule.html" data-type="entity-link" >HighlightExstrasModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-HighlightExstrasModule-47ae74de8a277e943e512e7863cabe9ccba24aebe3abeb8e99e6a67a7a1048e07e22e00e7dcc01f9eabd72a93fec8bf9478bfcf6158c91f2d22b3853e06ffdf9"' : 'data-bs-target="#xs-directives-links-module-HighlightExstrasModule-47ae74de8a277e943e512e7863cabe9ccba24aebe3abeb8e99e6a67a7a1048e07e22e00e7dcc01f9eabd72a93fec8bf9478bfcf6158c91f2d22b3853e06ffdf9"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-HighlightExstrasModule-47ae74de8a277e943e512e7863cabe9ccba24aebe3abeb8e99e6a67a7a1048e07e22e00e7dcc01f9eabd72a93fec8bf9478bfcf6158c91f2d22b3853e06ffdf9"' :
                                        'id="xs-directives-links-module-HighlightExstrasModule-47ae74de8a277e943e512e7863cabe9ccba24aebe3abeb8e99e6a67a7a1048e07e22e00e7dcc01f9eabd72a93fec8bf9478bfcf6158c91f2d22b3853e06ffdf9"' }>
                                        <li class="link">
                                            <a href="directives/GistDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GistDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-HighlightExstrasModule-47ae74de8a277e943e512e7863cabe9ccba24aebe3abeb8e99e6a67a7a1048e07e22e00e7dcc01f9eabd72a93fec8bf9478bfcf6158c91f2d22b3853e06ffdf9"' : 'data-bs-target="#xs-pipes-links-module-HighlightExstrasModule-47ae74de8a277e943e512e7863cabe9ccba24aebe3abeb8e99e6a67a7a1048e07e22e00e7dcc01f9eabd72a93fec8bf9478bfcf6158c91f2d22b3853e06ffdf9"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-HighlightExstrasModule-47ae74de8a277e943e512e7863cabe9ccba24aebe3abeb8e99e6a67a7a1048e07e22e00e7dcc01f9eabd72a93fec8bf9478bfcf6158c91f2d22b3853e06ffdf9"' :
                                            'id="xs-pipes-links-module-HighlightExstrasModule-47ae74de8a277e943e512e7863cabe9ccba24aebe3abeb8e99e6a67a7a1048e07e22e00e7dcc01f9eabd72a93fec8bf9478bfcf6158c91f2d22b3853e06ffdf9"' }>
                                            <li class="link">
                                                <a href="pipes/CodeFromUrlPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CodeFromUrlPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/GistFilePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GistFilePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HighlightModule.html" data-type="entity-link" >HighlightModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-HighlightModule-ad0231b61efd04e2396b315cb1ed215a33927b763bdbd3a41158c809a23a54eb029dbc577de7271cbf54c6070c382d6fe5595ff68dd0b1bdaa200a8b43fa54e1"' : 'data-bs-target="#xs-directives-links-module-HighlightModule-ad0231b61efd04e2396b315cb1ed215a33927b763bdbd3a41158c809a23a54eb029dbc577de7271cbf54c6070c382d6fe5595ff68dd0b1bdaa200a8b43fa54e1"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-HighlightModule-ad0231b61efd04e2396b315cb1ed215a33927b763bdbd3a41158c809a23a54eb029dbc577de7271cbf54c6070c382d6fe5595ff68dd0b1bdaa200a8b43fa54e1"' :
                                        'id="xs-directives-links-module-HighlightModule-ad0231b61efd04e2396b315cb1ed215a33927b763bdbd3a41158c809a23a54eb029dbc577de7271cbf54c6070c382d6fe5595ff68dd0b1bdaa200a8b43fa54e1"' }>
                                        <li class="link">
                                            <a href="directives/HighlightAutoDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HighlightAutoDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HighlightDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HighlightDirective</a>
                                        </li>
                                    </ul>
                                </li>
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
                                    <a href="directives/GistDirective.html" data-type="entity-link" >GistDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/HighlightAutoDirective.html" data-type="entity-link" >HighlightAutoDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/HighlightBase.html" data-type="entity-link" >HighlightBase</a>
                                </li>
                                <li class="link">
                                    <a href="directives/HighlightDirective.html" data-type="entity-link" >HighlightDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/HighlightLineNumbersDirective.html" data-type="entity-link" >HighlightLineNumbersDirective</a>
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
                                    <a href="injectables/CodeLoader.html" data-type="entity-link" >CodeLoader</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HighlightJS.html" data-type="entity-link" >HighlightJS</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HighlightLoader.html" data-type="entity-link" >HighlightLoader</a>
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
                                <a href="interfaces/ChangeStatus.html" data-type="entity-link" >ChangeStatus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CodeFileLocation.html" data-type="entity-link" >CodeFileLocation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Files.html" data-type="entity-link" >Files</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Gist.html" data-type="entity-link" >Gist</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GistFile.html" data-type="entity-link" >GistFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GistOptions.html" data-type="entity-link" >GistOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HighlightJSOptions.html" data-type="entity-link" >HighlightJSOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/History.html" data-type="entity-link" >History</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LineNumbersOptions.html" data-type="entity-link" >LineNumbersOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LineNumbersOptions-1.html" data-type="entity-link" >LineNumbersOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Owner.html" data-type="entity-link" >Owner</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#pipes-links"' :
                                'data-bs-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/CodeFromUrlPipe.html" data-type="entity-link" >CodeFromUrlPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/GistFilePipe.html" data-type="entity-link" >GistFilePipe</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
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