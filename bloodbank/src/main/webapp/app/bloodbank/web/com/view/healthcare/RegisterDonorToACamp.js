Ext.define('Bloodbank.bloodbank.web.com.view.healthcare.RegisterDonorToACamp', {
     "xtype": "registerDonorToACamp",
     "items": [{
          "xtype": "combo",
          "name": "campId",
          "margin": 5,
          "bindable": "campId",
          "typeAhead": true,
          "queryMode": "local",
          "minChars": 1,
          "fieldLabel": "Active Camps",
          "displayField": "orgName",
          "valueField": "campId",
          "title": "Active Camps",
          "isRelatedWith": "kikggmi",
          "undefined": "campId",
          "itemId": "odldlpi",
          "store": {
               "model": "Bloodbank.bloodbank.shared.com.model.healthcare.RegisterACampModel",
               "autoLoad": true,
               "autoSync": true,
               "sorters": [{
                    "property": "orgName",
                    "direction": "ASC"
               }],
               "proxy": {
                    "type": "ajax",
                    "url": "secure/RegisterACamp/findAll",
                    "actionMethods": {
                         "read": "GET"
                    },
                    "headers": {
                         "Content-Type": "application/json"
                    },
                    "extraParams": {},
                    "reader": {
                         "type": "json",
                         "rootProperty": "response.data"
                    }
               }
          },
          "bind": "{campId}"
     }, {
          "xtype": "combo",
          "name": "donorId",
          "margin": 5,
          "bindable": "donorId",
          "typeAhead": true,
          "queryMode": "local",
          "minChars": 1,
          "fieldLabel": "Doners",
          "displayField": "dName",
          "valueField": "donorId",
          "title": "Doners",
          "isRelatedWith": "kikggmi",
          "undefined": "donorId",
          "itemId": "fgpcmmi",
          "store": {
               "model": "Bloodbank.bloodbank.shared.com.model.healthcare.RegisterADonorModel",
               "autoLoad": true,
               "autoSync": true,
               "sorters": [{
                    "property": "dName",
                    "direction": "ASC"
               }],
               "proxy": {
                    "type": "ajax",
                    "url": "secure/RegisterADonor/findAll",
                    "actionMethods": {
                         "read": "GET"
                    },
                    "headers": {
                         "Content-Type": "application/json"
                    },
                    "extraParams": {},
                    "reader": {
                         "type": "json",
                         "rootProperty": "response.data"
                    }
               }
          },
          "bind": "{donorId}"
     }, {
          "xtype": "checkbox",
          "fieldLabel": "Donnor Request Completed",
          "name": "reqCompleted",
          "bindable": "reqCompleted",
          "margin": 5,
          "itemId": "edgfimi",
          "hidden": true,
          "isRelatedWith": "kikggmi",
          "bind": "{reqCompleted}"
     }],
     "border": true,
     "autoScroll": true,
     "title": "Form",
     "margin": 5,
     "itemId": "oappnji",
     "dockedItems": [{
          "xtype": "toolbar",
          "dock": "bottom",
          "ui": "footer",
          "isToolBar": true,
          "isDockedItem": true,
          "items": [{
               "xtype": "tbfill",
               "itemId": "gniiili"
          }, {
               "xtype": "button",
               "name": "Save",
               "text": "Submit",
               "margin": 5,
               "isSubmitBtn": true,
               "itemId": "oofaaoi",
               "listeners": {
                    "click": "onSaveclick"
               }
          }, {
               "xtype": "button",
               "name": "Reset",
               "text": "Reset",
               "margin": 5,
               "isResetButton": true,
               "itemId": "dfdipdi",
               "listeners": {
                    "click": "onResetclick"
               }
          }],
          "itemId": "kbnbmii",
          "dockedItems": []
     }],
     "requires": ["Bloodbank.bloodbank.shared.com.model.healthcare.RegisterACampModel", "Bloodbank.bloodbank.shared.com.model.healthcare.RegisterADonorModel", "Bloodbank.bloodbank.web.com.controller.healthcare.RegisterDonorToACampController", "Bloodbank.bloodbank.shared.com.viewmodel.healthcare.RegisterDonorToACampViewModel", "Bloodbank.bloodbank.shared.com.model.healthcare.RegisterDonorToACampModel"],
     "extend": "Ext.form.Panel",
     "viewModel": "RegisterDonorToACampViewModel",
     "controller": "RegisterDonorToACampController"
});