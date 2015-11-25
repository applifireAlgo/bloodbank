Ext.define('Bloodbank.bloodbank.web.com.view.healthcare.RegisterADonorMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "RegisterADonorMainController",
     "restURL": "/RegisterADonor",
     "defaults": {
          "split": true
     },
     "requires": ["Bloodbank.bloodbank.shared.com.model.healthcare.RegisterADonorModel", "Bloodbank.bloodbank.web.com.controller.healthcare.RegisterADonorMainController", "Bloodbank.bloodbank.shared.com.model.contacts.GenderModel", "Bloodbank.bloodbank.shared.com.model.healthcare.BloodGroupModel", "Bloodbank.bloodbank.shared.com.model.location.AddressTypeModel", "Bloodbank.bloodbank.shared.com.model.location.CountryModel", "Bloodbank.bloodbank.shared.com.model.location.StateModel", "Bloodbank.bloodbank.shared.com.model.location.CityModel", "Bloodbank.bloodbank.shared.com.viewmodel.healthcare.RegisterADonorViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "Register A Donor",
               "name": "RegisterADonorTreeContainer",
               "itemId": "RegisterADonorTreeContainer",
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
                    "itemId": "RegisterADonorTree",
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
                    "displayName": "Register A Donor",
                    "name": "RegisterADonor",
                    "itemId": "RegisterADonorForm",
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
                                   "name": "dName",
                                   "itemId": "dName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Donor Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Donor Name<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "F079E89B-0178-4A68-B1C4-3C42A7EFD82A",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{dName}"
                              }, {
                                   "name": "dob",
                                   "itemId": "dob",
                                   "xtype": "customDateField",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "Date Of Birth",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Date Of Birth<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "6B0F36FB-9170-42DE-9CDD-3CFC08CB05B4",
                                   "columnWidth": 0.5,
                                   "bind": "{dob}"
                              }, {
                                   "name": "gender",
                                   "itemId": "gender",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Gender",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Gender<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "9918ED5C-88D6-4F36-B0A5-3C08D493FB95",
                                   "restURL": "Gender",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Bloodbank.bloodbank.shared.com.model.contacts.GenderModel"
                                   },
                                   "forceSelection": true,
                                   "columnWidth": 0.5,
                                   "bind": "{gender}"
                              }, {
                                   "name": "bloodGroup",
                                   "itemId": "bloodGroup",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Blood Group",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Blood Group<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "D85D5C9D-628B-4602-923E-5F42EB8BB67D",
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
                                   "bind": "{bloodGroup}"
                              }, {
                                   "name": "phone",
                                   "itemId": "phone",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Phone No",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Phone No<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "CCABA06D-2736-4B9A-99EB-37E0C4EFDABD",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{phone}"
                              }, {
                                   "name": "emailId",
                                   "itemId": "emailId",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Email Id",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Email Id<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "3276E354-CBAA-4094-9274-F4533ACFBFAF",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{emailId}"
                              }, {
                                   "name": "lastDate",
                                   "itemId": "lastDate",
                                   "xtype": "customDateField",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "Last Donation Date",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Last Donation Date",
                                   "fieldId": "3C84A647-3315-4789-906C-2DB456282941",
                                   "columnWidth": 0.5,
                                   "bind": "{lastDate}"
                              }, {
                                   "name": "howOften",
                                   "itemId": "howOften",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "How often have you donated in the past ?",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "How often have you donated in the past ?",
                                   "fieldId": "04D7B091-197F-49B4-B69D-C15C3AB9C11F",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "columnWidth": 0.5,
                                   "bind": "{howOften}"
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
                    "viewModel": "RegisterADonorViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "Register A Donor",
                    "title": "Details Grid",
                    "name": "RegisterADonorGrid",
                    "itemId": "RegisterADonorGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "donorId",
                         "dataIndex": "donorId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "Donor Name",
                         "dataIndex": "dName",
                         "flex": 1
                    }, {
                         "header": "Date Of Birth",
                         "dataIndex": "dob",
                         "flex": 1
                    }, {
                         "header": "Gender",
                         "dataIndex": "gender",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Blood Group",
                         "dataIndex": "bloodGroup",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Phone No",
                         "dataIndex": "phone",
                         "flex": 1
                    }, {
                         "header": "Email Id",
                         "dataIndex": "emailId",
                         "flex": 1
                    }, {
                         "header": "Last Donation Date",
                         "dataIndex": "lastDate",
                         "flex": 1
                    }, {
                         "header": "How often have you donated in the past ?",
                         "dataIndex": "howOften",
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
               "displayName": "Register A Donor",
               "name": "RegisterADonor",
               "itemId": "RegisterADonorForm",
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
                              "name": "dName",
                              "itemId": "dName",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Donor Name",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Donor Name<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "F079E89B-0178-4A68-B1C4-3C42A7EFD82A",
                              "minLength": "0",
                              "maxLength": "256",
                              "columnWidth": 0.5,
                              "bind": "{dName}"
                         }, {
                              "name": "dob",
                              "itemId": "dob",
                              "xtype": "customDateField",
                              "customWidgetType": "vdDatefield",
                              "displayName": "Date Of Birth",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Date Of Birth<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "6B0F36FB-9170-42DE-9CDD-3CFC08CB05B4",
                              "columnWidth": 0.5,
                              "bind": "{dob}"
                         }, {
                              "name": "gender",
                              "itemId": "gender",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Gender",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Gender<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "9918ED5C-88D6-4F36-B0A5-3C08D493FB95",
                              "restURL": "Gender",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Bloodbank.bloodbank.shared.com.model.contacts.GenderModel"
                              },
                              "forceSelection": true,
                              "columnWidth": 0.5,
                              "bind": "{gender}"
                         }, {
                              "name": "bloodGroup",
                              "itemId": "bloodGroup",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Blood Group",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Blood Group<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "D85D5C9D-628B-4602-923E-5F42EB8BB67D",
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
                              "bind": "{bloodGroup}"
                         }, {
                              "name": "phone",
                              "itemId": "phone",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Phone No",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Phone No<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "CCABA06D-2736-4B9A-99EB-37E0C4EFDABD",
                              "minLength": "0",
                              "maxLength": "256",
                              "columnWidth": 0.5,
                              "bind": "{phone}"
                         }, {
                              "name": "emailId",
                              "itemId": "emailId",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Email Id",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Email Id<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "3276E354-CBAA-4094-9274-F4533ACFBFAF",
                              "minLength": "0",
                              "maxLength": "256",
                              "columnWidth": 0.5,
                              "bind": "{emailId}"
                         }, {
                              "name": "lastDate",
                              "itemId": "lastDate",
                              "xtype": "customDateField",
                              "customWidgetType": "vdDatefield",
                              "displayName": "Last Donation Date",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Last Donation Date",
                              "fieldId": "3C84A647-3315-4789-906C-2DB456282941",
                              "columnWidth": 0.5,
                              "bind": "{lastDate}"
                         }, {
                              "name": "howOften",
                              "itemId": "howOften",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "How often have you donated in the past ?",
                              "margin": "5 5 5 5",
                              "fieldLabel": "How often have you donated in the past ?",
                              "fieldId": "04D7B091-197F-49B4-B69D-C15C3AB9C11F",
                              "minLength": "0",
                              "maxLength": "256",
                              "columnWidth": 0.5,
                              "bind": "{howOften}"
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
               "viewModel": "RegisterADonorViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});