"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Sejour.prototype.getNom = function () { return this._nom; };
    Sejour.prototype.getPrix = function () { return this._prix; };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejour = [
            new Sejour('s1', 100),
            new Sejour('s2', 200),
            new Sejour('s3', 300)
        ];
    }
    SejourService.prototype.searchByName = function (nom) {
        return this._sejour.filter(function (sejour) { return sejour.getNom() == nom; });
    };
    return SejourService;
}());
var sejourService = new SejourService();
console.log(sejourService.searchByName("s1"));
console.log(sejourService.searchByName("s2"));
console.log(sejourService.searchByName("s3"));
