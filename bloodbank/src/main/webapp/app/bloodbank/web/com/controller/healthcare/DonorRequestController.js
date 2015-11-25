Ext.define('Bloodbank.bloodbank.web.com.controller.healthcare.DonorRequestController', {
     extend: 'Bloodbank.view.fw.frameworkController.FrameworkViewController',
     alias: 'controller.DonorRequestController',
     onRejectclick: function(me, e, eOpts) {
          var kibaabi = this.view.down('#kibaabi');
          kibaabi.setConfig({
               "fieldLabel": "DisplayText1"
          });
          var jsonData = {};
          var scope = this.getView();
          Ext.Ajax.request({
               url: 'secure/Country/',
               method: 'POST',
               sender: scope,
               jsonData: jsonData,
               me: me,
               success: function(response, scope) {
                    responseData = Ext.JSON.decode(response.responseText);
                    Ext.Msg.alert('Server Response', responseData.response.message);
               },
               failure: function(response, scope) {
                    responseData = Ext.JSON.decode(response.responseText);
                    Ext.Msg.alert('Server Response', responseData.response.message);
               }
          }, scope);
     },
     onAcceptclick: function(me, e, eOpts) {
          var component = Ext.create('Bloodbank.bloodbank.web.com.view.healthcare.DonorVisitMain', {
               disableDB: true,
               primaryKey: primaryKey,
               closable: true
          });
          component.title = 'DonorVisit';
          this.createWindow(component);
     }
});