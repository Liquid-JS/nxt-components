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
                                <a href="modules/HighlightExstrasModule.html" data-type="entity-link" class="deprecated-name">HighlightExstrasModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-HighlightExstrasModule-edbcd086d45c21678c9f72d53c406fa809608195a5e2d1d0e801526e824c0f556f5b4e3e727a357aacfbdc0943bce0c951adb2b3b3d0244e5e8e6e5a35782df0"' : 'data-bs-target="#xs-directives-links-module-HighlightExstrasModule-edbcd086d45c21678c9f72d53c406fa809608195a5e2d1d0e801526e824c0f556f5b4e3e727a357aacfbdc0943bce0c951adb2b3b3d0244e5e8e6e5a35782df0"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-HighlightExstrasModule-edbcd086d45c21678c9f72d53c406fa809608195a5e2d1d0e801526e824c0f556f5b4e3e727a357aacfbdc0943bce0c951adb2b3b3d0244e5e8e6e5a35782df0"' :
                                        'id="xs-directives-links-module-HighlightExstrasModule-edbcd086d45c21678c9f72d53c406fa809608195a5e2d1d0e801526e824c0f556f5b4e3e727a357aacfbdc0943bce0c951adb2b3b3d0244e5e8e6e5a35782df0"' }>
                                        <li class="link">
                                            <a href="directives/GistDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" class="deprecated-name">GistDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-HighlightExstrasModule-edbcd086d45c21678c9f72d53c406fa809608195a5e2d1d0e801526e824c0f556f5b4e3e727a357aacfbdc0943bce0c951adb2b3b3d0244e5e8e6e5a35782df0"' : 'data-bs-target="#xs-pipes-links-module-HighlightExstrasModule-edbcd086d45c21678c9f72d53c406fa809608195a5e2d1d0e801526e824c0f556f5b4e3e727a357aacfbdc0943bce0c951adb2b3b3d0244e5e8e6e5a35782df0"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-HighlightExstrasModule-edbcd086d45c21678c9f72d53c406fa809608195a5e2d1d0e801526e824c0f556f5b4e3e727a357aacfbdc0943bce0c951adb2b3b3d0244e5e8e6e5a35782df0"' :
                                            'id="xs-pipes-links-module-HighlightExstrasModule-edbcd086d45c21678c9f72d53c406fa809608195a5e2d1d0e801526e824c0f556f5b4e3e727a357aacfbdc0943bce0c951adb2b3b3d0244e5e8e6e5a35782df0"' }>
                                            <li class="link">
                                                <a href="pipes/CodeFromUrlPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" class="deprecated-name">CodeFromUrlPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/GistFilePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GistFilePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HighlightModule.html" data-type="entity-link" class="deprecated-name">HighlightModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-HighlightModule-e78036f58289b27611a7f82b04ac1e2dab2b9ac16f4990eaeb287a565d2f482b706859f2e08b2e02df27de46fe3c8699d1d9abd185428475b479ea9e46df88b5"' : 'data-bs-target="#xs-directives-links-module-HighlightModule-e78036f58289b27611a7f82b04ac1e2dab2b9ac16f4990eaeb287a565d2f482b706859f2e08b2e02df27de46fe3c8699d1d9abd185428475b479ea9e46df88b5"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-HighlightModule-e78036f58289b27611a7f82b04ac1e2dab2b9ac16f4990eaeb287a565d2f482b706859f2e08b2e02df27de46fe3c8699d1d9abd185428475b479ea9e46df88b5"' :
                                        'id="xs-directives-links-module-HighlightModule-e78036f58289b27611a7f82b04ac1e2dab2b9ac16f4990eaeb287a565d2f482b706859f2e08b2e02df27de46fe3c8699d1d9abd185428475b479ea9e46df88b5"' }>
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
                                    <a href="directives/GistDirective.html" data-type="entity-link" class="deprecated-name">GistDirective</a>
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
                                    <a href="injectables/HighlightJS.html" data-type="entity-link" >HighlightJS</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HighlightLoader.html" data-type="entity-link" >HighlightLoader</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HighlightLoaderStub.html" data-type="entity-link" >HighlightLoaderStub</a>
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
                                    <a href="pipes/CodeFromUrlPipe.html" data-type="entity-link" class="deprecated-name">CodeFromUrlPipe</a>
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
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});