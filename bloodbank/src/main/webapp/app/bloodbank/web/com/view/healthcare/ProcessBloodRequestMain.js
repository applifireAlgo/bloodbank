Ext.define('Bloodbank.bloodbank.web.com.view.healthcare.ProcessBloodRequestMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "controller": "ProcessBloodRequestMainController",
     "restURL": "/ProcessBloodRequest",
     "defaults": {
          "split": true
     },
     "requires": ["Bloodbank.bloodbank.web.com.controller.healthcare.ProcessBloodRequestMainController", "Bloodbank.bloodbank.shared.com.model.healthcare.BloodRequestModel", "Bloodbank.bloodbank.shared.com.model.healthcare.RegisterADonorModel", "Bloodbank.bloodbank.shared.com.viewmodel.healthcare.ProcessBloodRequestViewModel", "Ext.form.field.CustomDateField"],
     "tabPosition": "bottom",
     "communicationLog": [],
     "itemId": "ProcessBloodRequestFormGridContainer",
     "items": [{
          "title": "Data Browser",
          "layout": "border",
          "autoScroll": false,
          "customWidgetType": "vdBorderLayout",
          "items": [{
               "region": "center",
               "layout": "border",
               "customWidgetType": "vdBorderLayout",
               "items": [{
                    "customWidgetType": "vdFormpanel",
                    "viewModel": "ProcessBloodRequestViewModel",
                    "xtype": "form",
                    "displayName": "Process Blood Request",
                    "title": "Process Blood Request",
                    "name": "ProcessBloodRequest",
                    "itemId": "ProcessBloodRequest",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "bloodRequestId",
                         "itemId": "bloodRequestId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Blood Request",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Blood Request<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "451BD0A2-36D9-46A2-9287-C96FFFE9B037",
                         "restURL": "BloodRequest",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Bloodbank.bloodbank.shared.com.model.healthcare.BloodRequestModel"
                         },
                         "forceSelection": true,
                         "bind": "{bloodRequestId}"
                    }, {
                         "name": "donorId",
                         "itemId": "donorId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Donar",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Donar<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "E76C2FB8-140E-4CEE-B2E3-B054501F2316",
                         "restURL": "RegisterADonor",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Bloodbank.bloodbank.shared.com.model.healthcare.RegisterADonorModel"
                         },
                         "forceSelection": true,
                         "bind": "{donorId}"
                    }, {
                         "name": "isComplete",
                         "itemId": "isComplete",
                         "xtype": "checkbox",
                         "customWidgetType": "vdCheckbox",
                         "displayName": "Is Complete",
                         "margin": "5 5 5 5",
                         "inputValue": true,
                         "fieldLabel": "Is Complete<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "CF2CFBA2-6159-46EB-8CCB-03A1F8682681",
                         "bind": "{isComplete}"
                    }],
                    "layout": "column",
                    "defaults": {
                         "columnWidth": 0.5,
                         "labelAlign": "left",
                         "labelWidth": 200
                    },
                    "autoScroll": true,
                    "dockedItems": [{
                         "xtype ": "toolbar",
                         "customWidgetType": "vdBBar",
                         "dock": "bottom",
                         "ui": "footer",
                         "isDockedItem": true,
                         "parentId": 1,
                         "customId": 321,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 321,
                              "customId": 668
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 321,
                              "customId": 669,
                              "listeners": {
                                   "click": "saveForm"
                              }
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Reset",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "resetFormButton",
                              "parentId": 321,
                              "customId": 670,
                              "listeners": {
                                   "click": "resetForm"
                              }
                         }],
                         "defaults": {}
                    }],
                    "listeners": {
                         "scope": "controller"
                    },
                    "tools": [{
                         "type": "help",
                         "tooltip": "Console",
                         "handler": "onConsoleClick"
                    }],
                    "extend": "Ext.form.Panel",
                    "region": "center"
               }, {
                    "xtype": "panel",
                    "layout": "border",
                    "customWidgetType": "vdPanel",
                    "title": "Details Grid",
                    "columns": [{
                         "header": "processBloodRequestId",
                         "dataIndex": "processBloodRequestId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryDisplay",
                         "dataIndex": "primaryDisplay",
                         "hidden": true
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "Blood Request",
                         "dataIndex": "bloodRequestId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Donar",
                         "dataIndex": "donorId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Is Complete",
                         "dataIndex": "isComplete",
                         "flex": 1
                    }, {
                         "header": "createdBy",
                         "dataIndex": "createdBy",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "createdDate",
                         "dataIndex": "createdDate",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "updatedBy",
                         "dataIndex": "updatedBy",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "updatedDate",
                         "dataIndex": "updatedDate",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "versionId",
                         "dataIndex": "versionId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "activeStatus",
                         "dataIndex": "activeStatus",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "txnAccessCode",
                         "dataIndex": "txnAccessCode",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "xtype": "actioncolumn",
                         "customWidgetType": "vdActionColumn",
                         "width": 30,
                         "sortable": false,
                         "menuDisable": true,
                         "items": [{
                              "icon": "images/delete.gif",
                              "tooltip": "Delete Record",
                              "handler": "onDeleteActionColumnClickMainGrid"
                         }]
                    }],
                    "items": [{
                         "region": "center",
                         "xtype": "gridpanel",
                         "customWidgetType": "vdGrid",
                         "displayName": "Process Blood Request",
                         "name": "ProcessBloodRequestGrid",
                         "itemId": "ProcessBloodRequestGrid",
                         "restURL": "/ProcessBloodRequest",
                         "store": [],
                         "bodyPadding": 10,
                         "dockedItems": [{
                              "xtype": "toolbar",
                              "dock": "top",
                              "items": [{
                                   "xtype": "triggerfield",
                                   "emptyText": "search",
                                   "triggerCls": "",
                                   "listeners": {
                                        "change": "onTriggerfieldChange",
                                        "buffer": 250
                                   }
                              }]
                         }],
                         "columns": [{
                              "header": "processBloodRequestId",
                              "dataIndex": "processBloodRequestId",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "primaryDisplay",
                              "dataIndex": "primaryDisplay",
                              "hidden": true
                         }, {
                              "header": "primaryKey",
                              "dataIndex": "primaryKey",
                              "hidden": true
                         }, {
                              "header": "Blood Request",
                              "dataIndex": "bloodRequestId",
                              "renderer": "renderFormValue",
                              "flex": 1
                         }, {
                              "header": "Donar",
                              "dataIndex": "donorId",
                              "renderer": "renderFormValue",
                              "flex": 1
                         }, {
                              "header": "Is Complete",
                              "dataIndex": "isComplete",
                              "flex": 1
                         }, {
                              "header": "createdBy",
                              "dataIndex": "createdBy",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "createdDate",
                              "dataIndex": "createdDate",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "updatedBy",
                              "dataIndex": "updatedBy",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "updatedDate",
                              "dataIndex": "updatedDate",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "versionId",
                              "dataIndex": "versionId",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "activeStatus",
                              "dataIndex": "activeStatus",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "txnAccessCode",
                              "dataIndex": "txnAccessCode",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "xtype": "actioncolumn",
                              "customWidgetType": "vdActionColumn",
                              "width": 30,
                              "sortable": false,
                              "menuDisable": true,
                              "items": [{
                                   "icon": "images/delete.gif",
                                   "tooltip": "Delete Record",
                                   "handler": "onDeleteActionColumnClickMainGrid"
                              }]
                         }],
                         "listeners": {
                              "itemclick": "onGridItemClick"
                         }
                    }],
                    "tools": [{
                         "type": "refresh",
                         "tooltip": "Refresh Grid Data",
                         "handler": "onGridRefreshClick"
                    }],
                    "collapsible": true,
                    "titleCollapse": true,
                    "collapseMode": "header",
                    "region": "south",
                    "height": "40%"
               }]
          }]
     }, {
          "title": "Add New",
          "itemId": "addNewForm",
          "layout": "border",
          "customWidgetType": "vdBorderLayout",
          "autoScroll": false,
          "items": [{
               "customWidgetType": "vdFormpanel",
               "viewModel": "ProcessBloodRequestViewModel",
               "xtype": "form",
               "displayName": "Process Blood Request",
               "title": "Process Blood Request",
               "name": "ProcessBloodRequest",
               "itemId": "ProcessBloodRequest",
               "bodyPadding": 10,
               "items": [{
                    "name": "bloodRequestId",
                    "itemId": "bloodRequestId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Blood Request",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Blood Request<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "451BD0A2-36D9-46A2-9287-C96FFFE9B037",
                    "restURL": "BloodRequest",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "typeAhead": true,
                    "queryMode": "local",
                    "minChars": 2,
                    "store": {
                         "data": [],
                         "model": "Bloodbank.bloodbank.shared.com.model.healthcare.BloodRequestModel"
                    },
                    "forceSelection": true,
                    "bind": "{bloodRequestId}"
               }, {
                    "name": "donorId",
                    "itemId": "donorId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Donar",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Donar<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "E76C2FB8-140E-4CEE-B2E3-B054501F2316",
                    "restURL": "RegisterADonor",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "typeAhead": true,
                    "queryMode": "local",
                    "minChars": 2,
                    "store": {
                         "data": [],
                         "model": "Bloodbank.bloodbank.shared.com.model.healthcare.RegisterADonorModel"
                    },
                    "forceSelection": true,
                    "bind": "{donorId}"
               }, {
                    "name": "isComplete",
                    "itemId": "isComplete",
                    "xtype": "checkbox",
                    "customWidgetType": "vdCheckbox",
                    "displayName": "Is Complete",
                    "margin": "5 5 5 5",
                    "inputValue": true,
                    "fieldLabel": "Is Complete<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "CF2CFBA2-6159-46EB-8CCB-03A1F8682681",
                    "bind": "{isComplete}"
               }],
               "layout": "column",
               "defaults": {
                    "columnWidth": 0.5,
                    "labelAlign": "left",
                    "labelWidth": 200
               },
               "autoScroll": true,
               "dockedItems": [{
                    "xtype ": "toolbar",
                    "customWidgetType": "vdBBar",
                    "dock": "bottom",
                    "ui": "footer",
                    "isDockedItem": true,
                    "parentId": 1,
                    "customId": 321,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 321,
                         "customId": 668
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 321,
                         "customId": 669,
                         "listeners": {
                              "click": "saveForm"
                         }
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Reset",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "resetFormButton",
                         "parentId": 321,
                         "customId": 670,
                         "listeners": {
                              "click": "resetForm"
                         }
                    }],
                    "defaults": {}
               }],
               "listeners": {
                    "scope": "controller"
               },
               "tools": [{
                    "type": "help",
                    "tooltip": "Console",
                    "handler": "onConsoleClick"
               }],
               "extend": "Ext.form.Panel",
               "region": "center"
          }]
     }]
});