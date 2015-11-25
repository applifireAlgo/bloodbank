Ext.define('Bloodbank.bloodbank.web.com.view.healthcare.BloodInfoMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "controller": "BloodInfoMainController",
     "restURL": "/BloodInfo",
     "defaults": {
          "split": true
     },
     "requires": ["Bloodbank.bloodbank.web.com.controller.healthcare.BloodInfoMainController", "Bloodbank.bloodbank.shared.com.model.healthcare.DonorVisitModel", "Bloodbank.view.fw.component.FileUploadComponent", "Bloodbank.bloodbank.shared.com.viewmodel.healthcare.BloodInfoViewModel", "Ext.form.field.CustomDateField"],
     "tabPosition": "bottom",
     "communicationLog": [],
     "itemId": "BloodInfoFormGridContainer",
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
                    "viewModel": "BloodInfoViewModel",
                    "xtype": "form",
                    "displayName": "Blood Info",
                    "title": "Blood Info",
                    "name": "BloodInfo",
                    "itemId": "BloodInfo",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "collectedDate",
                         "itemId": "collectedDate",
                         "xtype": "customDateField",
                         "customWidgetType": "vdDatefield",
                         "displayName": "Collected Date",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Collected Date<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "4CCD5431-2510-48A9-A04B-803FB0C55E33",
                         "bind": "{collectedDate}"
                    }, {
                         "name": "visitId",
                         "itemId": "visitId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Donor Visit",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Donor Visit",
                         "fieldId": "5B7E96BF-6179-44F2-9903-CF618D358546",
                         "restURL": "DonorVisit",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Bloodbank.bloodbank.shared.com.model.healthcare.DonorVisitModel"
                         },
                         "bind": "{visitId}"
                    }, {
                         "name": "expDate",
                         "itemId": "expDate",
                         "xtype": "customDateField",
                         "customWidgetType": "vdDatefield",
                         "displayName": "Expiry Date ",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Expiry Date ",
                         "fieldId": "FF2CD9C1-BDBD-455D-BCEA-B4ADABDDC67F",
                         "bind": "{expDate}"
                    }, {
                         "items": [{
                              "name": "filePathHidden",
                              "xtype": "hidden",
                              "itemId": "filePathHidden",
                              "bind": "{bloodReport}"
                         }, {
                              "name": "bloodReport",
                              "itemId": "bloodReport",
                              "xtype": "fileupload",
                              "customWidgetType": "vdFileUpload",
                              "displayName": "Donor Name",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Donor Name",
                              "fieldId": "E6D5E90F-7C87-4D0A-889A-21FD285F888C"
                         }]
                    }, {
                         "name": "isTested",
                         "itemId": "isTested",
                         "xtype": "checkbox",
                         "customWidgetType": "vdCheckbox",
                         "displayName": "Is Tested",
                         "margin": "5 5 5 5",
                         "value": "0",
                         "inputValue": true,
                         "fieldLabel": "Is Tested",
                         "fieldId": "55DEECBF-DBC6-4623-B0F3-8930E2E82909",
                         "bind": "{isTested}"
                    }, {
                         "name": "noOfUnits",
                         "itemId": "noOfUnits",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "No Of Units",
                         "margin": "5 5 5 5",
                         "fieldLabel": "No Of Units",
                         "fieldId": "35749F6B-1978-407A-A429-3095C81AE425",
                         "minValue": "0",
                         "maxValue": "20000",
                         "bind": "{noOfUnits}"
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
                         "customId": 450,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 450,
                              "customId": 898
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 450,
                              "customId": 899,
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
                              "parentId": 450,
                              "customId": 900,
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
                         "header": "Blood Info Id",
                         "dataIndex": "bInfoId",
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
                         "header": "Collected Date",
                         "dataIndex": "collectedDate",
                         "flex": 1
                    }, {
                         "header": "Donor Visit",
                         "dataIndex": "visitId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Expiry Date ",
                         "dataIndex": "expDate",
                         "flex": 1
                    }, {
                         "header": "Donor Name",
                         "dataIndex": "bloodReport",
                         "flex": 1
                    }, {
                         "header": "Is Tested",
                         "dataIndex": "isTested",
                         "flex": 1
                    }, {
                         "header": "No Of Units",
                         "dataIndex": "noOfUnits",
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
                         "displayName": "Blood Info",
                         "name": "BloodInfoGrid",
                         "itemId": "BloodInfoGrid",
                         "restURL": "/BloodInfo",
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
                              "header": "Blood Info Id",
                              "dataIndex": "bInfoId",
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
                              "header": "Collected Date",
                              "dataIndex": "collectedDate",
                              "flex": 1
                         }, {
                              "header": "Donor Visit",
                              "dataIndex": "visitId",
                              "renderer": "renderFormValue",
                              "flex": 1
                         }, {
                              "header": "Expiry Date ",
                              "dataIndex": "expDate",
                              "flex": 1
                         }, {
                              "header": "Donor Name",
                              "dataIndex": "bloodReport",
                              "flex": 1
                         }, {
                              "header": "Is Tested",
                              "dataIndex": "isTested",
                              "flex": 1
                         }, {
                              "header": "No Of Units",
                              "dataIndex": "noOfUnits",
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
               "viewModel": "BloodInfoViewModel",
               "xtype": "form",
               "displayName": "Blood Info",
               "title": "Blood Info",
               "name": "BloodInfo",
               "itemId": "BloodInfo",
               "bodyPadding": 10,
               "items": [{
                    "name": "collectedDate",
                    "itemId": "collectedDate",
                    "xtype": "customDateField",
                    "customWidgetType": "vdDatefield",
                    "displayName": "Collected Date",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Collected Date<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "4CCD5431-2510-48A9-A04B-803FB0C55E33",
                    "bind": "{collectedDate}"
               }, {
                    "name": "visitId",
                    "itemId": "visitId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Donor Visit",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Donor Visit",
                    "fieldId": "5B7E96BF-6179-44F2-9903-CF618D358546",
                    "restURL": "DonorVisit",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "typeAhead": true,
                    "queryMode": "local",
                    "minChars": 2,
                    "store": {
                         "data": [],
                         "model": "Bloodbank.bloodbank.shared.com.model.healthcare.DonorVisitModel"
                    },
                    "bind": "{visitId}"
               }, {
                    "name": "expDate",
                    "itemId": "expDate",
                    "xtype": "customDateField",
                    "customWidgetType": "vdDatefield",
                    "displayName": "Expiry Date ",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Expiry Date ",
                    "fieldId": "FF2CD9C1-BDBD-455D-BCEA-B4ADABDDC67F",
                    "bind": "{expDate}"
               }, {
                    "items": [{
                         "name": "filePathHidden",
                         "xtype": "hidden",
                         "itemId": "filePathHidden",
                         "bind": "{bloodReport}"
                    }, {
                         "name": "bloodReport",
                         "itemId": "bloodReport",
                         "xtype": "fileupload",
                         "customWidgetType": "vdFileUpload",
                         "displayName": "Donor Name",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Donor Name",
                         "fieldId": "E6D5E90F-7C87-4D0A-889A-21FD285F888C"
                    }]
               }, {
                    "name": "isTested",
                    "itemId": "isTested",
                    "xtype": "checkbox",
                    "customWidgetType": "vdCheckbox",
                    "displayName": "Is Tested",
                    "margin": "5 5 5 5",
                    "value": "0",
                    "inputValue": true,
                    "fieldLabel": "Is Tested",
                    "fieldId": "55DEECBF-DBC6-4623-B0F3-8930E2E82909",
                    "bind": "{isTested}"
               }, {
                    "name": "noOfUnits",
                    "itemId": "noOfUnits",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "No Of Units",
                    "margin": "5 5 5 5",
                    "fieldLabel": "No Of Units",
                    "fieldId": "35749F6B-1978-407A-A429-3095C81AE425",
                    "minValue": "0",
                    "maxValue": "20000",
                    "bind": "{noOfUnits}"
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
                    "customId": 450,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 450,
                         "customId": 898
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 450,
                         "customId": 899,
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
                         "parentId": 450,
                         "customId": 900,
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