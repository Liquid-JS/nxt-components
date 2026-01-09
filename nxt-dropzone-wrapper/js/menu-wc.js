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
                    <a href="index.html" data-type="index-link">nxt-dropzone-wrapper documentation</a>
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
                                <a href="modules/DropzoneModule.html" data-type="entity-link" class="deprecated-name">DropzoneModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DropzoneModule-564654daa42f56b8e1ca6d3be628e79585ae2d162856aa8be67bbc6eba44d711014be17ab6e3f6883069171337b7337d5f8d502d3c166b42e72d95a8beb157e5"' : 'data-bs-target="#xs-components-links-module-DropzoneModule-564654daa42f56b8e1ca6d3be628e79585ae2d162856aa8be67bbc6eba44d711014be17ab6e3f6883069171337b7337d5f8d502d3c166b42e72d95a8beb157e5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DropzoneModule-564654daa42f56b8e1ca6d3be628e79585ae2d162856aa8be67bbc6eba44d711014be17ab6e3f6883069171337b7337d5f8d502d3c166b42e72d95a8beb157e5"' :
                                            'id="xs-components-links-module-DropzoneModule-564654daa42f56b8e1ca6d3be628e79585ae2d162856aa8be67bbc6eba44d711014be17ab6e3f6883069171337b7337d5f8d502d3c166b42e72d95a8beb157e5"' }>
                                            <li class="link">
                                                <a href="components/DropzoneComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DropzoneComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-DropzoneModule-564654daa42f56b8e1ca6d3be628e79585ae2d162856aa8be67bbc6eba44d711014be17ab6e3f6883069171337b7337d5f8d502d3c166b42e72d95a8beb157e5"' : 'data-bs-target="#xs-directives-links-module-DropzoneModule-564654daa42f56b8e1ca6d3be628e79585ae2d162856aa8be67bbc6eba44d711014be17ab6e3f6883069171337b7337d5f8d502d3c166b42e72d95a8beb157e5"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DropzoneModule-564654daa42f56b8e1ca6d3be628e79585ae2d162856aa8be67bbc6eba44d711014be17ab6e3f6883069171337b7337d5f8d502d3c166b42e72d95a8beb157e5"' :
                                        'id="xs-directives-links-module-DropzoneModule-564654daa42f56b8e1ca6d3be628e79585ae2d162856aa8be67bbc6eba44d711014be17ab6e3f6883069171337b7337d5f8d502d3c166b42e72d95a8beb157e5"' }>
                                        <li class="link">
                                            <a href="directives/DropzoneDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DropzoneDirective</a>
                                        </li>
                                    </ul>
                                </li>
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
                                <a href="components/DropzoneComponent.html" data-type="entity-link" >DropzoneComponent</a>
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
                                    <a href="directives/DropzoneDirective.html" data-type="entity-link" >DropzoneDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/DropzoneListeners.html" data-type="entity-link" >DropzoneListeners</a>
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
                                <a href="interfaces/DropzoneConfig.html" data-type="entity-link" >DropzoneConfig</a>
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