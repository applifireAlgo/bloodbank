Ext.define('Bloodbank.bloodbank.shared.com.model.healthcare.RegisterDonorToACampModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "campId",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "donorId",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "reqCompleted",
          "type": "auto",
          "defaultValue": ""
     }]
});