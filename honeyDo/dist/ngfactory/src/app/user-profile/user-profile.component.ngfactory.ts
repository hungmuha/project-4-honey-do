/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './user-profile.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from '../../../../../src/app/user-profile/user-profile.component';
import * as i4 from '@angular/forms';
import * as i5 from '@angular/router';
import * as i6 from '../../../../../src/app/main/main.service';
const styles_UserProfileComponent:any[] = [i0.styles];
export const RenderType_UserProfileComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_UserProfileComponent,data:{}});
function View_UserProfileComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),6,'div',[['class',
      'container']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n\n	'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          1,'h3',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted((null as any),['',''])),(_l()(),i1.ɵted((null as any),
          ['\n	'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),0,'img',[['alt',
          'your face']],[[8,'src',4]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.currentUser.userName;
    _ck(_v,3,0,currVal_0);
    const currVal_1:any = i1.ɵinlineInterpolate(1,'',_co.currentUser.image,'');
    _ck(_v,5,0,currVal_1);
  });
}
function View_UserProfileComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),9,'div',[['class',
      'container']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n		'])),(_l()(),i1.ɵted((null as any),['\n				'])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),1,'h3',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['',''])),(_l()(),i1.ɵted((null as any),['\n				'])),(_l()(),i1.ɵted((null as any),
          ['\n				'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),0,'img',([] as any[]),
          [[8,'src',4]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['	\n		'])),(_l()(),i1.ɵted((null as any),['\n']))],
      (null as any),(_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.partnerInfo.userName;
        _ck(_v,4,0,currVal_0);
        const currVal_1:any = i1.ɵinlineInterpolate(1,'',_co.partnerInfo.image,'');
        _ck(_v,7,0,currVal_1);
      });
}
export function View_UserProfileComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵted((null as any),['\n'])),(_l()(),i1.ɵted((null as any),
      ['\n\n'])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_UserProfileComponent_1)),i1.ɵdid(16384,(null as any),0,i2.NgIf,[i1.ViewContainerRef,
      i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),
      ['\n\n'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),21,'div',[['class',
      'container']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n	'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          18,'form',[['novalidate','']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',
              (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
              [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
                  (null as any)]],[[(null as any),'ngSubmit'],[(null as any),'submit'],
              [(null as any),'reset']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i3.UserProfileComponent = _v.component;
            if (('submit' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,9).onSubmit($event)) !== false);
              ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,9).onReset()) !== false);
              ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
              const pd_2:any = ((<any>_co.findPartner(_co.partnerName)) !== false);
              ad = (pd_2 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i4.ɵbf,([] as any[]),
          (null as any),(null as any)),i1.ɵdid(16384,(null as any),0,i4.NgForm,[[8,
          (null as any)],[8,(null as any)]],(null as any),{ngSubmit:'ngSubmit'}),i1.ɵprd(2048,
          (null as any),i4.ControlContainer,(null as any),[i4.NgForm]),i1.ɵdid(16384,
          (null as any),0,i4.NgControlStatusGroup,[i4.ControlContainer],(null as any),
          (null as any)),(_l()(),i1.ɵted((null as any),['\n		'])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),1,'h2',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          [' Search for your partner '])),(_l()(),i1.ɵted((null as any),['\n		'])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),5,'input',[['name','partner name'],
          ['placeholder','add name'],['type','text']],[[2,'ng-untouched',(null as any)],
          [2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',
              (null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],
          [2,'ng-pending',(null as any)]],[[(null as any),'ngModelChange'],[(null as any),
          'input'],[(null as any),'blur'],[(null as any),'compositionstart'],[(null as any),
          'compositionend']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i3.UserProfileComponent = _v.component;
        if (('input' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,17)._handleInput($event.target.value)) !== false);
          ad = (pd_0 && ad);
        }
        if (('blur' === en)) {
          const pd_1:any = ((<any>i1.ɵnov(_v,17).onTouched()) !== false);
          ad = (pd_1 && ad);
        }
        if (('compositionstart' === en)) {
          const pd_2:any = ((<any>i1.ɵnov(_v,17)._compositionStart()) !== false);
          ad = (pd_2 && ad);
        }
        if (('compositionend' === en)) {
          const pd_3:any = ((<any>i1.ɵnov(_v,17)._compositionEnd($event.target.value)) !== false);
          ad = (pd_3 && ad);
        }
        if (('ngModelChange' === en)) {
          const pd_4:any = ((<any>(_co.partnerName = $event)) !== false);
          ad = (pd_4 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i4.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i4.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵprd(1024,(null as any),i4.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i4.DefaultValueAccessor]),i1.ɵdid(671744,(null as any),0,i4.NgModel,[[2,i4.ControlContainer],
          [8,(null as any)],[8,(null as any)],[2,i4.NG_VALUE_ACCESSOR]],{name:[0,'name'],
          model:[1,'model']},{update:'ngModelChange'}),i1.ɵprd(2048,(null as any),
          i4.NgControl,(null as any),[i4.NgModel]),i1.ɵdid(16384,(null as any),0,i4.NgControlStatus,
          [i4.NgControl],(null as any),(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n		'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'button',[['class',
          'btn btn-primary btn-sm'],['type','submit']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['Add'])),(_l()(),i1.ɵted((null as any),['\n	'])),(_l()(),i1.ɵted((null as any),
          ['\n'])),(_l()(),i1.ɵted((null as any),['\n\n'])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_UserProfileComponent_2)),
      i1.ɵdid(16384,(null as any),0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),['\n\n\n'])),(_l()(),
          i1.ɵeld(0,(null as any),(null as any),30,'div',[['class','container']],(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n	'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),21,'form',[['novalidate',
          '']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],[2,
          'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',
          (null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],
          [[(null as any),'ngSubmit'],[(null as any),'submit'],[(null as any),'reset']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:i3.UserProfileComponent = _v.component;
            if (('submit' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,35).onSubmit($event)) !== false);
              ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,35).onReset()) !== false);
              ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
              const pd_2:any = ((<any>_co.createGame(_co.game)) !== false);
              ad = (pd_2 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i4.ɵbf,([] as any[]),
          (null as any),(null as any)),i1.ɵdid(16384,(null as any),0,i4.NgForm,[[8,
          (null as any)],[8,(null as any)]],(null as any),{ngSubmit:'ngSubmit'}),i1.ɵprd(2048,
          (null as any),i4.ControlContainer,(null as any),[i4.NgForm]),i1.ɵdid(16384,
          (null as any),0,i4.NgControlStatusGroup,[i4.ControlContainer],(null as any),
          (null as any)),(_l()(),i1.ɵted((null as any),['\n		'])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),1,'h2',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          [' Create New Game '])),(_l()(),i1.ɵted((null as any),['\n		'])),(_l()(),
          i1.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['If you don\'t have an on running game click "Start New Game"'])),(_l()(),
          i1.ɵted((null as any),['\n		'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          5,'input',[['name','game\'s name'],['placeholder','add name'],['type','text']],
          [[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',
              (null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],
              [2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],[[(null as any),
              'ngModelChange'],[(null as any),'input'],[(null as any),'blur'],[(null as any),
              'compositionstart'],[(null as any),'compositionend']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i3.UserProfileComponent = _v.component;
            if (('input' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,46)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,46).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,46)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i1.ɵnov(_v,46)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
              const pd_4:any = ((<any>(_co.game.gameName = $event)) !== false);
              ad = (pd_4 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i4.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i4.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵprd(1024,(null as any),i4.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i4.DefaultValueAccessor]),i1.ɵdid(671744,(null as any),0,i4.NgModel,[[2,i4.ControlContainer],
          [8,(null as any)],[8,(null as any)],[2,i4.NG_VALUE_ACCESSOR]],{name:[0,'name'],
          model:[1,'model']},{update:'ngModelChange'}),i1.ɵprd(2048,(null as any),
          i4.NgControl,(null as any),[i4.NgModel]),i1.ɵdid(16384,(null as any),0,i4.NgControlStatus,
          [i4.NgControl],(null as any),(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n		'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'button',[['class',
          'btn btn-primary btn-sm'],['type','submit']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['Start New Game'])),(_l()(),i1.ɵted((null as any),['\n	'])),(_l()(),i1.ɵted((null as any),
          ['\n'])),(_l()(),i1.ɵted((null as any),['\n	'])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),3,'button',[['class','btn btn-primary btn-sm']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),2,'a',([] as any[]),[[1,'target',0],[8,'href',
              4]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,59).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(671744,(null as any),0,i5.RouterLinkWithHref,
          [i5.Router,i5.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i1.ɵted((null as any),['Resume Game'])),(_l()(),i1.ɵted((null as any),
          ['\n'])),(_l()(),i1.ɵted((null as any),['\n']))],(_ck,_v) => {
    var _co:i3.UserProfileComponent = _v.component;
    const currVal_0:any = _co.currentUser;
    _ck(_v,3,0,currVal_0);
    const currVal_15:any = 'partner name';
    const currVal_16:any = _co.partnerName;
    _ck(_v,19,0,currVal_15,currVal_16);
    const currVal_17:any = _co.partnerInfo;
    _ck(_v,29,0,currVal_17);
    const currVal_32:any = 'game\'s name';
    const currVal_33:any = _co.game.gameName;
    _ck(_v,48,0,currVal_32,currVal_33);
    const currVal_36:any = i1.ɵinlineInterpolate(1,'/GamePage/',_co.currentUser.gameId,
        '');
    _ck(_v,59,0,currVal_36);
  },(_ck,_v) => {
    const currVal_1:any = i1.ɵnov(_v,11).ngClassUntouched;
    const currVal_2:any = i1.ɵnov(_v,11).ngClassTouched;
    const currVal_3:any = i1.ɵnov(_v,11).ngClassPristine;
    const currVal_4:any = i1.ɵnov(_v,11).ngClassDirty;
    const currVal_5:any = i1.ɵnov(_v,11).ngClassValid;
    const currVal_6:any = i1.ɵnov(_v,11).ngClassInvalid;
    const currVal_7:any = i1.ɵnov(_v,11).ngClassPending;
    _ck(_v,7,0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7);
    const currVal_8:any = i1.ɵnov(_v,21).ngClassUntouched;
    const currVal_9:any = i1.ɵnov(_v,21).ngClassTouched;
    const currVal_10:any = i1.ɵnov(_v,21).ngClassPristine;
    const currVal_11:any = i1.ɵnov(_v,21).ngClassDirty;
    const currVal_12:any = i1.ɵnov(_v,21).ngClassValid;
    const currVal_13:any = i1.ɵnov(_v,21).ngClassInvalid;
    const currVal_14:any = i1.ɵnov(_v,21).ngClassPending;
    _ck(_v,16,0,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14);
    const currVal_18:any = i1.ɵnov(_v,37).ngClassUntouched;
    const currVal_19:any = i1.ɵnov(_v,37).ngClassTouched;
    const currVal_20:any = i1.ɵnov(_v,37).ngClassPristine;
    const currVal_21:any = i1.ɵnov(_v,37).ngClassDirty;
    const currVal_22:any = i1.ɵnov(_v,37).ngClassValid;
    const currVal_23:any = i1.ɵnov(_v,37).ngClassInvalid;
    const currVal_24:any = i1.ɵnov(_v,37).ngClassPending;
    _ck(_v,33,0,currVal_18,currVal_19,currVal_20,currVal_21,currVal_22,currVal_23,
        currVal_24);
    const currVal_25:any = i1.ɵnov(_v,50).ngClassUntouched;
    const currVal_26:any = i1.ɵnov(_v,50).ngClassTouched;
    const currVal_27:any = i1.ɵnov(_v,50).ngClassPristine;
    const currVal_28:any = i1.ɵnov(_v,50).ngClassDirty;
    const currVal_29:any = i1.ɵnov(_v,50).ngClassValid;
    const currVal_30:any = i1.ɵnov(_v,50).ngClassInvalid;
    const currVal_31:any = i1.ɵnov(_v,50).ngClassPending;
    _ck(_v,45,0,currVal_25,currVal_26,currVal_27,currVal_28,currVal_29,currVal_30,
        currVal_31);
    const currVal_34:any = i1.ɵnov(_v,59).target;
    const currVal_35:any = i1.ɵnov(_v,59).href;
    _ck(_v,58,0,currVal_34,currVal_35);
  });
}
export function View_UserProfileComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'app-user-profile',
      ([] as any[]),(null as any),(null as any),(null as any),View_UserProfileComponent_0,
      RenderType_UserProfileComponent)),i1.ɵdid(114688,(null as any),0,i3.UserProfileComponent,
      [i5.ActivatedRoute,i6.MainService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const UserProfileComponentNgFactory:i1.ComponentFactory<i3.UserProfileComponent> = i1.ɵccf('app-user-profile',
    i3.UserProfileComponent,View_UserProfileComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2h1bmdtdWhhbWF0aC9Ib21lV29yay9wcm9qZWN0LTQvaG9uZXlEby9zcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2h1bmdtdWhhbWF0aC9Ib21lV29yay9wcm9qZWN0LTQvaG9uZXlEby9zcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnRzIiwibmc6Ly8vVXNlcnMvaHVuZ211aGFtYXRoL0hvbWVXb3JrL3Byb2plY3QtNC9ob25leURvL3NyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2h1bmdtdWhhbWF0aC9Ib21lV29yay9wcm9qZWN0LTQvaG9uZXlEby9zcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnRzLlVzZXJQcm9maWxlQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG48IS0tIDxoMT57e3VzZXJOYW1lfX08L2gxPiAtLT5cblxuPGRpdiAqbmdJZj1cImN1cnJlbnRVc2VyXCIgY2xhc3M9XCJjb250YWluZXJcIj5cblxuXHQ8aDM+e3tjdXJyZW50VXNlci51c2VyTmFtZX19PC9oMz5cblx0PGltZyBzcmMgPSB7e2N1cnJlbnRVc2VyLmltYWdlfX0gYWx0PVwieW91ciBmYWNlXCI+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHQ8Zm9ybSAobmdTdWJtaXQpPVwiZmluZFBhcnRuZXIocGFydG5lck5hbWUpXCI+XG5cdFx0PGgyPiBTZWFyY2ggZm9yIHlvdXIgcGFydG5lciA8L2gyPlxuXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiYWRkIG5hbWVcIlsobmdNb2RlbCldPVwicGFydG5lck5hbWVcIiBuYW1lPVwicGFydG5lciBuYW1lXCI+XG5cdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCI+QWRkPC9idXR0b24+XG5cdDwvZm9ybT5cbjwvZGl2PlxuXG48ZGl2ICpuZ0lmPVwicGFydG5lckluZm9cIiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdDwhLS0gPGgyPlNlYXJjaCBSZXN1bHRzPC9oMj4gLS0+XG5cdFx0XHRcdDxoMz57e3BhcnRuZXJJbmZvLnVzZXJOYW1lfX08L2gzPlxuXHRcdFx0XHQ8IS0tIDxoNT57e3BhcnRuZXJJbmZvLmlkfX08L2g1PiAtLT5cblx0XHRcdFx0PGltZyBzcmM9e3twYXJ0bmVySW5mby5pbWFnZX19Plx0XG5cdFx0PCEtLSA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj4gLS0+XG48L2Rpdj5cblxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdDxmb3JtIChuZ1N1Ym1pdCk9XCJjcmVhdGVHYW1lKGdhbWUpXCI+XG5cdFx0PGgyPiBDcmVhdGUgTmV3IEdhbWUgPC9oMj5cblx0XHQ8cD5JZiB5b3UgZG9uJ3QgaGF2ZSBhbiBvbiBydW5uaW5nIGdhbWUgY2xpY2sgXCJTdGFydCBOZXcgR2FtZVwiPC9wPlxuXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiYWRkIG5hbWVcIlsobmdNb2RlbCldPVwiZ2FtZS5nYW1lTmFtZVwiIG5hbWU9XCJnYW1lJ3MgbmFtZVwiPlxuXHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiPlN0YXJ0IE5ldyBHYW1lPC9idXR0b24+XG5cdDwvZm9ybT5cbjwhLS0gXHQ8Zm9ybSAobmdTdWJtaXQpPVwicmVzdW1lR2FtZSgpXCI+XG5cdFx0PGgyPiBSZXN1bWUgR2FtZTwvaDI+XG5cdFx0PHA+IElmIHlvdSBoYXZlIGFuIG9uIGdvaW5nIGdhbWUgY2xpY2sgXCJSZXN1bWUgR2FtZVwiPC9wPlxuXHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlJlc3VtZSBHYW1lPC9idXR0b24+XG5cdDwvZm9ybT4gLS0+XG5cdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCI+PGEgcm91dGVyTGluaz1cIi9HYW1lUGFnZS97e2N1cnJlbnRVc2VyLmdhbWVJZH19XCI+UmVzdW1lIEdhbWU8L2E+PC9idXR0b24+XG48L2Rpdj5cbiIsIjxhcHAtdXNlci1wcm9maWxlPjwvYXBwLXVzZXItcHJvZmlsZT4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0dBO01BQUE7TUFBMkMsMENBRTFDO1VBQUE7VUFBQSxnQkFBSSx3Q0FBNkI7VUFBQSxVQUNqQztVQUFBO01BQWlEOztJQUQ3QztJQUFBO0lBQ0M7SUFBTCxXQUFLLFNBQUw7Ozs7b0JBV0Q7TUFBQTtNQUEyQyx5Q0FDVDtNQUM5QjtVQUFBLDBEQUFJO1VBQUEsVUFBNkIsMkNBQ0c7VUFBQSxhQUNwQztVQUFBO01BQStCLDBDQUNVOzs7UUFIckM7UUFBQTtRQUVDO1FBQUwsV0FBSyxTQUFMOzs7O29CQXJCSix1Q0FDOEI7TUFBQSxXQUU5QjtNQUFBLHFDQUFBO29CQUFBLG1DQUlNO01BQUEsV0FFTjtNQUFBO01BQXVCLHdDQUN0QjtVQUFBO2NBQUE7Y0FBQTtrQkFBQTtjQUFBO1lBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBTTtjQUFBO2NBQUE7WUFBQTtZQUFOO1VBQUEsdUNBQUE7VUFBQSxvQ0FBQTtVQUFBLDhFQUFBO1VBQUEsb0VBQUE7VUFBQTtVQUFBLGVBQTRDLHlDQUMzQztVQUFBO1VBQUEsNENBQUk7VUFBQSxnQ0FBOEI7TUFDbEM7VUFBQTtVQUFBO2NBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBeUM7VUFBQTtVQUFBO1FBQUE7UUFBekM7TUFBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUE7UUFBQTtNQUFBLG9DQUFBO1VBQUE7VUFBQSxvREFBQTt1QkFBQSxtQ0FBQTtVQUFBLDRDQUF1RjtVQUFBLFdBQ3ZGO1VBQUE7VUFBQSw0Q0FBcUQ7VUFBQSxVQUFZLHdDQUMzRDtVQUFBLFNBQ0YseUNBRU47VUFBQTthQUFBO1VBQUEsd0JBTU0sMkNBR047aUJBQUE7Y0FBQSwwREFBdUI7VUFBQSxVQUN0QjtVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFNO2NBQUE7Y0FBQTtZQUFBO1lBQU47VUFBQSx1Q0FBQTtVQUFBLG9DQUFBO1VBQUEsOEVBQUE7VUFBQSxvRUFBQTtVQUFBO1VBQUEsZUFBb0MseUNBQ25DO1VBQUE7VUFBQSw0Q0FBSTtVQUFBLHdCQUFzQix5Q0FDMUI7aUJBQUE7Y0FBQSwwREFBRztVQUFBLG1FQUErRDtpQkFBQSwwQkFDbEU7VUFBQTtVQUFBO2NBQUE7Y0FBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBeUM7Y0FBQTtjQUFBO1lBQUE7WUFBekM7VUFBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUE7UUFBQTtNQUFBLG9DQUFBO1VBQUE7VUFBQSxvREFBQTt1QkFBQSxtQ0FBQTtVQUFBLDRDQUF3RjtVQUFBLFdBQ3hGO1VBQUE7VUFBQSw0Q0FBcUQ7VUFBQSxxQkFBdUIsd0NBQ3RFO1VBQUEsU0FLSSx3Q0FDWDtVQUFBO1VBQUEsMERBQXVDO1VBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtrQkFBQTtjQUFBO1lBQUE7WUFBQTtVQUFBLHVDQUFBO1VBQUE7VUFBQSxlQUFpRCxnREFBd0I7VUFBQSxTQUMzRzs7SUFwQ0Q7SUFBTCxXQUFLLFNBQUw7SUFTcUU7SUFBMUI7SUFBekMsWUFBbUUsV0FBMUIsVUFBekM7SUFLRztJQUFMLFlBQUssVUFBTDtJQWF1RTtJQUE1QjtJQUF6QyxZQUFxRSxXQUE1QixVQUF6QztJQVF5QztRQUFBO0lBQUgsWUFBRyxVQUFIOztJQTVCdkM7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxXQUFBLHFFQUFBO0lBRUM7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxZQUFBLDBFQUFBO0lBZUQ7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxZQUFBO1FBQUEsVUFBQTtJQUdDO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUEsWUFBQTtRQUFBLFVBQUE7SUFRc0M7SUFBQTtJQUFBLFlBQUEscUJBQUE7Ozs7b0JDdEN4QztNQUFBO3FDQUFBLFVBQUE7TUFBQTtJQUFBOzs7OyJ9
