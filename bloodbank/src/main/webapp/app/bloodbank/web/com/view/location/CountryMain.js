Ext.define('Bloodbank.bloodbank.web.com.view.location.CountryMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "CountryMainController",
     "restURL": "/Country",
     "defaults": {
          "split": true
     },
     "requires": ["Bloodbank.bloodbank.shared.com.model.location.CountryModel", "Bloodbank.bloodbank.web.com.controller.location.CountryMainController", "Bloodbank.bloodbank.shared.com.viewmodel.location.CountryViewModel", "Ext.form.field.CustomDateField"],
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
               "margin": "5 0 5 5",
               "border": 1,
               "style": {
                    "borderColor": "#f6f6f6",
                    "borderStyle": "solid",
                    "borderWidth": "1px"
               },
               "displayName": "Country",
               "name": "CountryTreeContainer",
               "itemId": "CountryTreeContainer",
               "restURL": "/Country",
               "autoScroll": false,
               "collapsible": true,
               "titleCollapse": true,
               "collapseMode": "header",
               "collapsed": false,
               "items": [{
                    "xtype": "treepanel",
                    "customWidgetType": "vdTree",
                    "title": "Browse",
                    "useArrows": true,
                    "rootVisible": false,
                    "itemId": "CountryTree",
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
                    "itemId": "queryPanel",
                    "dockedItems": [{
                         "xtype ": "toolbar",
                         "customWidgetType": "vdBBar",
                         "dock": "bottom",
                         "isDockedItem": true,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill"
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "text": "Filter",
                              "handler": "onFilterClick"
                         }]
                    }],
                    "items": [{
                         "name": "countryName",
                         "itemId": "countryName",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Name",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Name",
                         "fieldId": "8AF5EAE3-38CE-456E-8DE4-13F00BDB3CBD",
                         "minLength": "0",
                         "maxLength": "128"
                    }, {
                         "name": "countryCode1",
                         "itemId": "countryCode1",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Code 1",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Code 1",
                         "fieldId": "3BFF17AC-BC72-440E-9ADB-9A0F00D19E0D",
                         "minLength": "0",
                         "maxLength": "3"
                    }]
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
                    "customWidgetType": "vdFormpanel",
                    "viewModel": "CountryViewModel",
                    "xtype": "form",
                    "displayName": "Country",
                    "title": "Country",
                    "name": "Country",
                    "itemId": "Country",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "countryName",
                         "itemId": "countryName",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Name",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Name<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "8AF5EAE3-38CE-456E-8DE4-13F00BDB3CBD",
                         "minLength": "0",
                         "maxLength": "128",
                         "bind": "{countryName}",
                         "columnWidth": 0.5
                    }, {
                         "name": "countryCode1",
                         "itemId": "countryCode1",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Code 1",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Code 1",
                         "fieldId": "3BFF17AC-BC72-440E-9ADB-9A0F00D19E0D",
                         "minLength": "0",
                         "maxLength": "3",
                         "bind": "{countryCode1}",
                         "columnWidth": 0.5
                    }, {
                         "name": "countryCode2",
                         "itemId": "countryCode2",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Code 2",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Code 2",
                         "fieldId": "C737F8B4-B743-47BF-9A74-171B9125CFFF",
                         "minLength": "0",
                         "maxLength": "3",
                         "bind": "{countryCode2}",
                         "columnWidth": 0.5
                    }, {
                         "name": "countryFlag",
                         "itemId": "countryFlag",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Flag",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Flag",
                         "fieldId": "BC6EDFCA-01B5-4E28-95BD-4B4CD56993B1",
                         "minLength": "0",
                         "maxLength": "64",
                         "bind": "{countryFlag}",
                         "columnWidth": 0.5
                    }, {
                         "name": "capital",
                         "itemId": "capital",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Capital",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Capital",
                         "fieldId": "0DF8A0B8-ABB6-4C6B-8EB1-365A30CE03FF",
                         "minLength": "0",
                         "maxLength": "32",
                         "bind": "{capital}",
                         "columnWidth": 0.5
                    }, {
                         "name": "currencyCode",
                         "itemId": "currencyCode",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Currency Code",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Currency Code",
                         "fieldId": "8B23E424-EAAF-4B05-A2AD-8B085C80CFB3",
                         "minLength": "0",
                         "maxLength": "3",
                         "bind": "{currencyCode}",
                         "columnWidth": 0.5
                    }, {
                         "name": "currencyName",
                         "itemId": "currencyName",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Currency Name",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Currency Name",
                         "fieldId": "92F5CF67-0413-4AE8-AE47-D9B0CFA267E7",
                         "minLength": "0",
                         "maxLength": "128",
                         "bind": "{currencyName}",
                         "columnWidth": 0.5
                    }, {
                         "name": "currencySymbol",
                         "itemId": "currencySymbol",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Currency Symbol",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Currency Symbol",
                         "fieldId": "01297A92-A96B-4F7C-AB9B-93ED1CBA2A0D",
                         "minLength": "0",
                         "maxLength": "32",
                         "bind": "{currencySymbol}",
                         "columnWidth": 0.5
                    }, {
                         "name": "capitalLatitude",
                         "itemId": "capitalLatitude",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Capital Latitude",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Capital Latitude",
                         "fieldId": "D7C53C6F-31AB-4F6C-AC81-8F7BF6C0CA95",
                         "minValue": "0",
                         "maxValue": "11",
                         "bind": "{capitalLatitude}",
                         "columnWidth": 0.5
                    }, {
                         "name": "capitalLongitude",
                         "itemId": "capitalLongitude",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Capital Longitude",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Capital Longitude",
                         "fieldId": "08B77EEF-54E7-4012-8BE4-C97896382FA2",
                         "minValue": "0",
                         "maxValue": "11",
                         "bind": "{capitalLongitude}",
                         "columnWidth": 0.5
                    }, {
                         "name": "isoNumeric",
                         "itemId": "isoNumeric",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "ISO Numeric",
                         "margin": "5 5 5 5",
                         "fieldLabel": "ISO Numeric",
                         "fieldId": "F8684C1A-B2F8-470B-9CB4-A8D5C09BF045",
                         "minValue": "0",
                         "maxValue": "11",
                         "bind": "{isoNumeric}",
                         "columnWidth": 0.5
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
                         "customId": 782,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 782,
                              "customId": 799
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 782,
                              "customId": 800,
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
                              "parentId": 782,
                              "customId": 801,
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
                    "xtype": "gridpanel",
                    "customWidgetType": "vdGrid",
                    "displayName": "Country",
                    "title": "Details Grid",
                    "name": "CountryGrid",
                    "itemId": "CountryGrid",
                    "restURL": "/Country",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "Country Code",
                         "dataIndex": "countryId",
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
                         "header": "Name",
                         "dataIndex": "countryName",
                         "flex": 1
                    }, {
                         "header": "Code 1",
                         "dataIndex": "countryCode1",
                         "flex": 1
                    }, {
                         "header": "Code 2",
                         "dataIndex": "countryCode2",
                         "flex": 1
                    }, {
                         "header": "Flag",
                         "dataIndex": "countryFlag",
                         "flex": 1
                    }, {
                         "header": "Capital",
                         "dataIndex": "capital",
                         "flex": 1
                    }, {
                         "header": "Currency Code",
                         "dataIndex": "currencyCode",
                         "flex": 1
                    }, {
                         "header": "Currency Name",
                         "dataIndex": "currencyName",
                         "flex": 1
                    }, {
                         "header": "Currency Symbol",
                         "dataIndex": "currencySymbol",
                         "flex": 1
                    }, {
                         "header": "Capital Latitude",
                         "dataIndex": "capitalLatitude",
                         "flex": 1
                    }, {
                         "header": "Capital Longitude",
                         "dataIndex": "capitalLongitude",
                         "flex": 1
                    }, {
                         "header": "ISO Numeric",
                         "dataIndex": "isoNumeric",
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
               "customWidgetType": "vdFormpanel",
               "viewModel": "CountryViewModel",
               "xtype": "form",
               "displayName": "Country",
               "title": "Country",
               "name": "Country",
               "itemId": "Country",
               "bodyPadding": 10,
               "items": [{
                    "name": "countryName",
                    "itemId": "countryName",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Name",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Name<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "8AF5EAE3-38CE-456E-8DE4-13F00BDB3CBD",
                    "minLength": "0",
                    "maxLength": "128",
                    "bind": "{countryName}",
                    "columnWidth": 0.5
               }, {
                    "name": "countryCode1",
                    "itemId": "countryCode1",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Code 1",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Code 1",
                    "fieldId": "3BFF17AC-BC72-440E-9ADB-9A0F00D19E0D",
                    "minLength": "0",
                    "maxLength": "3",
                    "bind": "{countryCode1}",
                    "columnWidth": 0.5
               }, {
                    "name": "countryCode2",
                    "itemId": "countryCode2",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Code 2",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Code 2",
                    "fieldId": "C737F8B4-B743-47BF-9A74-171B9125CFFF",
                    "minLength": "0",
                    "maxLength": "3",
                    "bind": "{countryCode2}",
                    "columnWidth": 0.5
               }, {
                    "name": "countryFlag",
                    "itemId": "countryFlag",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Flag",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Flag",
                    "fieldId": "BC6EDFCA-01B5-4E28-95BD-4B4CD56993B1",
                    "minLength": "0",
                    "maxLength": "64",
                    "bind": "{countryFlag}",
                    "columnWidth": 0.5
               }, {
                    "name": "capital",
                    "itemId": "capital",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Capital",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Capital",
                    "fieldId": "0DF8A0B8-ABB6-4C6B-8EB1-365A30CE03FF",
                    "minLength": "0",
                    "maxLength": "32",
                    "bind": "{capital}",
                    "columnWidth": 0.5
               }, {
                    "name": "currencyCode",
                    "itemId": "currencyCode",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Currency Code",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Currency Code",
                    "fieldId": "8B23E424-EAAF-4B05-A2AD-8B085C80CFB3",
                    "minLength": "0",
                    "maxLength": "3",
                    "bind": "{currencyCode}",
                    "columnWidth": 0.5
               }, {
                    "name": "currencyName",
                    "itemId": "currencyName",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Currency Name",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Currency Name",
                    "fieldId": "92F5CF67-0413-4AE8-AE47-D9B0CFA267E7",
                    "minLength": "0",
                    "maxLength": "128",
                    "bind": "{currencyName}",
                    "columnWidth": 0.5
               }, {
                    "name": "currencySymbol",
                    "itemId": "currencySymbol",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Currency Symbol",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Currency Symbol",
                    "fieldId": "01297A92-A96B-4F7C-AB9B-93ED1CBA2A0D",
                    "minLength": "0",
                    "maxLength": "32",
                    "bind": "{currencySymbol}",
                    "columnWidth": 0.5
               }, {
                    "name": "capitalLatitude",
                    "itemId": "capitalLatitude",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Capital Latitude",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Capital Latitude",
                    "fieldId": "D7C53C6F-31AB-4F6C-AC81-8F7BF6C0CA95",
                    "minValue": "0",
                    "maxValue": "11",
                    "bind": "{capitalLatitude}",
                    "columnWidth": 0.5
               }, {
                    "name": "capitalLongitude",
                    "itemId": "capitalLongitude",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Capital Longitude",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Capital Longitude",
                    "fieldId": "08B77EEF-54E7-4012-8BE4-C97896382FA2",
                    "minValue": "0",
                    "maxValue": "11",
                    "bind": "{capitalLongitude}",
                    "columnWidth": 0.5
               }, {
                    "name": "isoNumeric",
                    "itemId": "isoNumeric",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "ISO Numeric",
                    "margin": "5 5 5 5",
                    "fieldLabel": "ISO Numeric",
                    "fieldId": "F8684C1A-B2F8-470B-9CB4-A8D5C09BF045",
                    "minValue": "0",
                    "maxValue": "11",
                    "bind": "{isoNumeric}",
                    "columnWidth": 0.5
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
                    "customId": 782,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 782,
                         "customId": 799
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 782,
                         "customId": 800,
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
                         "parentId": 782,
                         "customId": 801,
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