import"./chunk-FBFWB55K.js";var e=`<div>\r
    <ng-container dialogDisplay="inline"\r
        [cancelButton]="true"\r
        [(nxtColor)]="colors[selectedColor]" />\r
</div>\r
<div>\r
    @for (color of colors; track color; let i = $index) {\r
    <div class="color-box"\r
        [style.background]="color"\r
        (click)="selectedColor = i"\r
        (keydown.enter)="selectedColor = i"\r
        tabindex="0"></div>\r
    }\r
</div>\r
`;export{e as default};
