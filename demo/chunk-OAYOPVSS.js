import{a as D,b as O,c as w,d as y,e as S,f as g,g as v,h as H,i as E,j as M,k as R}from"./chunk-JNWQN5I6.js";import{$a as d,$b as b,Eb as i,Fb as o,Gb as c,Hb as u,Ib as m,Qb as f,Qc as h,Wa as C,Yc as x,_b as r,ac as T,gc as s,lb as k,rb as a,yb as p}from"./chunk-O6WXYVOA.js";var I=()=>["name","type","description"];function F(e,t){e&1&&c(0,"tr",10)}function L(e,t){e&1&&c(0,"tr",11)}function P(e,t){e&1&&(i(0,"th",12),r(1,"Output"),o())}function $(e,t){if(e&1&&(i(0,"td",13),r(1),o()),e&2){let n=t.$implicit;d(),T("(",n.name,")")}}function V(e,t){e&1&&(i(0,"th",12),r(1,"Type"),o())}function z(e,t){if(e&1&&(i(0,"td",13),r(1),o()),e&2){let n=t.$implicit,l=f(2);d(),b(l.formatOutputType(n.defaultValue))}}function N(e,t){e&1&&(i(0,"th",12),r(1,"Description"),o())}function j(e,t){if(e&1&&c(0,"td",14),e&2){let n=t.$implicit;p("innerHTML",n.description,C)}}function q(e,t){if(e&1&&(i(0,"table",1),a(1,F,1,0,"tr",2)(2,L,1,0,"tr",3),u(3,4),a(4,P,2,0,"th",5)(5,$,2,1,"td",6),m(),u(6,7),a(7,V,2,0,"th",5)(8,z,2,1,"td",6),m(),u(9,8),a(10,N,2,0,"th",5)(11,j,1,1,"td",9),m(),o()),e&2){let n=f();p("dataSource",n.outputs),d(),p("cdkHeaderRowDef",s(3,I)),d(),p("cdkRowDefColumns",s(4,I))}}var Q=(()=>{class e{formatOutputType(n){return n.match(/<(.*)>/)?.[1]}static{this.\u0275fac=function(l){return new(l||e)}}static{this.\u0275cmp=k({type:e,selectors:[["app-outputs-table"]],inputs:{outputs:"outputs"},decls:1,vars:1,consts:[["cdk-table","","class","table table-hover",3,"dataSource",4,"ngIf"],["cdk-table","",1,"table","table-hover",3,"dataSource"],["cdk-header-row","",4,"cdkHeaderRowDef"],["cdk-row","",4,"cdkRowDef","cdkRowDefColumns"],["cdkColumnDef","name"],["cdk-header-cell","",4,"cdkHeaderCellDef"],["cdk-cell","",4,"cdkCellDef"],["cdkColumnDef","type"],["cdkColumnDef","description"],["cdk-cell","",3,"innerHTML",4,"cdkCellDef"],["cdk-header-row",""],["cdk-row",""],["cdk-header-cell",""],["cdk-cell",""],["cdk-cell","",3,"innerHTML"]],template:function(l,_){l&1&&a(0,q,12,5,"table",0),l&2&&p("ngIf",_.outputs==null?null:_.outputs.length)},dependencies:[x,h,R,M,v,D,O,w,S,E,y,H,g],styles:["td[_ngcontent-%COMP%]     p:last-child{margin:0}[_nghost-%COMP%]{display:flex;overflow-x:auto}table[_ngcontent-%COMP%]{margin:0}"]})}}return e})();export{Q as a};
