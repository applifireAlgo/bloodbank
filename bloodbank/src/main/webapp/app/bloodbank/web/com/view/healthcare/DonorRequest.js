Ext.define('Bloodbank.bloodbank.web.com.view.healthcare.DonorRequest', {
     "xtype": "donorRequest",
     "items": [{
          "xtype": "displayfield",
          "fieldLabel": "Requirement",
          "margin": 5,
          "bindable": "bloodGrp",
          "value": "TEXT",
          "name": "bloodGrp",
          "itemId": "iddpoli",
          "bind": "{bloodGrp}"
     }, {
          "xtype": "displayfield",
          "fieldLabel": "Date Needed By",
          "margin": 5,
          "bindable": "dateneededby",
          "value": "TEXT",
          "name": "dateneededby",
          "itemId": "aefgini",
          "bind": "{dateneededby}"
     }, {
          "xtype": "displayfield",
          "fieldLabel": "No. of Units",
          "margin": 5,
          "bindable": "numberofUnits",
          "value": "TEXT",
          "name": "numberofUnits",
          "itemId": "hpfdmmi",
          "bind": "{numberofUnits}"
     }, {
          "xtype": "displayfield",
          "fieldLabel": "Requested By Dr",
          "margin": 5,
          "bindable": "requestedByDr",
          "value": "TEXT",
          "name": "requestedByDr",
          "itemId": "kibaabi",
          "isRelatedWith": "kgoclei",
          "bind": "{requestedByDr}"
     }],
     "border": true,
     "autoScroll": true,
     "title": "Form",
     "margin": 5,
     "itemId": "kodmldi",
     "dockedItems": [{
          "xtype": "toolbar",
          "dock": "bottom",
          "ui": "footer",
          "isToolBar": true,
          "isDockedItem": true,
          "items": [{
               "xtype": "tbfill",
               "itemId": "dcafnmi"
          }, {
               "xtype": "button",
               "text": "Accept",
               "isLinkBtn": true,
               "margin": 5,
               "name": "Accept",
               "itemId": "djeakci",
               "listeners": {
                    "click": "onAcceptclick"
               }
          }, {
               "xtype": "button",
               "name": "Reject",
               "text": "Reject",
               "margin": 5,
               "itemId": "kloimfi",
               "listeners": {
                    "click": "onRejectclick"
               }
          }],
          "itemId": "dbhnaci",
          "dockedItems": []
     }],
     "extend": "Ext.form.Panel",
     "requires": ["Bloodbank.bloodbank.web.com.controller.healthcare.DonorRequestController", "Bloodbank.bloodbank.shared.com.viewmodel.healthcare.DonorRequestViewModel", "Bloodbank.bloodbank.shared.com.model.healthcare.DonorRequestModel"],
     "viewModel": "DonorRequestViewModel",
     "controller": "DonorRequestController"
});