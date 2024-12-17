import"./chunk-FBFWB55K.js";var c=`<table cdk-table\r
    [dataSource]="cities"\r
    [nxtSortablejs]="cities"\r
    [sortablejsContainer]="'tbody'"\r
    class="table">\r
\r
    <tr cdk-header-row\r
        *cdkHeaderRowDef="['city', 'description']"></tr>\r
    <tr cdk-row\r
        *cdkRowDef="let row; columns: ['city', 'description']"></tr>\r
\r
    <ng-container cdkColumnDef="city">\r
        <th cdk-header-cell\r
            *cdkHeaderCellDef>City</th>\r
        <td cdk-cell\r
            *cdkCellDef="let element">{{ element }}</td>\r
    </ng-container>\r
\r
    <ng-container cdkColumnDef="description">\r
        <th cdk-header-cell\r
            *cdkHeaderCellDef>Description</th>\r
        <td cdk-cell\r
            *cdkCellDef="let element">{{ element }} description</td>\r
    </ng-container>\r
</table>\r
`;export{c as default};
