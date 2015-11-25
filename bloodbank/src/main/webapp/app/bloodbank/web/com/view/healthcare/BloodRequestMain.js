Ext.define('Bloodbank.bloodbank.web.com.view.healthcare.BloodRequestMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "controller": "BloodRequestMainController",
     "restURL": "/BloodRequest",
     "defaults": {
          "split": true
     },
     "requires": ["Bloodbank.bloodbank.web.com.controller.healthcare.BloodRequestMainController", "Bloodbank.bloodbank.shared.com.model.healthcare.BloodGroupModel", "Bloodbank.bloodbank.shared.com.viewmodel.healthcare.BloodRequestViewModel", "Ext.form.field.CustomDateField"],
     "tabPosition": "bottom",
     "communicationLog": [],
     "itemId": "BloodRequestFormGridContainer",
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
                    "viewModel": "BloodRequestViewModel",
                    "xtype": "form",
                    "displayName": "Blood Request",
                    "title": "Blood Request",
                    "name": "BloodRequest",
                    "itemId": "BloodRequest",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "numberofUnits",
                         "itemId": "numberofUnits",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Number of Units",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Number of Units<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "328B0E78-A863-462B-A0BD-C64F2ECA1088",
                         "minValue": "0",
                         "maxValue": "2000000",
                         "bind": "{numberofUnits}"
                    }, {
                         "name": "patientName",
                         "itemId": "patientName",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Patient Name",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Patient Name<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "4CFEE85D-4438-4D11-86ED-AB3FDEA150E8",
                         "minLength": "0",
                         "maxLength": "256",
                         "bind": "{patientName}"
                    }, {
                         "name": "requestedByDr",
                         "itemId": "requestedByDr",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Requested By Dr.",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Requested By Dr.<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "180E2BB7-8DAF-4F94-8732-2CEF71C378A9",
                         "minLength": "0",
                         "maxLength": "256",
                         "bind": "{requestedByDr}"
                    }, {
                         "name": "requestedbyHospital",
                         "itemId": "requestedbyHospital",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Requested by Hospital",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Requested by Hospital<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "608BC6CF-9609-4600-BDE7-BAB244711AA0",
                         "minLength": "0",
                         "maxLength": "256",
                         "bind": "{requestedbyHospital}"
                    }, {
                         "name": "dateneededby",
                         "itemId": "dateneededby",
                         "xtype": "customDateField",
                         "customWidgetType": "vdDatefield",
                         "displayName": "Date needed by",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Date needed by<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "5C598E99-B1A5-43DA-AE90-6578801A6582",
                         "bind": "{dateneededby}"
                    }, {
                         "name": "dispatchedtoPatientOnDT",
                         "itemId": "dispatchedtoPatientOnDT",
                         "xtype": "customDateField",
                         "customWidgetType": "vdDatefield",
                         "displayName": "Dispatched to Patient on D/T",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Dispatched to Patient on D/T<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "D5F5E133-F38F-4508-80A5-BD7FDC7AC4F4",
                         "bind": "{dispatchedtoPatientOnDT}"
                    }, {
                         "name": "bloodGroup",
                         "itemId": "bloodGroup",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Blood Group",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Blood Group<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "56647CD7-0A75-455A-A396-5F2E315B81D5",
                         "restURL": "BloodGroup",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Bloodbank.bloodbank.shared.com.model.healthcare.BloodGroupModel"
                         },
                         "forceSelection": true,
                         "bind": "{bloodGroup}"
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
                         "customId": 487,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 487,
                              "customId": 710
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 487,
                              "customId": 711,
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
                              "parentId": 487,
                              "customId": 712,
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
                         "header": "bloodRequestId",
                         "dataIndex": "bloodRequestId",
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
                         "header": "Number of Units",
                         "dataIndex": "numberofUnits",
                         "flex": 1
                    }, {
                         "header": "Patient Name",
                         "dataIndex": "patientName",
                         "flex": 1
                    }, {
                         "header": "Requested By Dr.",
                         "dataIndex": "requestedByDr",
                         "flex": 1
                    }, {
                         "header": "Requested by Hospital",
                         "dataIndex": "requestedbyHospital",
                         "flex": 1
                    }, {
                         "header": "Date needed by",
                         "dataIndex": "dateneededby",
                         "flex": 1
                    }, {
                         "header": "Dispatched to Patient on D/T",
                         "dataIndex": "dispatchedtoPatientOnDT",
                         "flex": 1
                    }, {
                         "header": "Blood Group",
                         "dataIndex": "bloodGroup",
                         "renderer": "renderFormValue",
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
                         "displayName": "Blood Request",
                         "name": "BloodRequestGrid",
                         "itemId": "BloodRequestGrid",
                         "restURL": "/BloodRequest",
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
                              "header": "bloodRequestId",
                              "dataIndex": "bloodRequestId",
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
                              "header": "Number of Units",
                              "dataIndex": "numberofUnits",
                              "flex": 1
                         }, {
                              "header": "Patient Name",
                              "dataIndex": "patientName",
                              "flex": 1
                         }, {
                              "header": "Requested By Dr.",
                              "dataIndex": "requestedByDr",
                              "flex": 1
                         }, {
                              "header": "Requested by Hospital",
                              "dataIndex": "requestedbyHospital",
                              "flex": 1
                         }, {
                              "header": "Date needed by",
                              "dataIndex": "dateneededby",
                              "flex": 1
                         }, {
                              "header": "Dispatched to Patient on D/T",
                              "dataIndex": "dispatchedtoPatientOnDT",
                              "flex": 1
                         }, {
                              "header": "Blood Group",
                              "dataIndex": "bloodGroup",
                              "renderer": "renderFormValue",
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
               "viewModel": "BloodRequestViewModel",
               "xtype": "form",
               "displayName": "Blood Request",
               "title": "Blood Request",
               "name": "BloodRequest",
               "itemId": "BloodRequest",
               "bodyPadding": 10,
               "items": [{
                    "name": "numberofUnits",
                    "itemId": "numberofUnits",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Number of Units",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Number of Units<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "328B0E78-A863-462B-A0BD-C64F2ECA1088",
                    "minValue": "0",
                    "maxValue": "2000000",
                    "bind": "{numberofUnits}"
               }, {
                    "name": "patientName",
                    "itemId": "patientName",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Patient Name",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Patient Name<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "4CFEE85D-4438-4D11-86ED-AB3FDEA150E8",
                    "minLength": "0",
                    "maxLength": "256",
                    "bind": "{patientName}"
               }, {
                    "name": "requestedByDr",
                    "itemId": "requestedByDr",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Requested By Dr.",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Requested By Dr.<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "180E2BB7-8DAF-4F94-8732-2CEF71C378A9",
                    "minLength": "0",
                    "maxLength": "256",
                    "bind": "{requestedByDr}"
               }, {
                    "name": "requestedbyHospital",
                    "itemId": "requestedbyHospital",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Requested by Hospital",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Requested by Hospital<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "608BC6CF-9609-4600-BDE7-BAB244711AA0",
                    "minLength": "0",
                    "maxLength": "256",
                    "bind": "{requestedbyHospital}"
               }, {
                    "name": "dateneededby",
                    "itemId": "dateneededby",
                    "xtype": "customDateField",
                    "customWidgetType": "vdDatefield",
                    "displayName": "Date needed by",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Date needed by<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "5C598E99-B1A5-43DA-AE90-6578801A6582",
                    "bind": "{dateneededby}"
               }, {
                    "name": "dispatchedtoPatientOnDT",
                    "itemId": "dispatchedtoPatientOnDT",
                    "xtype": "customDateField",
                    "customWidgetType": "vdDatefield",
                    "displayName": "Dispatched to Patient on D/T",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Dispatched to Patient on D/T<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "D5F5E133-F38F-4508-80A5-BD7FDC7AC4F4",
                    "bind": "{dispatchedtoPatientOnDT}"
               }, {
                    "name": "bloodGroup",
                    "itemId": "bloodGroup",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Blood Group",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Blood Group<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "56647CD7-0A75-455A-A396-5F2E315B81D5",
                    "restURL": "BloodGroup",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "typeAhead": true,
                    "queryMode": "local",
                    "minChars": 2,
                    "store": {
                         "data": [],
                         "model": "Bloodbank.bloodbank.shared.com.model.healthcare.BloodGroupModel"
                    },
                    "forceSelection": true,
                    "bind": "{bloodGroup}"
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
                    "customId": 487,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 487,
                         "customId": 710
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 487,
                         "customId": 711,
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
                         "parentId": 487,
                         "customId": 712,
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