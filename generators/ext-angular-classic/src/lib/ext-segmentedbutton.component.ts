import {
  Output,
  OnInit,
  AfterContentInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef
} from '@angular/core';
import { base } from './base';
export class segmentedbuttonMetaData {
  public static XTYPE: string = 'segmentedbutton';
  public static PROPERTIESOBJECT: any = {
    "actions": "Object",
    "activeChildTabIndex": "Number",
    "activeCounter": "Number",
    "activeItem": "String/Number",
    "alignOnScroll": "Boolean",
    "alignTarget": "String",
    "allowDepress": "Boolean",
    "allowFocusingDisabledChildren": "Boolean",
    "allowMultiple": "Boolean",
    "allowToggle": "Boolean",
    "alwaysOnTop": "Boolean/Number",
    "anchor": "String",
    "anchorSize": "Number/Object",
    "animateShadow": "Boolean",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "autoDestroy": "Boolean",
    "autoEl": "String/Object",
    "autoRender": "Boolean/String/HTMLElement/Ext.dom.Element",
    "autoScroll": "Boolean",
    "autoShow": "Boolean",
    "baseCls": "String",
    "bind": "Object/String",
    "border": "Number/String/Boolean",
    "bubbleEvents": "String[]",
    "childEls": "Object/String[]/Object[]",
    "cls": "String/String[]",
    "columnWidth": "Number",
    "componentCls": "String",
    "componentLayout": "String/Object",
    "constrain": "Boolean",
    "constraintInsets": "Object/String",
    "constrainTo": "Ext.util.Region/Ext.dom.Element",
    "contentEl": "String",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultAlign": "String",
    "defaultFocus": "String",
    "defaultListenerScope": "Boolean",
    "defaults": "Object/Function",
    "defaultType": "String",
    "defaultUI": "String",
    "detachOnRemove": "Boolean",
    "disabled": "Boolean",
    "disabledCls": "String",
    "dock": "'top'/'bottom'/'left'/'right'",
    "draggable": "Boolean/Object",
    "fixed": "Boolean",
    "flex": "Number",
    "floating": "Boolean",
    "focusableContainer": "Boolean",
    "focusCls": "String",
    "focusOnToFront": "Boolean",
    "forceSelection": "Boolean",
    "formBind": "Boolean",
    "frame": "Boolean",
    "height": "Number|String",
    "hidden": "Boolean",
    "hideMode": "String",
    "html": "String/Object",
    "id": "String",
    "inactiveChildTabIndex": "Number",
    "itemId": "String",
    "items": "Object/Object[]",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "layout": "Ext.enums.Layout/Object",
    "liquidLayout": "Boolean",
    "listeners": "Object",
    "liveDrag": "Boolean",
    "loader": "Ext.ComponentLoader/Object",
    "margin": "Number/String",
    "maskDefaults": "Object",
    "maskElement": "String",
    "maxHeight": "Number",
    "maxWidth": "Number",
    "minHeight": "Number",
    "minWidth": "Number",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "nameable": "Boolean",
    "nameHolder": "Boolean",
    "overCls": "String",
    "overflowX": "String",
    "overflowY": "String",
    "padding": "Number/String",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "publishes": "String/String[]/Object",
    "reference": "String",
    "referenceHolder": "Boolean",
    "region": "'north'/'south'/'east'/'west'/'center'",
    "renderConfig": "Object",
    "renderData": "Object",
    "renderSelectors": "Object",
    "renderTo": "String/HTMLElement/Ext.dom.Element",
    "renderTpl": "Ext.XTemplate/String/String[]",
    "resetFocusPosition": "Boolean",
    "resizable": "Boolean/Object",
    "resizeHandles": "String",
    "saveDelay": "Number",
    "scrollable": "Boolean/String/Object",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "String/Boolean",
    "shadowOffset": "Number",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "shrinkWrap": "Boolean/Number",
    "stateEvents": "String[]",
    "stateful": "Boolean/Object",
    "stateId": "String",
    "style": "String/Object",
    "suspendLayout": "Boolean",
    "tabGuard": "Boolean",
    "tabIndex": "Number",
    "toFrontOnShow": "Boolean",
    "touchAction": "Object",
    "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
    "tplWriteMode": "String",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String",
    "uiCls": "String[]",
    "userCls": "String/String[]",
    "value": "String/Number/String[]/Number[]",
    "vertical": "Boolean",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "weight": "Number",
    "width": "Number|String",
    "xtype": "Ext.enums.Widget",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'actions',
    'activeChildTabIndex',
    'activeCounter',
    'activeItem',
    'alignOnScroll',
    'alignTarget',
    'allowDepress',
    'allowFocusingDisabledChildren',
    'allowMultiple',
    'allowToggle',
    'alwaysOnTop',
    'anchor',
    'anchorSize',
    'animateShadow',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoDestroy',
    'autoEl',
    'autoRender',
    'autoScroll',
    'autoShow',
    'baseCls',
    'bind',
    'border',
    'bubbleEvents',
    'childEls',
    'cls',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'defaultAlign',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'defaultUI',
    'detachOnRemove',
    'disabled',
    'disabledCls',
    'dock',
    'draggable',
    'fixed',
    'flex',
    'floating',
    'focusableContainer',
    'focusCls',
    'focusOnToFront',
    'forceSelection',
    'formBind',
    'frame',
    'height',
    'hidden',
    'hideMode',
    'html',
    'id',
    'inactiveChildTabIndex',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'nameable',
    'nameHolder',
    'overCls',
    'overflowX',
    'overflowY',
    'padding',
    'plugins',
    'publishes',
    'reference',
    'referenceHolder',
    'region',
    'renderConfig',
    'renderData',
    'renderSelectors',
    'renderTo',
    'renderTpl',
    'resetFocusPosition',
    'resizable',
    'resizeHandles',
    'saveDelay',
    'scrollable',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'shrinkWrap',
    'stateEvents',
    'stateful',
    'stateId',
    'style',
    'suspendLayout',
    'tabGuard',
    'tabIndex',
    'toFrontOnShow',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'value',
    'vertical',
    'viewModel',
    'weight',
    'width',
    'xtype',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'segmentedbutton'},
		{name:'add',parameters:'segmentedbutton,component,index'},
		{name:'added',parameters:'segmentedbutton,container,pos'},
		{name:'afterlayout',parameters:'segmentedbutton,layout'},
		{name:'afterlayoutanimation',parameters:'segmentedbutton'},
		{name:'afterrender',parameters:'segmentedbutton'},
		{name:'beforeactivate',parameters:'segmentedbutton'},
		{name:'beforeadd',parameters:'segmentedbutton,component,index'},
		{name:'beforedeactivate',parameters:'segmentedbutton'},
		{name:'beforedestroy',parameters:'segmentedbutton'},
		{name:'beforehide',parameters:'segmentedbutton'},
		{name:'beforeremove',parameters:'segmentedbutton,component'},
		{name:'beforerender',parameters:'segmentedbutton'},
		{name:'beforeshow',parameters:'segmentedbutton'},
		{name:'beforestaterestore',parameters:'segmentedbutton,state'},
		{name:'beforestatesave',parameters:'segmentedbutton,state'},
		{name:'blur',parameters:'segmentedbutton,event'},
		{name:'boxready',parameters:'segmentedbutton,width,height'},
		{name:'change',parameters:'segmentedbutton,newValue,oldValue'},
		{name:'childmove',parameters:'segmentedbutton,component,prevIndex,newIndex'},
		{name:'deactivate',parameters:'segmentedbutton'},
		{name:'destroy',parameters:'segmentedbutton'},
		{name:'disable',parameters:'segmentedbutton'},
		{name:'enable',parameters:'segmentedbutton'},
		{name:'focus',parameters:'segmentedbutton,event'},
		{name:'focusenter',parameters:'segmentedbutton,event'},
		{name:'focusleave',parameters:'segmentedbutton,event'},
		{name:'hide',parameters:'segmentedbutton'},
		{name:'move',parameters:'segmentedbutton,x,y'},
		{name:'remove',parameters:'segmentedbutton,component'},
		{name:'removed',parameters:'segmentedbutton,ownerCt'},
		{name:'render',parameters:'segmentedbutton'},
		{name:'resize',parameters:'segmentedbutton,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'segmentedbutton'},
		{name:'staterestore',parameters:'segmentedbutton,state'},
		{name:'statesave',parameters:'segmentedbutton,state'},
		{name:'toggle',parameters:'segmentedbutton,button,isPressed'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'activate',
		'add',
		'added',
		'afterlayout',
		'afterlayoutanimation',
		'afterrender',
		'beforeactivate',
		'beforeadd',
		'beforedeactivate',
		'beforedestroy',
		'beforehide',
		'beforeremove',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'change',
		'childmove',
		'deactivate',
		'destroy',
		'disable',
		'enable',
		'focus',
		'focusenter',
		'focusleave',
		'hide',
		'move',
		'remove',
		'removed',
		'render',
		'resize',
		'show',
		'staterestore',
		'statesave',
		'toggle',
		'ready'
];
}
@Component({
  selector: 'segmentedbutton', 
  inputs: segmentedbuttonMetaData.PROPERTIES,
  outputs: segmentedbuttonMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtSegmentedbuttonComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtSegmentedbuttonComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,segmentedbuttonMetaData)}
  public ngOnInit() {this.baseOnInit(segmentedbuttonMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}