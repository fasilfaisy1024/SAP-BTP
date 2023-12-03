sap.ui.define(
  [
    "jquery.sap.global",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/f/FlexibleColumnLayoutSemanticHelper",
  ],
  function (
    jQuery,
    UIComponent,
    JSONModel,
    FlexibleColumnLayoutSemanticHelper
  ) {
    "use strict";

    var Component = UIComponent.extend("com.sapui5.zpurchase07.Component", {
      metadata: {
        manifest: "json",
      },

      init: function () {
        UIComponent.prototype.init.apply(this, arguments);

        var oModel = new JSONModel();
        this.setModel(oModel);

        var oProductsModel = new JSONModel(
          sap.ui.require.toUrl("com/sapui5/zpurchase07/mockdata") +
            "/products.json"
        );
        oProductsModel.setSizeLimit(1000);
        this.setModel(oProductsModel, "products");

        this.getRouter().initialize();
      },

      createContent: function () {
        return sap.ui.view({
          viewName: "com.sapui5.zpurchase07.view.FlexibleColumnLayout",
          type: "XML",
        });
      },

      /**
       * Returns an instance of the semantic helper
       * @returns {sap.f.FlexibleColumnLayoutSemanticHelper} An instance of the semantic helper
       */
      getHelper: function () {
        var oFCL = this.getRootControl().byId("fcl"),
          oParams = jQuery.sap.getUriParameters(),
          oSettings = {
            defaultTwoColumnLayoutType: sap.f.LayoutType.TwoColumnsMidExpanded,
            defaultThreeColumnLayoutType:
              sap.f.LayoutType.ThreeColumnsMidExpanded,
            mode: oParams.get("mode"),
            maxColumnsCount: oParams.get("max"),
          };

        return FlexibleColumnLayoutSemanticHelper.getInstanceFor(
          oFCL,
          oSettings
        );
      },
    });
    return Component;
  },
  true
);
