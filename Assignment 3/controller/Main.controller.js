sap.ui.define(['sap/ui/core/mvc/Controller'],function(oController){
    return oController.extend('sapui5.controller.Main',{
        function(){
            gv=this.getView()
            var va=gv.byId('vertically')
            va.destroyContent()
        },
        function2(){
            gv=this.getView()
            var va=gv.byId('vertically')
            console.log('d');
            va.addContent('<text text="New text"/>')
        }
    })
})