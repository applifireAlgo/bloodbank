Ext.define('Bloodbank.bloodbank.web.com.view.healthcare.RegisterACampMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "RegisterACampMainController",
     "restURL": "/RegisterACamp",
     "defaults": {
          "split": true
     },
     "requires": ["Bloodbank.bloodbank.shared.com.model.healthcare.RegisterACampModel", "Bloodbank.bloodbank.web.com.controller.healthcare.RegisterACampMainController", "Bloodbank.bloodbank.shared.com.model.location.AddressTypeModel", "Bloodbank.bloodbank.shared.com.model.location.CountryModel", "Bloodbank.bloodbank.shared.com.model.location.StateModel", "Bloodbank.bloodbank.shared.com.model.location.CityModel", "Bloodbank.bloodbank.shared.com.viewmodel.healthcare.RegisterACampViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "Register A Camp",
               "name": "RegisterACampTreeContainer",
               "itemId": "RegisterACampTreeContainer",
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
                    "itemId": "RegisterACampTree",
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
                    "displayName": "Register A Camp",
                    "name": "RegisterACamp",
                    "itemId": "RegisterACampForm",
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
                                   "name": "orgName",
                                   "itemId": "orgName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Organization Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Organization Name<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "52FC2366-9630-48B5-B375-638956B0A592",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{orgName}"
                              }, {
                                   "name": "rsnForCamp",
                                   "itemId": "rsnForCamp",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Reason For Camp",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Reason For Camp<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "C1E83798-14E1-45F3-9394-0AD928FB2BDA",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{rsnForCamp}"
                              }, {
                                   "name": "bloodBankName",
                                   "itemId": "bloodBankName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Blood Bank Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Blood Bank Name<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "3F6017E5-8423-4919-9AA6-E9402CAD5F01",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{bloodBankName}"
                              }, {
                                   "name": "fromDate",
                                   "itemId": "fromDate",
                                   "xtype": "customDateField",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "From Date",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "From Date<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "95D56A47-4F98-4D4A-B6B8-C9508A79BAA4",
                                   "columnWidth": 0.5,
                                   "bind": "{fromDate}"
                              }, {
                                   "name": "campTime",
                                   "itemId": "campTime",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Camp Time",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Camp Time<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "3A81D1C2-609F-497C-963D-AFF37575E5D0",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{campTime}"
                              }, {
                                   "name": "expectedCnt",
                                   "itemId": "expectedCnt",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "No Of Donors Expected",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "No Of Donors Expected<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "C0E170BC-8E2D-4385-BD23-16C4F5ED768B",
                                   "minValue": "-2147483648",
                                   "maxValue": "2147483647",
                                   "columnWidth": 0.5,
                                   "bind": "{expectedCnt}"
                              }, {
                                   "name": "arrivedCnt",
                                   "itemId": "arrivedCnt",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "No of Donors that arrived",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "No of Donors that arrived",
                                   "fieldId": "AA13162D-39C1-4FA2-A1C2-212DF7BE2857",
                                   "minValue": "-2147483648",
                                   "maxValue": "2147483647",
                                   "columnWidth": 0.5,
                                   "bind": "{arrivedCnt}"
                              }, {
                                   "name": "bledCnt",
                                   "itemId": "bledCnt",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "No of Donors that Bled",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "No of Donors that Bled",
                                   "fieldId": "AF201BD1-F0F2-4BDD-9C8A-41A3EA54568A",
                                   "minValue": "-2147483648",
                                   "maxValue": "2147483647",
                                   "columnWidth": 0.5,
                                   "bind": "{bledCnt}"
                              }, {
                                   "name": "toDate",
                                   "itemId": "toDate",
                                   "xtype": "customDateField",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "To Date",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "To Date<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "BE980583-56FA-4565-BF45-28C56FD77EB4",
                                   "columnWidth": 0.5,
                                   "bind": "{toDate}"
                              }]
                         }]
                    }, {
                         "xtype": "form",
                         "displayName": "Address",
                         "title": "Address",
                         "name": "Address",
                         "itemId": "AddressForm",
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
                                        "name": "addressTypeId",
                                        "itemId": "addressTypeId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Address Type",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Address Type<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "6D51D27F-7C55-4D66-92DB-D38E491D188E",
                                        "errorMessage": "Please enter valid Address type",
                                        "restURL": "AddressType",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "typeAhead": true,
                                        "queryMode": "local",
                                        "minChars": 2,
                                        "store": {
                                             "data": [],
                                             "model": "Bloodbank.bloodbank.shared.com.model.location.AddressTypeModel"
                                        },
                                        "forceSelection": true,
                                        "columnWidth": 0.5,
                                        "bind": "{address.addressTypeId}"
                                   }, {
                                        "name": "addressLabel",
                                        "itemId": "addressLabel",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Address Label",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Address Label",
                                        "fieldId": "E6C7E463-0BE4-4E3D-9111-BCE31EAE24F8",
                                        "minLength": "0",
                                        "maxLength": "11",
                                        "columnWidth": 0.5,
                                        "bind": "{address.addressLabel}"
                                   }, {
                                        "name": "address1",
                                        "itemId": "address1",
                                        "xtype": "textareafield",
                                        "customWidgetType": "vdTextareafield",
                                        "displayName": "Address1",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Address1",
                                        "fieldId": "BEE7BD32-23C9-43CB-B860-2A5E637829CB",
                                        "columnWidth": 0.5,
                                        "bind": "{address.address1}"
                                   }, {
                                        "name": "address2",
                                        "itemId": "address2",
                                        "xtype": "textareafield",
                                        "customWidgetType": "vdTextareafield",
                                        "displayName": "Address2",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Address2",
                                        "fieldId": "CA4B56F4-E92A-44E6-9E6C-E830F5623102",
                                        "columnWidth": 0.5,
                                        "bind": "{address.address2}"
                                   }, {
                                        "name": "address3",
                                        "itemId": "address3",
                                        "xtype": "textareafield",
                                        "customWidgetType": "vdTextareafield",
                                        "displayName": "Address3",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Address3",
                                        "fieldId": "D18727FC-8019-4325-BE4B-6F1BF6C89C03",
                                        "columnWidth": 0.5,
                                        "bind": "{address.address3}"
                                   }, {
                                        "name": "countryId",
                                        "itemId": "countryId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Country",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Country<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "05217E6B-D469-4E1E-AEDF-6EFD9AC8BA17",
                                        "errorMessage": "Please enter Country",
                                        "restURL": "Country",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "typeAhead": true,
                                        "queryMode": "local",
                                        "minChars": 2,
                                        "store": {
                                             "data": [],
                                             "model": "Bloodbank.bloodbank.shared.com.model.location.CountryModel"
                                        },
                                        "forceSelection": true,
                                        "columnWidth": 0.5,
                                        "bind": "{address.countryId}",
                                        "listeners": {
                                             "change": "onCountryIdChange"
                                        }
                                   }, {
                                        "name": "stateId",
                                        "itemId": "stateId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "State",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "State<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "F9235AE5-1529-4F27-B47D-C672729DF870",
                                        "errorMessage": "Please enter State",
                                        "restURL": "State",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "typeAhead": true,
                                        "queryMode": "local",
                                        "minChars": 2,
                                        "store": {
                                             "data": [],
                                             "model": "Bloodbank.bloodbank.shared.com.model.location.StateModel"
                                        },
                                        "forceSelection": true,
                                        "columnWidth": 0.5,
                                        "bind": "{address.stateId}",
                                        "listeners": {
                                             "change": "onStateIdChange"
                                        }
                                   }, {
                                        "name": "cityId",
                                        "itemId": "cityId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "City",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "City<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "C76A5158-B2A3-4D08-8439-DB9EB5B7E27B",
                                        "errorMessage": "Please enter City",
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
                                        "forceSelection": true,
                                        "columnWidth": 0.5,
                                        "bind": "{address.cityId}"
                                   }, {
                                        "name": "zipcode",
                                        "itemId": "zipcode",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Postal Code",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Postal Code<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "C2902F68-7637-4CDD-8975-B24E9F2379DD",
                                        "minLength": "0",
                                        "maxLength": "6",
                                        "errorMessage": "Please enter postal code",
                                        "columnWidth": 0.5,
                                        "bind": "{address.zipcode}"
                                   }, {
                                        "name": "latitude",
                                        "itemId": "latitude",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Latitude",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Latitude",
                                        "fieldId": "35ED0241-CAC7-41B2-8243-25A612AE6FC3",
                                        "minLength": "0",
                                        "maxLength": "64",
                                        "columnWidth": 0.5,
                                        "bind": "{address.latitude}"
                                   }, {
                                        "name": "longitude",
                                        "itemId": "longitude",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Longitude",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Longitude",
                                        "fieldId": "5323EE50-10EC-4639-B4DC-581DC8BEADC9",
                                        "minLength": "0",
                                        "maxLength": "64",
                                        "columnWidth": 0.5,
                                        "bind": "{address.longitude}"
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
                    "viewModel": "RegisterACampViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "Register A Camp",
                    "title": "Details Grid",
                    "name": "RegisterACampGrid",
                    "itemId": "RegisterACampGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "campId",
                         "dataIndex": "campId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "Organization Name",
                         "dataIndex": "orgName",
                         "flex": 1
                    }, {
                         "header": "Reason For Camp",
                         "dataIndex": "rsnForCamp",
                         "flex": 1
                    }, {
                         "header": "Blood Bank Name",
                         "dataIndex": "bloodBankName",
                         "flex": 1
                    }, {
                         "header": "From Date",
                         "dataIndex": "fromDate",
                         "flex": 1
                    }, {
                         "header": "Camp Time",
                         "dataIndex": "campTime",
                         "flex": 1
                    }, {
                         "header": "No Of Donors Expected",
                         "dataIndex": "expectedCnt",
                         "flex": 1
                    }, {
                         "header": "No of Donors that arrived",
                         "dataIndex": "arrivedCnt",
                         "flex": 1
                    }, {
                         "header": "No of Donors that Bled",
                         "dataIndex": "bledCnt",
                         "flex": 1
                    }, {
                         "header": "To Date",
                         "dataIndex": "toDate",
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
               "displayName": "Register A Camp",
               "name": "RegisterACamp",
               "itemId": "RegisterACampForm",
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
                              "name": "orgName",
                              "itemId": "orgName",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Organization Name",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Organization Name<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "52FC2366-9630-48B5-B375-638956B0A592",
                              "minLength": "0",
                              "maxLength": "256",
                              "columnWidth": 0.5,
                              "bind": "{orgName}"
                         }, {
                              "name": "rsnForCamp",
                              "itemId": "rsnForCamp",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Reason For Camp",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Reason For Camp<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "C1E83798-14E1-45F3-9394-0AD928FB2BDA",
                              "minLength": "0",
                              "maxLength": "256",
                              "columnWidth": 0.5,
                              "bind": "{rsnForCamp}"
                         }, {
                              "name": "bloodBankName",
                              "itemId": "bloodBankName",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Blood Bank Name",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Blood Bank Name<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "3F6017E5-8423-4919-9AA6-E9402CAD5F01",
                              "minLength": "0",
                              "maxLength": "256",
                              "columnWidth": 0.5,
                              "bind": "{bloodBankName}"
                         }, {
                              "name": "fromDate",
                              "itemId": "fromDate",
                              "xtype": "customDateField",
                              "customWidgetType": "vdDatefield",
                              "displayName": "From Date",
                              "margin": "5 5 5 5",
                              "fieldLabel": "From Date<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "95D56A47-4F98-4D4A-B6B8-C9508A79BAA4",
                              "columnWidth": 0.5,
                              "bind": "{fromDate}"
                         }, {
                              "name": "campTime",
                              "itemId": "campTime",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Camp Time",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Camp Time<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "3A81D1C2-609F-497C-963D-AFF37575E5D0",
                              "minLength": "0",
                              "maxLength": "256",
                              "columnWidth": 0.5,
                              "bind": "{campTime}"
                         }, {
                              "name": "expectedCnt",
                              "itemId": "expectedCnt",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "No Of Donors Expected",
                              "margin": "5 5 5 5",
                              "fieldLabel": "No Of Donors Expected<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "C0E170BC-8E2D-4385-BD23-16C4F5ED768B",
                              "minValue": "-2147483648",
                              "maxValue": "2147483647",
                              "columnWidth": 0.5,
                              "bind": "{expectedCnt}"
                         }, {
                              "name": "arrivedCnt",
                              "itemId": "arrivedCnt",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "No of Donors that arrived",
                              "margin": "5 5 5 5",
                              "fieldLabel": "No of Donors that arrived",
                              "fieldId": "AA13162D-39C1-4FA2-A1C2-212DF7BE2857",
                              "minValue": "-2147483648",
                              "maxValue": "2147483647",
                              "columnWidth": 0.5,
                              "bind": "{arrivedCnt}"
                         }, {
                              "name": "bledCnt",
                              "itemId": "bledCnt",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "No of Donors that Bled",
                              "margin": "5 5 5 5",
                              "fieldLabel": "No of Donors that Bled",
                              "fieldId": "AF201BD1-F0F2-4BDD-9C8A-41A3EA54568A",
                              "minValue": "-2147483648",
                              "maxValue": "2147483647",
                              "columnWidth": 0.5,
                              "bind": "{bledCnt}"
                         }, {
                              "name": "toDate",
                              "itemId": "toDate",
                              "xtype": "customDateField",
                              "customWidgetType": "vdDatefield",
                              "displayName": "To Date",
                              "margin": "5 5 5 5",
                              "fieldLabel": "To Date<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "BE980583-56FA-4565-BF45-28C56FD77EB4",
                              "columnWidth": 0.5,
                              "bind": "{toDate}"
                         }]
                    }]
               }, {
                    "xtype": "form",
                    "displayName": "Address",
                    "title": "Address",
                    "name": "Address",
                    "itemId": "AddressForm",
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
                                   "name": "addressTypeId",
                                   "itemId": "addressTypeId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Address Type",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Address Type<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "6D51D27F-7C55-4D66-92DB-D38E491D188E",
                                   "errorMessage": "Please enter valid Address type",
                                   "restURL": "AddressType",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Bloodbank.bloodbank.shared.com.model.location.AddressTypeModel"
                                   },
                                   "forceSelection": true,
                                   "columnWidth": 0.5,
                                   "bind": "{address.addressTypeId}"
                              }, {
                                   "name": "addressLabel",
                                   "itemId": "addressLabel",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Address Label",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Address Label",
                                   "fieldId": "E6C7E463-0BE4-4E3D-9111-BCE31EAE24F8",
                                   "minLength": "0",
                                   "maxLength": "11",
                                   "columnWidth": 0.5,
                                   "bind": "{address.addressLabel}"
                              }, {
                                   "name": "address1",
                                   "itemId": "address1",
                                   "xtype": "textareafield",
                                   "customWidgetType": "vdTextareafield",
                                   "displayName": "Address1",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Address1",
                                   "fieldId": "BEE7BD32-23C9-43CB-B860-2A5E637829CB",
                                   "columnWidth": 0.5,
                                   "bind": "{address.address1}"
                              }, {
                                   "name": "address2",
                                   "itemId": "address2",
                                   "xtype": "textareafield",
                                   "customWidgetType": "vdTextareafield",
                                   "displayName": "Address2",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Address2",
                                   "fieldId": "CA4B56F4-E92A-44E6-9E6C-E830F5623102",
                                   "columnWidth": 0.5,
                                   "bind": "{address.address2}"
                              }, {
                                   "name": "address3",
                                   "itemId": "address3",
                                   "xtype": "textareafield",
                                   "customWidgetType": "vdTextareafield",
                                   "displayName": "Address3",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Address3",
                                   "fieldId": "D18727FC-8019-4325-BE4B-6F1BF6C89C03",
                                   "columnWidth": 0.5,
                                   "bind": "{address.address3}"
                              }, {
                                   "name": "countryId",
                                   "itemId": "countryId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Country",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Country<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "05217E6B-D469-4E1E-AEDF-6EFD9AC8BA17",
                                   "errorMessage": "Please enter Country",
                                   "restURL": "Country",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Bloodbank.bloodbank.shared.com.model.location.CountryModel"
                                   },
                                   "forceSelection": true,
                                   "columnWidth": 0.5,
                                   "bind": "{address.countryId}",
                                   "listeners": {
                                        "change": "onCountryIdChange"
                                   }
                              }, {
                                   "name": "stateId",
                                   "itemId": "stateId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "State",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "State<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "F9235AE5-1529-4F27-B47D-C672729DF870",
                                   "errorMessage": "Please enter State",
                                   "restURL": "State",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Bloodbank.bloodbank.shared.com.model.location.StateModel"
                                   },
                                   "forceSelection": true,
                                   "columnWidth": 0.5,
                                   "bind": "{address.stateId}",
                                   "listeners": {
                                        "change": "onStateIdChange"
                                   }
                              }, {
                                   "name": "cityId",
                                   "itemId": "cityId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "City",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "City<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "C76A5158-B2A3-4D08-8439-DB9EB5B7E27B",
                                   "errorMessage": "Please enter City",
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
                                   "forceSelection": true,
                                   "columnWidth": 0.5,
                                   "bind": "{address.cityId}"
                              }, {
                                   "name": "zipcode",
                                   "itemId": "zipcode",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Postal Code",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Postal Code<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "C2902F68-7637-4CDD-8975-B24E9F2379DD",
                                   "minLength": "0",
                                   "maxLength": "6",
                                   "errorMessage": "Please enter postal code",
                                   "columnWidth": 0.5,
                                   "bind": "{address.zipcode}"
                              }, {
                                   "name": "latitude",
                                   "itemId": "latitude",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Latitude",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Latitude",
                                   "fieldId": "35ED0241-CAC7-41B2-8243-25A612AE6FC3",
                                   "minLength": "0",
                                   "maxLength": "64",
                                   "columnWidth": 0.5,
                                   "bind": "{address.latitude}"
                              }, {
                                   "name": "longitude",
                                   "itemId": "longitude",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Longitude",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Longitude",
                                   "fieldId": "5323EE50-10EC-4639-B4DC-581DC8BEADC9",
                                   "minLength": "0",
                                   "maxLength": "64",
                                   "columnWidth": 0.5,
                                   "bind": "{address.longitude}"
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
               "viewModel": "RegisterACampViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});