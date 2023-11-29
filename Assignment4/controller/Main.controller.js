sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device", // Import Device module
    "sap/ui/core/Fragment"
], function (Controller, Device, Fragment) {
    
    return Controller.extend("com.ibm.sampleapp.controller.Main", {
      device: Device,
      onInit: function () {},
      onBeforeRendering: function () {},
      onAfterRendering: function () {},
      onExit: function () {},

      onRegisterPress: function () {
          this._loadAndOpenFragment("com.ibm.sampleapp.fragments.Input");
      },
      onPressCloseDialog: function () {
          this._closeDialogFragment();
      },
      _loadAndOpenFragment: function (sFragmentName) {
          var oView = this.getView();
          Fragment.load({
              name: sFragmentName,
              type: "XML",
              controller: this
          }).then(function (oFragment) {
              this._oDialogFragment = oFragment;
              oView.addDependent(this._oDialogFragment);
              this._oDialogFragment.open();
          }.bind(this)).catch(function (err) {
              debugger;
          });
      },
      _closeDialogFragment: function () {
          if (this._oDialogFragment) {
              this._oDialogFragment.close();
              this._oDialogFragment.destroy();
              this._oDialogFragment = null;
          }
      }
  });
});