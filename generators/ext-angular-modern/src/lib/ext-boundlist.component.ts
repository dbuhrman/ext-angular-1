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
export class boundlistMetaData {
  public static XTYPE: string = 'boundlist';
  public static PROPERTIESOBJECT: any = {
    "activeChildTabIndex": "Number",
    "activeItem": "Ext.Component/Object/String/Number",
    "allowFocusingDisabledChildren": "Boolean",
    "alwaysOnTop": "Boolean/Number",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "associatedData": "Boolean/Object",
    "autoDestroy": "Boolean",
    "autoSize": "Boolean",
    "axisLock": "Boolean",
    "bind": "Object/String",
    "border": "Boolean",
    "bottom": "Number/String",
    "bufferSize": "Number",
    "cardSwitchAnimation": "String/Object/Boolean",
    "centered": "Boolean",
    "cls": "String/String[]",
    "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
    "contentEl": "Ext.dom.Element/HTMLElement/String",
    "control": "Object",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultFocus": "String",
    "defaultListenerScope": "Boolean",
    "defaults": "Object",
    "defaultType": "Ext.enums.Widget",
    "deferEmptyText": "Boolean",
    "deselectOnContainerClick": "Boolean",
    "disabled": "Boolean",
    "disableSelection": "Boolean",
    "disclosureProperty": "String",
    "displayed": "Boolean",
    "docked": "String",
    "draggable": "Boolean/Object/Ext.drag.Source",
    "emptyItemText": "String",
    "emptyState": "Boolean",
    "emptyText": "String/Boolean",
    "emptyTextDefaults": "Object/Ext.Component",
    "emptyTextProperty": "String",
    "enableTextSelection": "Boolean",
    "enterAnimation": "String/Mixed",
    "eventHandlers": "Object",
    "exitAnimation": "String/Mixed",
    "flex": "Number/String/Object",
    "floated": "Boolean",
    "focusableContainer": "Boolean",
    "focusCls": "String",
    "fullscreen": "Boolean",
    "grouped": "Boolean",
    "groupFooter": "Object/Ext.dataview.ItemHeader",
    "groupHeader": "Object/Ext.dataview.ItemHeader",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideAnimation": "String/Mixed",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "hideOnMaskTap": "Boolean",
    "horizontalOverflow": "any",
    "html": "String/Ext.dom.Element/HTMLElement",
    "id": "String",
    "inactiveChildTabIndex": "Number",
    "indexBar": "Boolean/Object/Ext.dataview.IndexBar",
    "infinite": "Boolean",
    "inline": "Boolean/Object",
    "innerCls": "String",
    "innerCtHeight": "any",
    "innerWidth": "any",
    "instanceCls": "String/String[]",
    "itemButtonMode": "boolean",
    "itemCls": "String",
    "itemConfig": "Object/Ext.Component",
    "itemContentCls": "String",
    "itemDataMap": "Object",
    "itemId": "String",
    "itemInnerCls": "String",
    "itemRipple": "Boolean/Object",
    "items": "Array/Object",
    "itemsFocusable": "Boolean",
    "itemTpl": "String/String[]/Ext.XTemplate",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "layout": "Object/String",
    "left": "Number/String",
    "listeners": "Object",
    "loadingHeight": "Number",
    "loadingText": "String/Boolean",
    "maintainChildNodes": "Boolean",
    "manageBorders": "Boolean",
    "margin": "Number/String",
    "markDirty": "Boolean",
    "masked": "Boolean/String/Object/Ext.Mask/Ext.LoadMask",
    "maxHeight": "Number/String",
    "maxItemCache": "Number",
    "maxWidth": "Number/String",
    "minHeight": "Number/String",
    "minimumBufferDistance": "Number",
    "minWidth": "Number/String",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "name": "String",
    "nameable": "Boolean",
    "nameHolder": "Boolean",
    "onItemDisclosure": "Boolean/Function/String/Object",
    "padding": "Number/String",
    "pinFooters": "Boolean",
    "pinHeaders": "Boolean",
    "pinnedFooter": "Object",
    "pinnedFooterHeight": "any",
    "pinnedHeader": "Object",
    "pinnedHeaderHeight": "any",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "pressedDelay": "Number",
    "preventSelectionOnDisclose": "Boolean",
    "preventSelectionOnTool": "Boolean",
    "publishes": "String/String[]/Object",
    "record": "Ext.data.Model",
    "reference": "String",
    "referenceHolder": "Boolean",
    "relative": "Boolean",
    "renderTo": "Ext.dom.Element",
    "resetFocusPosition": "Boolean",
    "right": "Number/String",
    "ripple": "Boolean/Object/String",
    "rowLines": "Boolean",
    "scrollable": "Boolean/String/Object",
    "scrollDock": "'start'/'emd'",
    "scrollToTopOnRefresh": "Boolean",
    "selectable": "Object/Ext.dataview.selection.Model",
    "selection": "Ext.data.Model",
    "selfAlign": "String",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "Boolean",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "showAnimation": "String/Mixed",
    "stateful": "Boolean/Object/String[]",
    "statefulDefaults": "Object/String[]",
    "stateId": "String",
    "store": "Ext.data.Store/Object",
    "striped": "Boolean",
    "style": "String/Object",
    "tabIndex": "Number",
    "toFrontOnShow": "Boolean",
    "tooltip": "String/Object",
    "top": "Number/String",
    "topRenderedIndex": "any",
    "touchAction": "Object",
    "tpl": "String/String[]/Ext.Template/Ext.XTemplate[]",
    "tplWriteMode": "String",
    "translatable": "Object",
    "triggerCtEvent": "'tap'/'singletap'",
    "triggerEvent": "'tap'",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String/String[]",
    "userCls": "String/String[]",
    "userSelectable": "Boolean/String/Object",
    "useSimpleItems": "Boolean",
    "variableHeights": "Boolean",
    "verticalOverflow": "Boolean",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "visibleHeight": "Number",
    "visibleLeft": "any",
    "visibleTop": "Number",
    "visibleWidth": "any",
    "weight": "Number",
    "weighted": "Boolean",
    "width": "Number/String",
    "x": "Number",
    "xtype": "String",
    "y": "Number",
    "zIndex": "Number",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'activeChildTabIndex',
    'activeItem',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'associatedData',
    'autoDestroy',
    'autoSize',
    'axisLock',
    'bind',
    'border',
    'bottom',
    'bufferSize',
    'cardSwitchAnimation',
    'centered',
    'cls',
    'constrainAlign',
    'contentEl',
    'control',
    'controller',
    'data',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'deferEmptyText',
    'deselectOnContainerClick',
    'disabled',
    'disableSelection',
    'disclosureProperty',
    'displayed',
    'docked',
    'draggable',
    'emptyItemText',
    'emptyState',
    'emptyText',
    'emptyTextDefaults',
    'emptyTextProperty',
    'enableTextSelection',
    'enterAnimation',
    'eventHandlers',
    'exitAnimation',
    'flex',
    'floated',
    'focusableContainer',
    'focusCls',
    'fullscreen',
    'grouped',
    'groupFooter',
    'groupHeader',
    'height',
    'hidden',
    'hideAnimation',
    'hideMode',
    'hideOnMaskTap',
    'horizontalOverflow',
    'html',
    'id',
    'inactiveChildTabIndex',
    'indexBar',
    'infinite',
    'inline',
    'innerCls',
    'innerCtHeight',
    'innerWidth',
    'instanceCls',
    'itemButtonMode',
    'itemCls',
    'itemConfig',
    'itemContentCls',
    'itemDataMap',
    'itemId',
    'itemInnerCls',
    'itemRipple',
    'items',
    'itemsFocusable',
    'itemTpl',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'left',
    'listeners',
    'loadingHeight',
    'loadingText',
    'maintainChildNodes',
    'manageBorders',
    'margin',
    'markDirty',
    'masked',
    'maxHeight',
    'maxItemCache',
    'maxWidth',
    'minHeight',
    'minimumBufferDistance',
    'minWidth',
    'modal',
    'modelValidation',
    'name',
    'nameable',
    'nameHolder',
    'onItemDisclosure',
    'padding',
    'pinFooters',
    'pinHeaders',
    'pinnedFooter',
    'pinnedFooterHeight',
    'pinnedHeader',
    'pinnedHeaderHeight',
    'plugins',
    'pressedDelay',
    'preventSelectionOnDisclose',
    'preventSelectionOnTool',
    'publishes',
    'record',
    'reference',
    'referenceHolder',
    'relative',
    'renderTo',
    'resetFocusPosition',
    'right',
    'ripple',
    'rowLines',
    'scrollable',
    'scrollDock',
    'scrollToTopOnRefresh',
    'selectable',
    'selection',
    'selfAlign',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'stateful',
    'statefulDefaults',
    'stateId',
    'store',
    'striped',
    'style',
    'tabIndex',
    'toFrontOnShow',
    'tooltip',
    'top',
    'topRenderedIndex',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
    'triggerCtEvent',
    'triggerEvent',
    'twoWayBindable',
    'ui',
    'userCls',
    'userSelectable',
    'useSimpleItems',
    'variableHeights',
    'verticalOverflow',
    'viewModel',
    'visibleHeight',
    'visibleLeft',
    'visibleTop',
    'visibleWidth',
    'weight',
    'weighted',
    'width',
    'x',
    'xtype',
    'y',
    'zIndex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'newActiveItem,boundlist,oldActiveItem'},
		{name:'activeItemchange',parameters:'sender,value,oldValue'},
		{name:'add',parameters:''},
		{name:'added',parameters:'sender,container,index'},
		{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'sender'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeshow',parameters:'sender'},
		{name:'beforestorechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforetofront',parameters:'boundlist'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'boundlist,event'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'childdoubletap',parameters:'boundlist,location'},
		{name:'childlongpress',parameters:'boundlist,location'},
		{name:'childmouseenter',parameters:'boundlist,location'},
		{name:'childmouseleave',parameters:'boundlist,location'},
		{name:'childsingletap',parameters:'boundlist,location'},
		{name:'childtap',parameters:'boundlist,location'},
		{name:'childtaphold',parameters:'boundlist,location'},
		{name:'childtouchcancel',parameters:'boundlist,location'},
		{name:'childtouchend',parameters:'boundlist,location'},
		{name:'childtouchmove',parameters:'boundlist,location'},
		{name:'childtouchstart',parameters:'boundlist,location'},
		{name:'deactivate',parameters:'oldActiveItem,boundlist,newActiveItem'},
		{name:'deselect',parameters:'boundlist,records'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'disclose',parameters:'list,record,target,index,event'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'erased',parameters:'sender'},
		{name:'floatingchange',parameters:'sender,positioned'},
		{name:'focus',parameters:'boundlist,event'},
		{name:'focusenter',parameters:'boundlist,event'},
		{name:'focusleave',parameters:'boundlist,event'},
		{name:'fullscreen',parameters:'sender'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'sender'},
		{name:'initialize',parameters:'sender'},
		{name:'itemaction',parameters:'boundlist,index,record,action'},
		{name:'itemdoubletap',parameters:'boundlist,index,target,record,e'},
		{name:'itemlongpress',parameters:'boundlist,index,target,record,e'},
		{name:'itemmouseenter',parameters:'boundlist,index,target,record,e'},
		{name:'itemmouseleave',parameters:'boundlist,index,target,record,e'},
		{name:'itemsingletap',parameters:'boundlist,index,target,record,e'},
		{name:'itemswipe',parameters:'boundlist,index,target,record,e'},
		{name:'itemtap',parameters:'boundlist,index,target,record,e'},
		{name:'itemtaphold',parameters:'boundlist,index,target,record,e'},
		{name:'itemtouchcancel',parameters:'boundlist,index,target,record,e'},
		{name:'itemtouchend',parameters:'boundlist,index,target,record,e'},
		{name:'itemtouchmove',parameters:'boundlist,index,target,record,e'},
		{name:'itemtouchstart',parameters:'boundlist,index,target,record,e'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'move',parameters:''},
		{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
		{name:'navigate',parameters:'boundlist,to,from'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'sender,element'},
		{name:'positionedchange',parameters:'sender,positioned'},
		{name:'refresh',parameters:'boundlist'},
		{name:'remove',parameters:''},
		{name:'removed',parameters:'sender,container,index'},
		{name:'renderedchange',parameters:'boundlist,item,rendered'},
		{name:'resize',parameters:'element,info'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'select',parameters:'boundlist,selected'},
		{name:'show',parameters:'sender'},
		{name:'storechange',parameters:'sender,value,oldValue'},
		{name:'tofront',parameters:'boundlist'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'sender,newData'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'activate',
		'activeItemchange',
		'add',
		'added',
		'beforeactiveItemchange',
		'beforebottomchange',
		'beforecenteredchange',
		'beforedisabledchange',
		'beforedockedchange',
		'beforeheightchange',
		'beforehiddenchange',
		'beforehide',
		'beforeleftchange',
		'beforemaxHeightchange',
		'beforemaxWidthchange',
		'beforeminHeightchange',
		'beforeminWidthchange',
		'beforeorientationchange',
		'beforerightchange',
		'beforescrollablechange',
		'beforeshow',
		'beforestorechange',
		'beforetofront',
		'beforetopchange',
		'beforewidthchange',
		'blur',
		'bottomchange',
		'centeredchange',
		'childdoubletap',
		'childlongpress',
		'childmouseenter',
		'childmouseleave',
		'childsingletap',
		'childtap',
		'childtaphold',
		'childtouchcancel',
		'childtouchend',
		'childtouchmove',
		'childtouchstart',
		'deactivate',
		'deselect',
		'destroy',
		'disabledchange',
		'disclose',
		'dockedchange',
		'erased',
		'floatingchange',
		'focus',
		'focusenter',
		'focusleave',
		'fullscreen',
		'heightchange',
		'hiddenchange',
		'hide',
		'initialize',
		'itemaction',
		'itemdoubletap',
		'itemlongpress',
		'itemmouseenter',
		'itemmouseleave',
		'itemsingletap',
		'itemswipe',
		'itemtap',
		'itemtaphold',
		'itemtouchcancel',
		'itemtouchend',
		'itemtouchmove',
		'itemtouchstart',
		'leftchange',
		'maxHeightchange',
		'maxWidthchange',
		'minHeightchange',
		'minWidthchange',
		'move',
		'moved',
		'navigate',
		'orientationchange',
		'painted',
		'positionedchange',
		'refresh',
		'remove',
		'removed',
		'renderedchange',
		'resize',
		'rightchange',
		'scrollablechange',
		'select',
		'show',
		'storechange',
		'tofront',
		'topchange',
		'updatedata',
		'widthchange',
		'ready'
];
}
@Component({
  selector: 'boundlist', 
  inputs: boundlistMetaData.PROPERTIES,
  outputs: boundlistMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtBoundlistComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtBoundlistComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,boundlistMetaData)}
  public ngOnInit() {this.baseOnInit(boundlistMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}