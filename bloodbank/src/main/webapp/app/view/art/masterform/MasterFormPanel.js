Ext.define('Bloodbank.view.art.masterform.MasterFormPanel',
{
	extend :'Ext.form.Panel',
	xtype: 'masterFormPanel',
	itemId : 'masterFormPanel',
	
	requires: ['Bloodbank.view.art.masterform.MasterFormModel','Bloodbank.view.art.masterform.MasterFormViewModel','Bloodbank.view.art.masterform.MasterFormPanelController'],

	//viewModel: 'masterFormViewModel',
	
	controller: 'masterFormPanelController'

});
	