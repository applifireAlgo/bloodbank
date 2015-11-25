Ext.define('Bloodbank.bloodbank.web.com.view.healthcare.BloodStockMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "BloodStockMainController",
     "restURL": "/BloodStock",
     "defaults": {
          "split": true
     },
     "requires": ["Bloodbank.bloodbank.shared.com.model.healthcare.BloodStockModel", "Bloodbank.bloodbank.web.com.controller.healthcare.BloodStockMainController", "Bloodbank.bloodbank.shared.com.model.healthcare.RegisterADonorModel", "Bloodbank.bloodbank.shared.com.model.healthcare.BloodGroupModel", "Bloodbank.bloodbank.shared.com.viewmodel.healthcare.BloodStockViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "Blood Stock ",
               "name": "BloodStockTreeContainer",
               "itemId": "BloodStockTreeContainer",
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
                    "itemId": "BloodStockTree",
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
                    "displayName": "Blood Stock ",
                    "name": "BloodStock",
                    "itemId": "BloodStockForm",
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
                                   "name": "donarId",
                                   "itemId": "donarId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "donarId",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "donarId<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "7FAC4B96-7CC1-4D82-970A-B0DE7F0DBBF2",
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
                                   "columnWidth": 0.5,
                                   "bind": "{donarId}"
                              }, {
                                   "name": "bloodGroupId",
                                   "itemId": "bloodGroupId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "bloodGroupId",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "bloodGroupId<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "44EEC057-DC33-437B-838C-48D184A2B234",
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
                                   "columnWidth": 0.5,
                                   "bind": "{bloodGroupId}"
                              }, {
                                   "name": "noOfUnits",
                                   "itemId": "noOfUnits",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "No Of Units",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "No Of Units<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "2142FF0F-C832-4B97-BA5B-BAD874E3F0B0",
                                   "minValue": "0",
                                   "maxValue": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{noOfUnits}"
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
                    "viewModel": "BloodStockViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "Blood Stock ",
                    "title": "Details Grid",
                    "name": "BloodStockGrid",
                    "itemId": "BloodStockGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "BloodStockId",
                         "dataIndex": "bloodStockId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "donarId",
                         "dataIndex": "donarId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "bloodGroupId",
                         "dataIndex": "bloodGroupId",
                         "renderer": "renderFormValue",
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
               "displayName": "Blood Stock ",
               "name": "BloodStock",
               "itemId": "BloodStockForm",
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
                              "name": "donarId",
                              "itemId": "donarId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "donarId",
                              "margin": "5 5 5 5",
                              "fieldLabel": "donarId<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "7FAC4B96-7CC1-4D82-970A-B0DE7F0DBBF2",
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
                              "columnWidth": 0.5,
                              "bind": "{donarId}"
                         }, {
                              "name": "bloodGroupId",
                              "itemId": "bloodGroupId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "bloodGroupId",
                              "margin": "5 5 5 5",
                              "fieldLabel": "bloodGroupId<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "44EEC057-DC33-437B-838C-48D184A2B234",
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
                              "columnWidth": 0.5,
                              "bind": "{bloodGroupId}"
                         }, {
                              "name": "noOfUnits",
                              "itemId": "noOfUnits",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "No Of Units",
                              "margin": "5 5 5 5",
                              "fieldLabel": "No Of Units<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "2142FF0F-C832-4B97-BA5B-BAD874E3F0B0",
                              "minValue": "0",
                              "maxValue": "256",
                              "columnWidth": 0.5,
                              "bind": "{noOfUnits}"
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
               "viewModel": "BloodStockViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});