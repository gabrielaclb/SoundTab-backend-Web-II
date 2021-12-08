"use strict";(self.webpackChunksoundtab_frontend=self.webpackChunksoundtab_frontend||[]).push([[367],{5277:(w,g,a)=>{a.r(g),a.d(g,{AlbumModule:()=>j});var C=a(6019),p=a(7962),h=a(5506),c=a(4750),v=a(7043),S=a(2088),u=a(6504),s=a(7537),_=a(6651),m=a(481),d=a(7218),t=a(2383),A=a(5612),Z=a(5542),F=a(4522);let f=(()=>{class l{constructor(e,i){this._globalService=e,this._http=i,this.url=this._globalService.apiUrl+"/album"}getAll(){console.log(this.url);let e=this._globalService.headersBuilder(!0);return this._http.get(`${this.url}`,e)}getByBand(e){let i=this._globalService.headersBuilder(!0);return this._http.get(`${this.url}/band/id/${e}`,i)}get(e){let i=this._globalService.headersBuilder(!0);return this._http.get(`${this.url}/id/${e}`,i)}delete(e){let i=this._globalService.headersBuilder(!0);return this._http.delete(`${this.url}/admin/id/${e}`,i)}update(e){let i=new FormData;for(let o in e)i.append(o,e[o]);let n=this._globalService.headersBuilder(!0,i,!0);return this._http.put(`${this.url}/admin`,i,n).pipe((0,A.X)(0))}create(e){let i=new FormData;for(let o in e)i.append(o,e[o]);let n=this._globalService.headersBuilder(!0,i,!0);return this._http.post(`${this.url}/admin`,i,n).pipe((0,A.X)(0))}}return l.\u0275fac=function(e){return new(e||l)(t.LFG(Z.U),t.LFG(F.eN))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();function y(l,r){if(1&l&&(t.TgZ(0,"div",9),t.TgZ(1,"span",10),t._uU(2),t.qZA(),t.qZA()),2&l){const e=r.$implicit;t.xp6(2),t.hij(" ",e.name," ")}}let T=(()=>{class l{constructor(e,i,n){this._ref=e,this._config=i,this._albumService=n,this.form=new s.cw({id:new s.NI(null),title:new s.NI("",s.kI.required),band_id:new s.NI(null,s.kI.required),file:new s.NI(null)}),this.loading=!1}ngOnInit(){this._config.data&&this.form.patchValue(this._config.data)}uploadFile(e){this.form.patchValue({file:e.files[0]})}deleteFile(e){this.form.patchValue({file:null}),this.inputUpload&&(this.inputUpload.uploadedFileCount=0)}onSubmit(){this.form.valid&&(this.form.value.id?this._albumService.update(this.form.value).subscribe(e=>{console.log(e),this._ref.close(e.data)}):this._albumService.create(this.form.value).subscribe(e=>{console.log(e),this._ref.close(e.data)}))}}return l.\u0275fac=function(e){return new(e||l)(t.Y36(u.E7),t.Y36(u.S),t.Y36(f))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-form"]],viewQuery:function(e,i){if(1&e&&t.Gf(d.p,5),2&e){let n;t.iGM(n=t.CRH())&&(i.inputUpload=n.first)}},decls:12,vars:9,consts:[[1,"flex","flex-column",3,"formGroup","ngSubmit"],[1,"p-fluid","my-1"],[1,"p-field","mb-2"],["for","title"],["formControlName","title","pInputText","","placeholder","Ej: Be Here Now"],["for","message"],["name","file","uploadLabel","Subir archivos","chooseLabel","Seleccionar archivo","cancelLabel","Cancelar","styleClass","theme",3,"customUpload","multiple","fileLimit","showUploadButton","onSelect","onRemove","onClear"],["pTemplate","file"],["pButton","","type","submit",1,"p-button-primary","align-self-end",3,"disabled","icon","iconPos","label"],[1,"p-d-flex","p-align-center"],[1,"p-ml-3"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"label",3),t._uU(4," Nombre del album "),t.qZA(),t._UZ(5,"input",4),t.qZA(),t.TgZ(6,"div",2),t.TgZ(7,"label",5),t._uU(8," Imagen del album "),t.qZA(),t.TgZ(9,"p-fileUpload",6),t.NdJ("onSelect",function(o){return i.uploadFile(o)})("onRemove",function(o){return i.deleteFile(o)})("onClear",function(o){return i.deleteFile(o)}),t.YNc(10,y,3,1,"ng-template",7),t.qZA(),t.qZA(),t.qZA(),t._UZ(11,"button",8),t.qZA()),2&e&&(t.Q6J("formGroup",i.form),t.xp6(9),t.Q6J("customUpload",!0)("multiple",!1)("fileLimit",1)("showUploadButton",!1),t.xp6(2),t.Q6J("disabled",!i.form.valid||i.loading)("icon","pi "+(i.loading?"pi-spin pi-spinner":"pi-check"))("iconPos","right")("label",i.loading?i.form.value.id?"Editando album...":"Agregando album...":i.form.value.id?"Editar album":"Agregar album"))},directives:[s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,v.o,d.p,m.jx,c.Hq],styles:[""]}),l})();var U=a(6551);function L(l,r){if(1&l){const e=t.EpF();t.TgZ(0,"div",10),t.TgZ(1,"h1"),t._uU(2," Lista de albums "),t.qZA(),t.TgZ(3,"button",11),t.NdJ("click",function(){return t.CHM(e),t.oxw().addAlbum()}),t._UZ(4,"i",12),t._uU(5," Nuevo album "),t.qZA(),t.qZA()}}function x(l,r){1&l&&(t.TgZ(0,"tr"),t.TgZ(1,"th"),t._uU(2,"Imagen"),t.qZA(),t.TgZ(3,"th",13),t._uU(4,"Albums"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Acci\xf3n"),t.qZA(),t.qZA())}const B=function(l){return["/admin","sound",l]};function N(l,r){if(1&l){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._UZ(2,"img",14),t.ALo(3,"imageSrc"),t.qZA(),t.TgZ(4,"td",13),t._uU(5),t.qZA(),t.TgZ(6,"td"),t.TgZ(7,"div",15),t._UZ(8,"button",16),t.TgZ(9,"button",17),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.oxw().editAlbum(o)}),t.qZA(),t.TgZ(10,"button",18),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.oxw().deleteAlbum(o)}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&l){const e=r.$implicit;t.xp6(2),t.Q6J("src",t.lcZ(3,3,null==e?null:e.file_url),t.LSH),t.xp6(3),t.Oqu(e.title),t.xp6(3),t.Q6J("routerLink",t.VKq(5,B,e.id))}}const J=function(){return["../../band"]},q=function(){return["title","description"]};let Y=(()=>{class l{constructor(e,i,n,o,b){this.globalService=e,this._albumService=i,this._dialogService=n,this._confirmationService=o,this._activatedRoute=b,this.albums=[],this.loading=!1,this.band_id=0}ngOnInit(){this._activatedRoute.params.subscribe(e=>{this.band_id=e.id,this.getAlbums()})}getAlbums(){this.loading=!0,this._albumService.getByBand(this.band_id).subscribe(e=>{200==e.status&&(this.albums=e.data,this.loading=!1)})}editAlbum(e){this._dialogService.open(T,{header:"Editar albuma",data:e}).onClose.subscribe(n=>{n&&(this.albums=this.albums.map(o=>o.id==e.id?n:o))})}deleteAlbum(e){this._confirmationService.confirm({message:"\xbfEst\xe1 seguro que desea eliminar la albuma?",rejectButtonStyleClass:"p-button-outline",accept:()=>{this._albumService.delete(e.id).subscribe(i=>{200==i.status&&(this.albums=this.albums.filter(n=>n.id!=e.id))})}})}addAlbum(){this._dialogService.open(T,{header:"Nueva albuma",data:{band_id:this.band_id}}).onClose.subscribe(i=>{i&&(this.albums=[...this.albums,i])})}}return l.\u0275fac=function(e){return new(e||l)(t.Y36(Z.U),t.Y36(f),t.Y36(u.xA),t.Y36(m.YP),t.Y36(p.gz))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-album-list"]],decls:10,vars:8,consts:[[1,"container"],[1,"my-5","flex","justify-content-between"],["pButton","","type","button","label","Volver","icon","pi pi-angle-left",3,"routerLink"],["pButton","","type","button","label","Cerrar sesi\xf3n","icon","pi pi-power-off",1,"align-self-end",3,"click"],[3,"globalFilterFields","value","rows","paginator","loading"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["header","Confirmaci\xf3n","icon","pi pi-exclamation-triangle"],[1,"flex","justify-content-between","align-items-center"],["pButton","",3,"click"],[1,"pi","pi-plus"],[2,"width","90%"],["alt","album","width","100",1,"table-img",3,"src"],[1,"inline-flex","justify-content-between"],["pButton","","type","button","icon","pi pi-list",1,"p-button-primary","mr-2",3,"routerLink"],["pButton","","type","button","icon","pi pi-pencil",1,"p-button-info","mr-2",3,"click"],["pButton","","type","button","icon","pi pi-trash",1,"p-button-danger","mr-2",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"button",2),t.TgZ(3,"button",3),t.NdJ("click",function(){return i.globalService.logout()}),t.qZA(),t.qZA(),t.TgZ(4,"p-table",4,5),t.YNc(6,L,6,0,"ng-template",6),t.YNc(7,x,7,0,"ng-template",7),t.YNc(8,N,11,7,"ng-template",8),t.qZA(),t.qZA(),t._UZ(9,"p-confirmDialog",9)),2&e&&(t.xp6(2),t.Q6J("routerLink",t.DdM(6,J)),t.xp6(2),t.Q6J("globalFilterFields",t.DdM(7,q))("value",i.albums)("rows",10)("paginator",!0)("loading",i.loading))},directives:[c.Hq,p.rH,h.iA,m.jx,_.Q],pipes:[U.U],styles:[""]}),l})();var $=a(3350);const I=[{path:":id",component:Y}];let j=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({providers:[f,u.xA,m.YP],imports:[[C.ez,h.U$,c.hJ,v.j,S.A,s.u5,s.UX,_.D,p.Bz.forChild(I),u.DL,$.F,d.O]]}),l})()}}]);