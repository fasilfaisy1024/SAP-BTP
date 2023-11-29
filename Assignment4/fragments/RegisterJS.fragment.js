sap.ui.jsfragment("com.ibm.sampleapp.fragments.InputJS", {
  createContent: function () {
    var oInput = new sap.m.Input({
      value: "Fragment JS"
      
    });

    return oInput;
    
  },
});