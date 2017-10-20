/*angular.module("gymdayapp",[])
       .config();*/
//console.log("bakjsnkjanxkjasn");
angular.module("gymdayapp")
       .filter("capitalize", function() {
        return function(input) {
         return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
