Ext.define('Bloodbank.bloodbank.web.com.view.healthcare.RequestList', {
     "xtype": "requestList",
     "items": [{
          "xtype": "listViewBaseView",
          "name": "requestlist",
          "items": [],
          "isListPanel": true,
          "autoScroll": true,
          "border": false,
          "layout": "column",
          "defaults": {
               "columnWidth": "1.0"
          },
          "templateConfig": {
               "uiId": "B19FE247-37C7-48B8-880D-3B6BDD5EBB7D",
               "uiClass": "Bloodbank.bloodbank.web.com.view.healthcare.DonorRequest",
               "uiType": 2,
               "url": "secure/FindByBloodGroupWS/findByBloodGroup",
               "requestMethodType": "POST"
          },
          "title": "ListPanel",
          "padding": 0,
          "margin": 5,
          "itemId": "eidimoi",
          "dockedItems": []
     }],
     "margin": 5,
     "border": true,
     "title": "Panel",
     "itemId": "jiemldi",
     "dockedItems": [],
     "extend": "Ext.panel.Panel",
     "layout": "fit",
     "requires": ["Bloodbank.bloodbank.web.com.controller.healthcare.RequestListController", "Bloodbank.bloodbank.shared.com.viewmodel.healthcare.RequestListViewModel", "Bloodbank.bloodbank.shared.com.model.healthcare.RequestListModel", "Bloodbank.view.fw.component.ListViewBaseView"],
     "viewModel": "RequestListViewModel",
     "controller": "RequestListController"
});