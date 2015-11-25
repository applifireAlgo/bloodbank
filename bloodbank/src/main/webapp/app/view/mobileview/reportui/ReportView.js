Ext.define('Bloodbank.view.mobileview.reportui.ReportView', {
	extend : 'Ext.panel.Panel',
	requires : [ 'Bloodbank.view.mobileview.reportui.querycriteria.QueryCriteriaView',
			'Bloodbank.view.mobileview.reportui.datachart.DataChartViewTab',
			'Bloodbank.view.mobileview.reportui.datachart.DataChartViewPanel',
			'Bloodbank.view.mobileview.reportui.ReportViewController' ,
			'Bloodbank.view.mobileview.fw.DataPointPanel',
			'Bloodbank.view.mobileview.googlemaps.map.MapPanel'
			],
	xtype : 'reportview',
	controller : 'reportviewController',
	layout : 'border',
	reportWidgets :["1","2","3","4"],
	//autoScroll : true,
	//margin : '3 0 5 0',

	listeners : {
		scope : 'controller',
		afterrender : 'renderReport'
	}
});
