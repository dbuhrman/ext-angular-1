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
export class toastMetaData {
  public static XTYPE: string = 'toast';
  public static PROPERTIESOBJECT: any = {
    "actions": "Object",
    "activeChildTabIndex": "Number",
    "activeCounter": "Number",
    "activeItem": "String/Number",
    "align": "'br'/'bl'/'tr'/'tl'/'t'/'l'/'b'/'r'",
    "alignOnScroll": "Boolean",
    "alignTarget": "String",
    "allowFocusingDisabledChildren": "Boolean",
    "alwaysOnTop": "Boolean/Number",
    "anchor": "String/Ext.Component",
    "anchorAlign": "String",
    "anchorSize": "Number/Object",
    "animate": "Boolean",
    "animateShadow": "Boolean",
    "animateTarget": "String/Ext.dom.Element/Ext.Component/Boolean",
    "animCollapse": "Boolean/Number",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "autoClose": "Boolean",
    "autoCloseDelay": "Number",
    "autoDestroy": "Boolean",
    "autoEl": "String/Object",
    "autoRender": "Boolean/String/HTMLElement/Ext.dom.Element",
    "autoScroll": "Boolean",
    "autoShow": "Boolean",
    "baseCls": "String",
    "bbar": "Object/Object[]",
    "bind": "Object/String",
    "bodyBorder": "Boolean",
    "bodyCls": "String/String[]",
    "bodyPadding": "Number/String",
    "bodyStyle": "String/Object/Function",
    "border": "Boolean",
    "bubbleEvents": "String[]",
    "buttonAlign": "String",
    "buttons": "Object[]",
    "childEls": "Object/String[]/Object[]",
    "closable": "Boolean",
    "closeAction": "String",
    "closeOnMouseDown": "Boolean",
    "closeToolText": "String",
    "cls": "String/String[]",
    "collapsed": "Boolean",
    "collapsedCls": "String",
    "collapseDirection": "String",
    "collapseFirst": "Boolean",
    "collapseMode": "String",
    "collapseToolText": "String",
    "collapsible": "Boolean",
    "columnWidth": "Number",
    "componentCls": "String",
    "componentLayout": "String/Object",
    "constrain": "Boolean",
    "constrainHeader": "Boolean",
    "constraintInsets": "Object/String",
    "constrainTo": "Ext.util.Region/Ext.dom.Element",
    "contentEl": "String",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultAlign": "String",
    "defaultButton": "String",
    "defaultButtonTarget": "String",
    "defaultDockWeights": "Object",
    "defaultFocus": "String/Number/Ext.Component",
    "defaultListenerScope": "Boolean",
    "defaults": "Object/Function",
    "defaultType": "String",
    "detachOnRemove": "Boolean",
    "disabled": "Boolean",
    "disabledCls": "String",
    "dock": "'top'/'bottom'/'left'/'right'",
    "dockedItems": "Object/Object[]",
    "draggable": "Boolean",
    "expandOnShow": "Boolean",
    "expandToolText": "String",
    "fbar": "Object/Object[]",
    "fixed": "Boolean",
    "flex": "Number",
    "floatable": "Boolean",
    "floating": "Boolean",
    "focusableContainer": "Boolean",
    "focusCls": "String",
    "focusOnToFront": "Boolean",
    "formBind": "Boolean",
    "frame": "Boolean",
    "frameHeader": "Boolean",
    "ghost": "Boolean/Function",
    "glyph": "Number/String",
    "header": "Boolean/Object",
    "headerOverCls": "String",
    "headerPosition": "'top'/'bottom'/'left'/'right'",
    "height": "Number|String",
    "hidden": "Boolean",
    "hideCollapseTool": "Boolean",
    "hideDuration": "Number",
    "hideMode": "String",
    "hideShadowOnDeactivate": "Boolean",
    "html": "String/Object",
    "icon": "String",
    "iconAlign": "'top'/'right'/'bottom'/'left'",
    "iconCls": "String",
    "id": "String",
    "inactiveChildTabIndex": "Number",
    "itemId": "String",
    "items": "Object/Object[]",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "layout": "Ext.enums.Layout/Object",
    "lbar": "Object/Object[]",
    "liquidLayout": "Boolean",
    "listeners": "Object",
    "liveDrag": "Boolean",
    "loader": "Ext.ComponentLoader/Object",
    "maintainTitlePosition": "Boolean",
    "manageHeight": "Boolean",
    "margin": "Number/String",
    "maskClickAction": "String",
    "maskDefaults": "Object",
    "maskElement": "String",
    "maxHeight": "Number",
    "maximizable": "Boolean",
    "maximized": "Boolean",
    "maxWidth": "Number",
    "minButtonWidth": "Number",
    "minHeight": "Number",
    "minimizable": "Boolean",
    "minWidth": "Number",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "monitorResize": "Boolean",
    "nameable": "Boolean",
    "nameHolder": "Boolean",
    "onEsc": "Function",
    "overCls": "String",
    "overflowX": "String",
    "overflowY": "String",
    "overlapHeader": "Boolean",
    "padding": "Number/String",
    "placeholder": "Ext.Component/Object",
    "placeholderCollapseHideMode": "Number",
    "plain": "Boolean",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "preventHeader": "Boolean",
    "publishes": "String/String[]/Object",
    "rbar": "Object/Object[]",
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
    "shrinkWrapDock": "Boolean/Number",
    "simpleDrag": "any",
    "slideBackAnimation": "String",
    "slideBackDuration": "Number",
    "slideInAnimation": "String",
    "slideInDuration": "Number",
    "spacing": "Number",
    "stateEvents": "String[]",
    "stateful": "Boolean/Object",
    "stateId": "String",
    "stickOnClick": "Boolean",
    "stickWhileHover": "Boolean",
    "style": "String/Object",
    "suspendLayout": "Boolean",
    "tabGuard": "Boolean",
    "tabIndex": "Number",
    "tbar": "Object/Object[]",
    "title": "String/Ext.panel.Title",
    "titleAlign": "'left'/'center'/'right'",
    "titleCollapse": "Boolean",
    "titlePosition": "Number",
    "titleRotation": "'default'/0/1/2",
    "toFrontOnShow": "Boolean",
    "tools": "Object[]/Ext.panel.Tool[]",
    "touchAction": "Object",
    "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
    "tplWriteMode": "String",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String",
    "uiCls": "String[]",
    "userCls": "String/String[]",
    "useXAxis": "Boolean",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "weight": "Number",
    "width": "Number|String",
    "x": "Number",
    "xtype": "Ext.enums.Widget",
    "y": "Number",
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
    'align',
    'alignOnScroll',
    'alignTarget',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'anchor',
    'anchorAlign',
    'anchorSize',
    'animate',
    'animateShadow',
    'animateTarget',
    'animCollapse',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoClose',
    'autoCloseDelay',
    'autoDestroy',
    'autoEl',
    'autoRender',
    'autoScroll',
    'autoShow',
    'baseCls',
    'bbar',
    'bind',
    'bodyBorder',
    'bodyCls',
    'bodyPadding',
    'bodyStyle',
    'border',
    'bubbleEvents',
    'buttonAlign',
    'buttons',
    'childEls',
    'closable',
    'closeAction',
    'closeOnMouseDown',
    'closeToolText',
    'cls',
    'collapsed',
    'collapsedCls',
    'collapseDirection',
    'collapseFirst',
    'collapseMode',
    'collapseToolText',
    'collapsible',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constrainHeader',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'defaultAlign',
    'defaultButton',
    'defaultButtonTarget',
    'defaultDockWeights',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'detachOnRemove',
    'disabled',
    'disabledCls',
    'dock',
    'dockedItems',
    'draggable',
    'expandOnShow',
    'expandToolText',
    'fbar',
    'fixed',
    'flex',
    'floatable',
    'floating',
    'focusableContainer',
    'focusCls',
    'focusOnToFront',
    'formBind',
    'frame',
    'frameHeader',
    'ghost',
    'glyph',
    'header',
    'headerOverCls',
    'headerPosition',
    'height',
    'hidden',
    'hideCollapseTool',
    'hideDuration',
    'hideMode',
    'hideShadowOnDeactivate',
    'html',
    'icon',
    'iconAlign',
    'iconCls',
    'id',
    'inactiveChildTabIndex',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'lbar',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'maintainTitlePosition',
    'manageHeight',
    'margin',
    'maskClickAction',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maximizable',
    'maximized',
    'maxWidth',
    'minButtonWidth',
    'minHeight',
    'minimizable',
    'minWidth',
    'modal',
    'modelValidation',
    'monitorResize',
    'nameable',
    'nameHolder',
    'onEsc',
    'overCls',
    'overflowX',
    'overflowY',
    'overlapHeader',
    'padding',
    'placeholder',
    'placeholderCollapseHideMode',
    'plain',
    'plugins',
    'preventHeader',
    'publishes',
    'rbar',
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
    'shrinkWrapDock',
    'simpleDrag',
    'slideBackAnimation',
    'slideBackDuration',
    'slideInAnimation',
    'slideInDuration',
    'spacing',
    'stateEvents',
    'stateful',
    'stateId',
    'stickOnClick',
    'stickWhileHover',
    'style',
    'suspendLayout',
    'tabGuard',
    'tabIndex',
    'tbar',
    'title',
    'titleAlign',
    'titleCollapse',
    'titlePosition',
    'titleRotation',
    'toFrontOnShow',
    'tools',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'useXAxis',
    'viewModel',
    'weight',
    'width',
    'x',
    'xtype',
    'y',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'toast'},
		{name:'add',parameters:'toast,component,index'},
		{name:'added',parameters:'toast,container,pos'},
		{name:'afterlayout',parameters:'toast,layout'},
		{name:'afterlayoutanimation',parameters:'toast'},
		{name:'afterrender',parameters:'toast'},
		{name:'beforeactivate',parameters:'toast'},
		{name:'beforeadd',parameters:'toast,component,index'},
		{name:'beforeclose',parameters:'panel'},
		{name:'beforecollapse',parameters:'p,direction,animate'},
		{name:'beforedeactivate',parameters:'toast'},
		{name:'beforedestroy',parameters:'toast'},
		{name:'beforeexpand',parameters:'p,animate'},
		{name:'beforehide',parameters:'toast'},
		{name:'beforeremove',parameters:'toast,component'},
		{name:'beforerender',parameters:'toast'},
		{name:'beforeshow',parameters:'toast'},
		{name:'beforestaterestore',parameters:'toast,state'},
		{name:'beforestatesave',parameters:'toast,state'},
		{name:'blur',parameters:'toast,event'},
		{name:'boxready',parameters:'toast,width,height'},
		{name:'childmove',parameters:'toast,component,prevIndex,newIndex'},
		{name:'close',parameters:'panel'},
		{name:'collapse',parameters:'p'},
		{name:'deactivate',parameters:'toast'},
		{name:'destroy',parameters:'toast'},
		{name:'disable',parameters:'toast'},
		{name:'dockedadd',parameters:'toast,component,index'},
		{name:'dockedremove',parameters:'toast,component'},
		{name:'enable',parameters:'toast'},
		{name:'expand',parameters:'p'},
		{name:'float',parameters:''},
		{name:'focus',parameters:'toast,event'},
		{name:'focusenter',parameters:'toast,event'},
		{name:'focusleave',parameters:'toast,event'},
		{name:'glyphchange',parameters:'toast,newGlyph,oldGlyph'},
		{name:'hide',parameters:'toast'},
		{name:'iconalignchange',parameters:'toast,newIconAlign,oldIconAlign'},
		{name:'iconchange',parameters:'toast,newIcon,oldIcon'},
		{name:'iconclschange',parameters:'toast,newIconCls,oldIconCls'},
		{name:'maskclick',parameters:'toast'},
		{name:'maximize',parameters:'toast'},
		{name:'minimize',parameters:'toast'},
		{name:'move',parameters:'toast,x,y'},
		{name:'remove',parameters:'toast,component'},
		{name:'removed',parameters:'toast,ownerCt'},
		{name:'render',parameters:'toast'},
		{name:'resize',parameters:'toast,width,height'},
		{name:'restore',parameters:'toast'},
		{name:'show',parameters:'toast'},
		{name:'staterestore',parameters:'toast,state'},
		{name:'statesave',parameters:'toast,state'},
		{name:'titlealignchange',parameters:'toast,newTitleAlign,oldTitleAlign'},
		{name:'titlechange',parameters:'toast,newTitle,oldTitle'},
		{name:'titlepositionchange',parameters:'toast,newTitlePosition,oldTitlePosition'},
		{name:'titlerotationchange',parameters:'toast,newTitleRotation,oldTitleRotation'},
		{name:'unfloat',parameters:''},
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
		'beforeclose',
		'beforecollapse',
		'beforedeactivate',
		'beforedestroy',
		'beforeexpand',
		'beforehide',
		'beforeremove',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'childmove',
		'close',
		'collapse',
		'deactivate',
		'destroy',
		'disable',
		'dockedadd',
		'dockedremove',
		'enable',
		'expand',
		'float',
		'focus',
		'focusenter',
		'focusleave',
		'glyphchange',
		'hide',
		'iconalignchange',
		'iconchange',
		'iconclschange',
		'maskclick',
		'maximize',
		'minimize',
		'move',
		'remove',
		'removed',
		'render',
		'resize',
		'restore',
		'show',
		'staterestore',
		'statesave',
		'titlealignchange',
		'titlechange',
		'titlepositionchange',
		'titlerotationchange',
		'unfloat',
		'ready'
];
}
@Component({
  selector: 'toast', 
  inputs: toastMetaData.PROPERTIES,
  outputs: toastMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtToastComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtToastComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,toastMetaData)}
  public ngOnInit() {this.baseOnInit(toastMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}