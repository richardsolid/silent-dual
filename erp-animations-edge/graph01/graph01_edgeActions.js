/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'unidades-ex'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         // introducir código aquí
         sym.play();

      });
      //Edge binding end

   })("unidades-ex");
   //Edge symbol end:'unidades-ex'

   //=========================================================
   
   //Edge symbol: 'unidades-noex'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         // introducir código aquí
         sym.play();

      });
      //Edge binding end

   })("unidades-noex");
   //Edge symbol end:'unidades-noex'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1196149138");