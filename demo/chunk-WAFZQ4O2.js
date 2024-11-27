import"./chunk-FBFWB55K.js";var i=`<div>\r
    <ng-container dialogDisplay="inline"\r
        [cancelButton]="true"\r
        [(nxtColor)]="colors[selectedColor]"></ng-container>\r
</div>\r
<div>\r
    <div *ngFor="let color of colors; index as i"\r
        class="color-box"\r
        [style.background]="color"\r
        (click)="selectedColor = i"></div>\r
</div>\r
`;export{i as default};
