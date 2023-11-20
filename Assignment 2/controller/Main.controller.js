sap.ui.define(["sap/m/MessageBox", "sap/ui/core/mvc/Controller", "sap/ui/Device"], function (MessageBox, Controller, Device) {
    return Controller.extend("com.ibm.app.controller.Main", {
      device: Device,
      onInit: function () {},
      onBeforeRendering: function () {},
      onAfterRendering: function () {},
      onExit: function () {},
      onHTMLPress: function () {
        var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
        MessageBox.warning(
          "HTML Button",
          {
            icon: MessageBox.Icon.INFORMATION,
            title: "HTML Message",
            actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
            styleClass: bCompact ? "sapUiSizeCompact" : "",
            initialFocus: MessageBox.Action.CANCEL
          }
        );
      },
      onButtonPress: function () {
        alert("Button Pressed!");
      },
      onPressJSON: function () {
        var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
        MessageBox.warning(
          "JSON Button",
          {
            icon: MessageBox.Icon.SUCCESS,
            title: "JSON Message",
            actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
            styleClass: bCompact ? "sapUiSizeCompact" : "",
            initialFocus: MessageBox.Action.CANCEL
          }
        );
      },
      onXMLpress: function (oEvent) {
        var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
        MessageBox.warning(
          "XML Button",
          {
            icon: MessageBox.Icon.WARNING,
            title: "XML Message",
            actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
            styleClass: bCompact ? "sapUiSizeCompact" : "",
            initialFocus: MessageBox.Action.CANCEL
          }
        );
      },
    });
  });