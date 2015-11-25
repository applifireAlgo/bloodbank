Ext.define('Bloodbank.bloodbank.web.com.controller.healthcare.RegisterDonorToACampController', {
     extend: 'Bloodbank.view.fw.frameworkController.FrameworkViewController',
     alias: 'controller.RegisterDonorToACampController',
     onSaveclick: function(me, e, eOpts) {
          var jsonData = this.getData(this.view);
          var scope = this.getView();
          Ext.Ajax.request({
               url: 'secure/RegisterDonorToCamp/',
               method: 'POST',
               sender: scope,
               jsonData: jsonData,
               me: me,
               success: function(response, scope) {
                    responseData = Ext.JSON.decode(response.responseText);
                    Ext.Msg.alert('Server Response', responseData.response.message);
                    var odldlpi = scope.sender.down('#odldlpi');
                    scope.sender.controller.setcampIdData(responseData, odldlpi);
                    var fgpcmmi = scope.sender.down('#fgpcmmi');
                    scope.sender.controller.setdonorIdData(responseData, fgpcmmi);
                    var componentsData = [{
                         "compRefId": "edgfimi",
                         "responseBindLevel": "reqCompleted"
                    }];
                    scope.sender.controller.setResponseDataToComponents(responseData, componentsData);
                    scope.sender.reset();
               },
               failure: function(response, scope) {
                    responseData = Ext.JSON.decode(response.responseText);
                    Ext.Msg.alert('Server Response', responseData.response.message);
               }
          }, scope);
     },
     onResetclick: function(me, e, eOpts) {
          var form = me.up('form');
          form.reset();
     }
});