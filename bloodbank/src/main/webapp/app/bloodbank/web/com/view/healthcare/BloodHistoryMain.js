Ext.define('Bloodbank.bloodbank.web.com.view.healthcare.BloodHistoryMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "BloodHistoryMainController",
     "restURL": "/BloodHistory",
     "defaults": {
          "split": true
     },
     "requires": ["Bloodbank.bloodbank.shared.com.model.healthcare.BloodHistoryModel", "Bloodbank.bloodbank.web.com.controller.healthcare.BloodHistoryMainController", "Bloodbank.bloodbank.shared.com.model.healthcare.BloodInfoModel", "Bloodbank.bloodbank.shared.com.viewmodel.healthcare.BloodHistoryViewModel", "Ext.form.field.CustomDateField"],
     "communicationLog": [],
     "tabPosition": "bottom",
     "items": [{
          "title": "Data Browser",
          "layout": "border",
          "defaults": {
               "split": true
          },
          "autoScroll": false,
          "customWidgetType": "vdBorderLayout",
          "items": [{
               "xtype": "tabpanel",
               "customWidgetType": "vdTabLayout",
               "displayName": "Blood History",
               "name": "BloodHistoryTreeContainer",
               "itemId": "BloodHistoryTreeContainer",
               "margin": "5 0 5 5",
               "autoScroll": false,
               "collapsible": true,
               "titleCollapse": true,
               "collapseMode": "header",
               "collapsed": false,
               "items": [{
                    "xtype": "treepanel",
                    "customWidgetType": "vdTree",
                    "useArrows": true,
                    "title": "Browse",
                    "rootVisible": false,
                    "itemId": "BloodHistoryTree",
                    "listeners": {
                         "select": "treeClick"
                    },
                    "tbar": [{
                         "xtype": "triggerfield",
                         "customWidgetType": "vdTriggerField",
                         "emptyText": "Search",
                         "triggerCls": "",
                         "listeners": {
                              "change": "onTriggerfieldChange",
                              "buffer": 250
                         }
                    }, "->", {
                         "xtype": "tool",
                         "type": "refresh",
                         "tooltip": "Refresh Tree Data",
                         "handler": "onTreeRefreshClick"
                    }]
               }, {
                    "title": "Advance Search",
                    "xtype": "form",
                    "customWidgetType": "vdFormpanel",
                    "layout": "fit",
                    "autoScroll": false,
                    "itemId": "queryPanel",
                    "buttons": [{
                         "text": "Filter",
                         "handler": "onFilterClick"
                    }],
                    "items": []
               }],
               "region": "west",
               "width": "20%"
          }, {
               "region": "center",
               "layout": "border",
               "defaults": {
                    "split": true
               },
               "customWidgetType": "vdBorderLayout",
               "items": [{
                    "xtype": "form",
                    "displayName": "Blood History",
                    "name": "BloodHistory",
                    "itemId": "BloodHistoryForm",
                    "bodyPadding": 10,
                    "items": [{
                         "xtype": "form",
                         "itemId": "form0",
                         "customWidgetType": "vdCard",
                         "header": {
                              "hidden": true
                         },
                         "items": [{
                              "layout": "column",
                              "customWidgetType": "vdColumnLayout",
                              "header": {
                                   "hidden": true
                              },
                              "xtype": "panel",
                              "items": [{
                                   "name": "bloodInfo",
                                   "itemId": "bloodInfo",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "bloodInfo",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "bloodInfo<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "B13DF4A8-6DD3-4244-B315-756DBA532C61",
                                   "restURL": "BloodInfo",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Bloodbank.bloodbank.shared.com.model.healthcare.BloodInfoModel"
                                   },
                                   "forceSelection": true,
                                   "columnWidth": 0.5,
                                   "bind": "{bloodInfo}"
                              }, {
                                   "name": "collectedDate",
                                   "itemId": "collectedDate",
                                   "xtype": "customDateField",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "collectedDate",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "collectedDate<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "17F7F8A5-CB17-4934-8F8D-1297EB965109",
                                   "columnWidth": 0.5,
                                   "bind": "{collectedDate}"
                              }, {
                                   "name": "expDate",
                                   "itemId": "expDate",
                                   "xtype": "customDateField",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "expDate",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "expDate<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "D4B3A497-4A4E-4EC4-8F48-61239D6DF82F",
                                   "columnWidth": 0.5,
                                   "bind": "{expDate}"
                              }, {
                                   "name": "bloodReport",
                                   "itemId": "bloodReport",
                                   "xtype": "textareafield",
                                   "customWidgetType": "vdTextareafield",
                                   "displayName": "bloodReport",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "bloodReport<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "3AB44898-4C3F-4453-914A-56845E10AF10",
                                   "columnWidth": 0.5,
                                   "bind": "{bloodReport}"
                              }, {
                                   "name": "isTested",
                                   "itemId": "isTested",
                                   "xtype": "checkbox",
                                   "customWidgetType": "vdCheckbox",
                                   "displayName": "isTested",
                                   "margin": "5 5 5 5",
                                   "inputValue": true,
                                   "fieldLabel": "isTested<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "3BDA29F3-C7E6-4A5C-90F0-3E55A74F9004",
                                   "columnWidth": 0.5,
                                   "bind": "{isTested}"
                              }, {
                                   "name": "noOfUnits",
                                   "itemId": "noOfUnits",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "noOfUnits",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "noOfUnits",
                                   "fieldId": "D5864093-D2C2-448E-9393-22AE116B19C9",
                                   "minValue": "-2147483648",
                                   "maxValue": "2147483647",
                                   "columnWidth": 0.5,
                                   "bind": "{noOfUnits}"
                              }, {
                                   "name": "height",
                                   "itemId": "height",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "height",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "height",
                                   "fieldId": "3BAE7609-1724-49AD-95FE-F4FFD6E43A8D",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{height}"
                              }, {
                                   "name": "weight",
                                   "itemId": "weight",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "weight",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "weight",
                                   "fieldId": "DFB0C240-A9CE-4C5F-9D54-F29BCF8E8804",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{weight}"
                              }, {
                                   "name": "temp",
                                   "itemId": "temp",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "temp",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "temp",
                                   "fieldId": "6EC17739-B65C-4306-9C91-C7BE0BF5C3AE",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{temp}"
                              }, {
                                   "name": "bp",
                                   "itemId": "bp",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "bp",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "bp",
                                   "fieldId": "88F3DDA9-F11C-4952-97BF-1001BCBB94EF",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{bp}"
                              }, {
                                   "name": "pulse",
                                   "itemId": "pulse",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "pulse",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "pulse",
                                   "fieldId": "BB813324-C5C7-4A1D-920A-163F01727F54",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{pulse}"
                              }, {
                                   "name": "unitsOfBlood",
                                   "itemId": "unitsOfBlood",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "unitsOfBlood",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "unitsOfBlood",
                                   "fieldId": "5433F20F-ECE4-4D50-8A83-3E74A11D9AB4",
                                   "minValue": "-2147483648",
                                   "maxValue": "2147483647",
                                   "columnWidth": 0.5,
                                   "bind": "{unitsOfBlood}"
                              }, {
                                   "name": "clinicalInfo",
                                   "itemId": "clinicalInfo",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "clinicalInfo",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "clinicalInfo",
                                   "fieldId": "4D21A1E1-A328-4725-B813-2ACB29B96B21",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{clinicalInfo}"
                              }]
                         }]
                    }],
                    "tools": [{
                         "type": "help",
                         "tooltip": "Get Console",
                         "handler": "onConsoleClick"
                    }],
                    "layout": "card",
                    "defaults": {
                         "autoScroll": true
                    },
                    "autoScroll": true,
                    "dockedItems": [{
                         "xtype ": "toolbar",
                         "customWidgetType": "vdBBar",
                         "dock": "bottom",
                         "margin": 0,
                         "isDockedItem": true,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill"
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "listeners": {
                                   "click": "saveForm"
                              }
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "margin": "0 5 0 5",
                              "text": "Reset",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "resetFormButton",
                              "listeners": {
                                   "click": "resetForm"
                              }
                         }],
                         "defaults": {
                              "margin": "0 5 0 5"
                         }
                    }],
                    "viewModel": "BloodHistoryViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "Blood History",
                    "title": "Details Grid",
                    "name": "BloodHistoryGrid",
                    "itemId": "BloodHistoryGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "bloodHistoryId",
                         "dataIndex": "bloodHistoryId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "bloodInfo",
                         "dataIndex": "bloodInfo",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "collectedDate",
                         "dataIndex": "collectedDate",
                         "flex": 1
                    }, {
                         "header": "expDate",
                         "dataIndex": "expDate",
                         "flex": 1
                    }, {
                         "header": "bloodReport",
                         "dataIndex": "bloodReport",
                         "flex": 1
                    }, {
                         "header": "isTested",
                         "dataIndex": "isTested",
                         "flex": 1
                    }, {
                         "header": "noOfUnits",
                         "dataIndex": "noOfUnits",
                         "flex": 1
                    }, {
                         "header": "height",
                         "dataIndex": "height",
                         "flex": 1
                    }, {
                         "header": "weight",
                         "dataIndex": "weight",
                         "flex": 1
                    }, {
                         "header": "temp",
                         "dataIndex": "temp",
                         "flex": 1
                    }, {
                         "header": "bp",
                         "dataIndex": "bp",
                         "flex": 1
                    }, {
                         "header": "pulse",
                         "dataIndex": "pulse",
                         "flex": 1
                    }, {
                         "header": "unitsOfBlood",
                         "dataIndex": "unitsOfBlood",
                         "flex": 1
                    }, {
                         "header": "clinicalInfo",
                         "dataIndex": "clinicalInfo",
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
                    },
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
               "xtype": "form",
               "displayName": "Blood History",
               "name": "BloodHistory",
               "itemId": "BloodHistoryForm",
               "bodyPadding": 10,
               "items": [{
                    "xtype": "form",
                    "itemId": "form0",
                    "customWidgetType": "vdCard",
                    "header": {
                         "hidden": true
                    },
                    "items": [{
                         "layout": "column",
                         "customWidgetType": "vdColumnLayout",
                         "header": {
                              "hidden": true
                         },
                         "xtype": "panel",
                         "items": [{
                              "name": "bloodInfo",
                              "itemId": "bloodInfo",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "bloodInfo",
                              "margin": "5 5 5 5",
                              "fieldLabel": "bloodInfo<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "B13DF4A8-6DD3-4244-B315-756DBA532C61",
                              "restURL": "BloodInfo",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Bloodbank.bloodbank.shared.com.model.healthcare.BloodInfoModel"
                              },
                              "forceSelection": true,
                              "columnWidth": 0.5,
                              "bind": "{bloodInfo}"
                         }, {
                              "name": "collectedDate",
                              "itemId": "collectedDate",
                              "xtype": "customDateField",
                              "customWidgetType": "vdDatefield",
                              "displayName": "collectedDate",
                              "margin": "5 5 5 5",
                              "fieldLabel": "collectedDate<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "17F7F8A5-CB17-4934-8F8D-1297EB965109",
                              "columnWidth": 0.5,
                              "bind": "{collectedDate}"
                         }, {
                              "name": "expDate",
                              "itemId": "expDate",
                              "xtype": "customDateField",
                              "customWidgetType": "vdDatefield",
                              "displayName": "expDate",
                              "margin": "5 5 5 5",
                              "fieldLabel": "expDate<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "D4B3A497-4A4E-4EC4-8F48-61239D6DF82F",
                              "columnWidth": 0.5,
                              "bind": "{expDate}"
                         }, {
                              "name": "bloodReport",
                              "itemId": "bloodReport",
                              "xtype": "textareafield",
                              "customWidgetType": "vdTextareafield",
                              "displayName": "bloodReport",
                              "margin": "5 5 5 5",
                              "fieldLabel": "bloodReport<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "3AB44898-4C3F-4453-914A-56845E10AF10",
                              "columnWidth": 0.5,
                              "bind": "{bloodReport}"
                         }, {
                              "name": "isTested",
                              "itemId": "isTested",
                              "xtype": "checkbox",
                              "customWidgetType": "vdCheckbox",
                              "displayName": "isTested",
                              "margin": "5 5 5 5",
                              "inputValue": true,
                              "fieldLabel": "isTested<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "3BDA29F3-C7E6-4A5C-90F0-3E55A74F9004",
                              "columnWidth": 0.5,
                              "bind": "{isTested}"
                         }, {
                              "name": "noOfUnits",
                              "itemId": "noOfUnits",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "noOfUnits",
                              "margin": "5 5 5 5",
                              "fieldLabel": "noOfUnits",
                              "fieldId": "D5864093-D2C2-448E-9393-22AE116B19C9",
                              "minValue": "-2147483648",
                              "maxValue": "2147483647",
                              "columnWidth": 0.5,
                              "bind": "{noOfUnits}"
                         }, {
                              "name": "height",
                              "itemId": "height",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "height",
                              "margin": "5 5 5 5",
                              "fieldLabel": "height",
                              "fieldId": "3BAE7609-1724-49AD-95FE-F4FFD6E43A8D",
                              "minLength": "0",
                              "maxLength": "256",
                              "columnWidth": 0.5,
                              "bind": "{height}"
                         }, {
                              "name": "weight",
                              "itemId": "weight",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "weight",
                              "margin": "5 5 5 5",
                              "fieldLabel": "weight",
                              "fieldId": "DFB0C240-A9CE-4C5F-9D54-F29BCF8E8804",
                              "minLength": "0",
                              "maxLength": "256",
                              "columnWidth": 0.5,
                              "bind": "{weight}"
                         }, {
                              "name": "temp",
                              "itemId": "temp",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "temp",
                              "margin": "5 5 5 5",
                              "fieldLabel": "temp",
                              "fieldId": "6EC17739-B65C-4306-9C91-C7BE0BF5C3AE",
                              "minLength": "0",
                              "maxLength": "256",
                              "columnWidth": 0.5,
                              "bind": "{temp}"
                         }, {
                              "name": "bp",
                              "itemId": "bp",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "bp",
                              "margin": "5 5 5 5",
                              "fieldLabel": "bp",
                              "fieldId": "88F3DDA9-F11C-4952-97BF-1001BCBB94EF",
                              "minLength": "0",
                              "maxLength": "256",
                              "columnWidth": 0.5,
                              "bind": "{bp}"
                         }, {
                              "name": "pulse",
                              "itemId": "pulse",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "pulse",
                              "margin": "5 5 5 5",
                              "fieldLabel": "pulse",
                              "fieldId": "BB813324-C5C7-4A1D-920A-163F01727F54",
                              "minLength": "0",
                              "maxLength": "256",
                              "columnWidth": 0.5,
                              "bind": "{pulse}"
                         }, {
                              "name": "unitsOfBlood",
                              "itemId": "unitsOfBlood",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "unitsOfBlood",
                              "margin": "5 5 5 5",
                              "fieldLabel": "unitsOfBlood",
                              "fieldId": "5433F20F-ECE4-4D50-8A83-3E74A11D9AB4",
                              "minValue": "-2147483648",
                              "maxValue": "2147483647",
                              "columnWidth": 0.5,
                              "bind": "{unitsOfBlood}"
                         }, {
                              "name": "clinicalInfo",
                              "itemId": "clinicalInfo",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "clinicalInfo",
                              "margin": "5 5 5 5",
                              "fieldLabel": "clinicalInfo",
                              "fieldId": "4D21A1E1-A328-4725-B813-2ACB29B96B21",
                              "minLength": "0",
                              "maxLength": "256",
                              "columnWidth": 0.5,
                              "bind": "{clinicalInfo}"
                         }]
                    }]
               }],
               "tools": [{
                    "type": "help",
                    "tooltip": "Get Console",
                    "handler": "onConsoleClick"
               }],
               "layout": "card",
               "defaults": {
                    "autoScroll": true
               },
               "autoScroll": true,
               "dockedItems": [{
                    "xtype ": "toolbar",
                    "customWidgetType": "vdBBar",
                    "dock": "bottom",
                    "margin": 0,
                    "isDockedItem": true,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill"
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "listeners": {
                              "click": "saveForm"
                         }
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "margin": "0 5 0 5",
                         "text": "Reset",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "resetFormButton",
                         "listeners": {
                              "click": "resetForm"
                         }
                    }],
                    "defaults": {
                         "margin": "0 5 0 5"
                    }
               }],
               "viewModel": "BloodHistoryViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});