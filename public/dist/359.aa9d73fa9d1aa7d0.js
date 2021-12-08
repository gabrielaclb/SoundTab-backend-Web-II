"use strict";(self.webpackChunksoundtab_frontend=self.webpackChunksoundtab_frontend||[]).push([[359],{3359:(M,h,l)=>{l.r(h),l.d(h,{SoundModule:()=>$});var p=l(6019),u=l(7537),m=l(7218),t=l(2383),d=l(6504),T=l(5612),g=l(5542),F=l(4522);let f=(()=>{class o{constructor(e,i){this._globalService=e,this._http=i,this.url=this._globalService.apiUrl+"/sound"}getAll(){console.log(this.url);let e=this._globalService.headersBuilder(!0);return this._http.get(`${this.url}`,e)}getByAlbum(e){let i=this._globalService.headersBuilder(!0);return this._http.get(`${this.url}/album/id/${e}`,i)}get(e){let i=this._globalService.headersBuilder(!0);return this._http.get(`${this.url}/id/${e}`,i)}delete(e){let i=this._globalService.headersBuilder(!0);return this._http.delete(`${this.url}/admin/id/${e}`,i)}update(e){let i=JSON.stringify(e),n=this._globalService.headersBuilder(!0,i);return this._http.put(`${this.url}/admin`,i,n)}create(e){let i=new FormData;for(let s in e)i.append(s,e[s]);let n=this._globalService.headersBuilder(!0,i,!0);return this._http.post(`${this.url}/admin/create`,i,n).pipe((0,T.X)(0))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(g.U),t.LFG(F.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var v=l(7043),_=l(4750),c=l(481);function x(o,r){if(1&o&&(t.TgZ(0,"div",10),t.TgZ(1,"span",11),t._uU(2),t.qZA(),t.qZA()),2&o){const e=r.$implicit;t.xp6(2),t.hij(" ",e.name," ")}}function y(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",2),t.TgZ(1,"label",7),t._uU(2," Canci\xf3n "),t.qZA(),t.TgZ(3,"p-fileUpload",8),t.NdJ("onSelect",function(n){return t.CHM(e),t.oxw().uploadFile(n)})("onRemove",function(n){return t.CHM(e),t.oxw().deleteFile(n)})("onClear",function(n){return t.CHM(e),t.oxw().deleteFile(n)}),t.YNc(4,x,3,1,"ng-template",9),t.qZA(),t.qZA()}2&o&&(t.xp6(3),t.Q6J("customUpload",!0)("multiple",!1)("fileLimit",1)("showUploadButton",!1))}let b=(()=>{class o{constructor(e,i,n){this._ref=e,this._config=i,this._soundService=n,this.form=new u.cw({id:new u.NI(null),title:new u.NI("",u.kI.required),album_id:new u.NI(null,u.kI.required),file:new u.NI}),this.loading=!1}ngOnInit(){this._config.data&&this.form.patchValue(this._config.data)}uploadFile(e){this.form.patchValue({file:e.files[0]})}deleteFile(e){this.form.patchValue({file:null}),this.inputUpload&&(this.inputUpload.uploadedFileCount=0)}onSubmit(){this.form.valid&&(this.form.value.id?this._soundService.update(this.form.value).subscribe(e=>{this._ref.close(e.data)}):this._soundService.create(this.form.value).subscribe(e=>{this._ref.close(e.data)}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.E7),t.Y36(d.S),t.Y36(f))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-form"]],viewQuery:function(e,i){if(1&e&&t.Gf(m.p,5),2&e){let n;t.iGM(n=t.CRH())&&(i.inputUpload=n.first)}},decls:8,vars:6,consts:[[1,"flex","flex-column",3,"formGroup","ngSubmit"],[1,"p-fluid","my-1"],[1,"p-field","mb-2"],["for","title"],["formControlName","title","pInputText","","placeholder","Ej: Wonderwall"],["class","p-field mb-2",4,"ngIf"],["pButton","","type","submit",1,"p-button-primary","align-self-end",3,"disabled","icon","iconPos","label"],["for","message"],["name","file","uploadLabel","Subir archivos","chooseLabel","Seleccionar archivo","cancelLabel","Cancelar","styleClass","theme",3,"customUpload","multiple","fileLimit","showUploadButton","onSelect","onRemove","onClear"],["pTemplate","file"],[1,"p-d-flex","p-align-center"],[1,"p-ml-3"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"label",3),t._uU(4," Nombre de la canci\xf3n "),t.qZA(),t._UZ(5,"input",4),t.qZA(),t.YNc(6,y,5,4,"div",5),t.qZA(),t._UZ(7,"button",6),t.qZA()),2&e&&(t.Q6J("formGroup",i.form),t.xp6(6),t.Q6J("ngIf",!i.form.value.id),t.xp6(1),t.Q6J("disabled",!i.form.valid||i.loading)("icon","pi "+(i.loading?"pi-spin pi-spinner":"pi-check"))("iconPos","right")("label",i.loading?i.form.value.id?"Editando canci\xf3n...":"Agregando canci\xf3n...":i.form.value.id?"Editar canci\xf3n":"Agregar canci\xf3n"))},directives:[u._Y,u.JL,u.sg,u.Fj,u.JJ,u.u,v.o,p.O5,_.Hq,m.p,c.jx],styles:[""]}),o})();var S=l(7962),A=l(9279),Z=l(5506),C=l(6651);function U(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",10),t.TgZ(1,"h1"),t._uU(2," Lista de canciones "),t.qZA(),t.TgZ(3,"button",11),t.NdJ("click",function(){return t.CHM(e),t.oxw().addSound()}),t._UZ(4,"i",12),t._uU(5," Nueva canci\xf3n "),t.qZA(),t.qZA()}}function N(o,r){1&o&&(t.TgZ(0,"tr"),t.TgZ(1,"th",13),t._uU(2,"Nombre"),t.qZA(),t.TgZ(3,"th",14),t._uU(4,"Reproducciones"),t.qZA(),t.TgZ(5,"th",14),t._uU(6,"Acci\xf3n"),t.qZA(),t.qZA())}function L(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td",13),t._uU(2),t.qZA(),t.TgZ(3,"td",14),t._uU(4),t.qZA(),t.TgZ(5,"td"),t.TgZ(6,"div",15),t.TgZ(7,"button",16),t.NdJ("click",function(){const s=t.CHM(e).$implicit,a=t.oxw();return a.sound_id_active==s.id?a.stopSound():a.playSound(s)}),t.qZA(),t.TgZ(8,"button",17),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().editSound(s)}),t.qZA(),t.TgZ(9,"button",18),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().deleteSound(s)}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=r.$implicit,i=t.oxw();t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Oqu(e.reproduction_quantity),t.xp6(3),t.Q6J("icon",i.sound_id_active==e.id?"pi pi-pause":"pi pi-play")}}const q=function(){return["title","description"]};let B=(()=>{class o{constructor(e,i,n,s,a,w,k){this.globalService=e,this._soundService=i,this._dialogService=n,this._confirmationService=s,this._activatedRoute=a,this._location=w,this._reproductorService=k,this.sounds=[],this.loading=!1,this.album_id=0,this.sound_id_active=0}ngOnInit(){this._activatedRoute.params.subscribe(e=>{this.album_id=e.id,this.getsounds()})}getsounds(){this.loading=!0,this._soundService.getByAlbum(this.album_id).subscribe(e=>{200==e.status&&(this.sounds=e.data,this.loading=!1)})}editSound(e){this._dialogService.open(b,{header:"Editar sounda",data:e}).onClose.subscribe(n=>{n&&(this.sounds=this.sounds.map(s=>s.id==e.id?n:s))})}deleteSound(e){this._confirmationService.confirm({message:"\xbfEst\xe1 seguro que desea eliminar la sounda?",rejectButtonStyleClass:"p-button-outline",accept:()=>{this._soundService.delete(e.id).subscribe(i=>{200==i.status&&(this.sounds=this.sounds.filter(n=>n.id!=e.id))})}})}addSound(){this._dialogService.open(b,{header:"Nueva sounda",data:{album_id:this.album_id}}).onClose.subscribe(i=>{i&&(this.sounds=[...this.sounds,i])})}playSound(e){this.sound_id_active=e.id,this._reproductorService.playSound(e.file_url)}stopSound(){this.sound_id_active=0,this._reproductorService.stopReproductor()}back(){this._location.back()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.U),t.Y36(f),t.Y36(d.xA),t.Y36(c.YP),t.Y36(S.gz),t.Y36(p.Ye),t.Y36(A.l))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-sound-list"]],decls:10,vars:6,consts:[[1,"container"],[1,"my-5","flex","justify-content-between"],["pButton","","type","button","label","Volver","icon","pi pi-angle-left",3,"click"],["pButton","","type","button","label","Cerrar sesi\xf3n","icon","pi pi-power-off",1,"align-self-end",3,"click"],[3,"globalFilterFields","value","rows","paginator","loading"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["header","Confirmaci\xf3n","icon","pi pi-exclamation-triangle"],[1,"flex","justify-content-between","align-items-center"],["pButton","",3,"click"],[1,"pi","pi-plus"],[2,"width","70%"],[2,"text-align","center"],[1,"flex","justify-content-center"],["pButton","","type","button",1,"p-button-info","mr-2",3,"icon","click"],["pButton","","type","button","icon","pi pi-pencil",1,"p-button-info","mr-2",3,"click"],["pButton","","type","button","icon","pi pi-trash",1,"p-button-danger",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"button",2),t.NdJ("click",function(){return i.back()}),t.qZA(),t.TgZ(3,"button",3),t.NdJ("click",function(){return i.globalService.logout()}),t.qZA(),t.qZA(),t.TgZ(4,"p-table",4,5),t.YNc(6,U,6,0,"ng-template",6),t.YNc(7,N,7,0,"ng-template",7),t.YNc(8,L,10,3,"ng-template",8),t.qZA(),t.qZA(),t._UZ(9,"p-confirmDialog",9)),2&e&&(t.xp6(4),t.Q6J("globalFilterFields",t.DdM(5,q))("value",i.sounds)("rows",10)("paginator",!0)("loading",i.loading))},directives:[_.Hq,Z.iA,c.jx,C.Q],styles:[""]}),o})();var J=l(3350);const Y=[{path:":id",component:B}];let $=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[f,d.xA,c.YP],imports:[[p.ez,Z.U$,_.hJ,v.j,u.u5,u.UX,C.D,S.Bz.forChild(Y),d.DL,J.F,m.O]]}),o})()}}]);