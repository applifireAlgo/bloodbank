/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'Bloodbank',

    extend: 'Bloodbank.Application',
    
/**AppPathDetails**/autoCreateViewport: (Ext.os.deviceType=='Desktop')?'Bloodbank.view.mainleftmenutree.MainPanel':'Bloodbank.view.mobileview.login.Login',
    //autoCreateViewport: (Ext.os.deviceType=='Desktop')?'Bloodbank.view.login.LoginPage':'Bloodbank.view.mobileview.login.LoginPage',//'Bloodbank.view.login.Login'
    	
    //-------------------------------------------------------------------------
    // Most customizations should be made to Bloodbank.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
