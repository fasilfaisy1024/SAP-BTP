sap.ui.jsview("com.ibm.app.view.MainJS", {
    getControllerName: function () {
      return "com.ibm.app.controller.Main";
    },
    createContent: function () {
      var oButton = new sap.m.Button({
        id: "idJSView",
        text: "JS VIEW Button",
        press: "onJSViewPress", 
        width:"1250px"
      });
  
      return oButton;
    },
  });