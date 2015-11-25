Ext.define('Bloodbank.bloodbank.web.com.view.healthcare.DonorVisitMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "DonorVisitMainController",
     "restURL": "/DonorVisit",
     "defaults": {
          "split": true
     },
     "requires": ["Bloodbank.bloodbank.shared.com.model.healthcare.DonorVisitModel", "Bloodbank.bloodbank.web.com.controller.healthcare.DonorVisitMainController", "Bloodbank.bloodbank.shared.com.model.healthcare.DonationTypeModel", "Bloodbank.bloodbank.shared.com.model.healthcare.RegisterADonorModel", "Bloodbank.bloodbank.shared.com.model.location.CityModel", "Bloodbank.bloodbank.shared.com.model.healthcare.RegisterACampModel", "Bloodbank.bloodbank.shared.com.viewmodel.healthcare.DonorVisitViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "Donor Visit",
               "name": "DonorVisitTreeContainer",
               "itemId": "DonorVisitTreeContainer",
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
                    "itemId": "DonorVisitTree",
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
                    "displayName": "Donor Visit",
                    "name": "DonorVisit",
                    "itemId": "DonorVisitForm",
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
                                   "name": "donationType",
                                   "itemId": "donationType",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Donation Type",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Donation Type<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "BC9A3ACD-B543-410D-B832-87D4BE66E273",
                                   "restURL": "DonationType",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Bloodbank.bloodbank.shared.com.model.healthcare.DonationTypeModel"
                                   },
                                   "forceSelection": true,
                                   "columnWidth": 0.5,
                                   "bind": "{donationType}"
                              }, {
                                   "name": "donorId",
                                   "itemId": "donorId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Donor",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Donor<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "A4D7A7D6-B011-4F57-A2D4-3455EDD7EE6E",
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
                                   "bind": "{donorId}"
                              }, {
                                   "name": "orgnizerName",
                                   "itemId": "orgnizerName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Orgnizer Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Orgnizer Name",
                                   "fieldId": "6ED1749E-EC1A-4E8D-90AF-75343CC15394",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{orgnizerName}"
                              }, {
                                   "name": "campAddress",
                                   "itemId": "campAddress",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Camp Address",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Camp Address",
                                   "fieldId": "6F580842-0C53-491D-A695-7C749904F03E",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{campAddress}"
                              }, {
                                   "name": "city",
                                   "itemId": "city",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "City",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "City",
                                   "fieldId": "6AA108FE-BD87-498D-BA4D-6FFA63127FCB",
                                   "restURL": "City",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Bloodbank.bloodbank.shared.com.model.location.CityModel"
                                   },
                                   "columnWidth": 0.5,
                                   "bind": "{city}"
                              }, {
                                   "name": "campId",
                                   "itemId": "campId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "campId",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "campId",
                                   "fieldId": "5057FF2E-EDCF-4BEC-A035-B4DA67D01E71",
                                   "restURL": "RegisterACamp",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Bloodbank.bloodbank.shared.com.model.healthcare.RegisterACampModel"
                                   },
                                   "columnWidth": 0.5,
                                   "bind": "{campId}"
                              }]
                         }]
                    }, {
                         "xtype": "form",
                         "displayName": "Clinical Info",
                         "title": "Clinical Info",
                         "name": "ClinicalInfo",
                         "itemId": "ClinicalInfoForm",
                         "bodyPadding": 10,
                         "items": [{
                              "xtype": "form",
                              "itemId": "form1",
                              "customWidgetType": "vdAnchorLayout",
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
                                        "name": "height",
                                        "itemId": "height",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Height",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Height<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "313D0A45-B33F-4BAE-A240-2FC7B7BA9292",
                                        "minLength": "0",
                                        "maxLength": "256",
                                        "columnWidth": 0.5,
                                        "bind": "{clinicalInfo.height}"
                                   }, {
                                        "name": "weight",
                                        "itemId": "weight",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Weight",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Weight<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "D14BD7E9-1159-45B2-8AE0-7AB76FA7B433",
                                        "minLength": "0",
                                        "maxLength": "256",
                                        "columnWidth": 0.5,
                                        "bind": "{clinicalInfo.weight}"
                                   }, {
                                        "name": "temp",
                                        "itemId": "temp",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Temprature",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Temprature<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "E80C26D3-964E-4395-BD46-1CFEDF21729C",
                                        "minLength": "0",
                                        "maxLength": "256",
                                        "columnWidth": 0.5,
                                        "bind": "{clinicalInfo.temp}"
                                   }, {
                                        "name": "bp",
                                        "itemId": "bp",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "B.P.",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "B.P.<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "80DAA50F-4FCF-4414-B637-9FBE0244885A",
                                        "minLength": "0",
                                        "maxLength": "256",
                                        "columnWidth": 0.5,
                                        "bind": "{clinicalInfo.bp}"
                                   }, {
                                        "name": "pulse",
                                        "itemId": "pulse",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Pulse",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Pulse<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "998E115A-46D5-4B23-92C6-D6233BD11335",
                                        "minLength": "0",
                                        "maxLength": "256",
                                        "columnWidth": 0.5,
                                        "bind": "{clinicalInfo.pulse}"
                                   }, {
                                        "name": "unitsOfBlood",
                                        "itemId": "unitsOfBlood",
                                        "xtype": "numberfield",
                                        "customWidgetType": "vdNumberfield",
                                        "displayName": "Units Of Blood",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Units Of Blood<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "073DE747-44D6-400B-B021-BEF37DE20712",
                                        "minValue": "-2147483648",
                                        "maxValue": "2147483647",
                                        "columnWidth": 0.5,
                                        "bind": "{clinicalInfo.unitsOfBlood}"
                                   }]
                              }]
                         }],
                         "customWidgetType": "vdCard"
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
                    }, {
                         "xtype": "toolbar",
                         "customWidgetType": "vdTBar",
                         "defaults": {
                              "margin": "0 5 0 5"
                         },
                         "isDockedItem": true,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill"
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "itemId": "cardPrev",
                              "text": "&laquo; Previous",
                              "handler": "showPreviousCard",
                              "disabled": true,
                              "margin": "0 5 0 5"
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "itemId": "cardNext",
                              "text": "Next &raquo;",
                              "handler": "showNextCard",
                              "margin": "0 5 0 5"
                         }]
                    }],
                    "viewModel": "DonorVisitViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "Donor Visit",
                    "title": "Details Grid",
                    "name": "DonorVisitGrid",
                    "itemId": "DonorVisitGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "visitId",
                         "dataIndex": "visitId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "Donation Type",
                         "dataIndex": "donationType",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Donor",
                         "dataIndex": "donorId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Orgnizer Name",
                         "dataIndex": "orgnizerName",
                         "flex": 1
                    }, {
                         "header": "Camp Address",
                         "dataIndex": "campAddress",
                         "flex": 1
                    }, {
                         "header": "City",
                         "dataIndex": "city",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "campId",
                         "dataIndex": "campId",
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
               "displayName": "Donor Visit",
               "name": "DonorVisit",
               "itemId": "DonorVisitForm",
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
                              "name": "donationType",
                              "itemId": "donationType",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Donation Type",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Donation Type<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "BC9A3ACD-B543-410D-B832-87D4BE66E273",
                              "restURL": "DonationType",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Bloodbank.bloodbank.shared.com.model.healthcare.DonationTypeModel"
                              },
                              "forceSelection": true,
                              "columnWidth": 0.5,
                              "bind": "{donationType}"
                         }, {
                              "name": "donorId",
                              "itemId": "donorId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Donor",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Donor<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "A4D7A7D6-B011-4F57-A2D4-3455EDD7EE6E",
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
                              "bind": "{donorId}"
                         }, {
                              "name": "orgnizerName",
                              "itemId": "orgnizerName",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Orgnizer Name",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Orgnizer Name",
                              "fieldId": "6ED1749E-EC1A-4E8D-90AF-75343CC15394",
                              "minLength": "0",
                              "maxLength": "256",
                              "columnWidth": 0.5,
                              "bind": "{orgnizerName}"
                         }, {
                              "name": "campAddress",
                              "itemId": "campAddress",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Camp Address",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Camp Address",
                              "fieldId": "6F580842-0C53-491D-A695-7C749904F03E",
                              "minLength": "0",
                              "maxLength": "256",
                              "columnWidth": 0.5,
                              "bind": "{campAddress}"
                         }, {
                              "name": "city",
                              "itemId": "city",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "City",
                              "margin": "5 5 5 5",
                              "fieldLabel": "City",
                              "fieldId": "6AA108FE-BD87-498D-BA4D-6FFA63127FCB",
                              "restURL": "City",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Bloodbank.bloodbank.shared.com.model.location.CityModel"
                              },
                              "columnWidth": 0.5,
                              "bind": "{city}"
                         }, {
                              "name": "campId",
                              "itemId": "campId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "campId",
                              "margin": "5 5 5 5",
                              "fieldLabel": "campId",
                              "fieldId": "5057FF2E-EDCF-4BEC-A035-B4DA67D01E71",
                              "restURL": "RegisterACamp",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Bloodbank.bloodbank.shared.com.model.healthcare.RegisterACampModel"
                              },
                              "columnWidth": 0.5,
                              "bind": "{campId}"
                         }]
                    }]
               }, {
                    "xtype": "form",
                    "displayName": "Clinical Info",
                    "title": "Clinical Info",
                    "name": "ClinicalInfo",
                    "itemId": "ClinicalInfoForm",
                    "bodyPadding": 10,
                    "items": [{
                         "xtype": "form",
                         "itemId": "form1",
                         "customWidgetType": "vdAnchorLayout",
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
                                   "name": "height",
                                   "itemId": "height",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Height",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Height<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "313D0A45-B33F-4BAE-A240-2FC7B7BA9292",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{clinicalInfo.height}"
                              }, {
                                   "name": "weight",
                                   "itemId": "weight",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Weight",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Weight<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "D14BD7E9-1159-45B2-8AE0-7AB76FA7B433",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{clinicalInfo.weight}"
                              }, {
                                   "name": "temp",
                                   "itemId": "temp",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Temprature",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Temprature<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "E80C26D3-964E-4395-BD46-1CFEDF21729C",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{clinicalInfo.temp}"
                              }, {
                                   "name": "bp",
                                   "itemId": "bp",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "B.P.",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "B.P.<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "80DAA50F-4FCF-4414-B637-9FBE0244885A",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{clinicalInfo.bp}"
                              }, {
                                   "name": "pulse",
                                   "itemId": "pulse",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Pulse",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Pulse<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "998E115A-46D5-4B23-92C6-D6233BD11335",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{clinicalInfo.pulse}"
                              }, {
                                   "name": "unitsOfBlood",
                                   "itemId": "unitsOfBlood",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "Units Of Blood",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Units Of Blood<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "073DE747-44D6-400B-B021-BEF37DE20712",
                                   "minValue": "-2147483648",
                                   "maxValue": "2147483647",
                                   "columnWidth": 0.5,
                                   "bind": "{clinicalInfo.unitsOfBlood}"
                              }]
                         }]
                    }],
                    "customWidgetType": "vdCard"
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
               }, {
                    "xtype": "toolbar",
                    "customWidgetType": "vdTBar",
                    "defaults": {
                         "margin": "0 5 0 5"
                    },
                    "isDockedItem": true,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill"
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "itemId": "cardPrev",
                         "text": "&laquo; Previous",
                         "handler": "showPreviousCard",
                         "disabled": true,
                         "margin": "0 5 0 5"
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "itemId": "cardNext",
                         "text": "Next &raquo;",
                         "handler": "showNextCard",
                         "margin": "0 5 0 5"
                    }]
               }],
               "viewModel": "DonorVisitViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});