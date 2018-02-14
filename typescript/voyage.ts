class Sejour {
    constructor(private _nom:string, private _prix:number) {}
    getNom():string { return this._nom; }
    getPrix():number { return this._prix; }
}

class SejourService {
    private _sejour:Sejour[]
    constructor() {
        this._sejour = [
            new Sejour('s1', 100), 
            new Sejour('s2', 200),
            new Sejour('s3', 300)
        ];
    }
    searchByName(nom:string):Sejour[] {
        return this._sejour.filter(sejour => sejour.getNom() == nom);
    }
}

let sejourService = new SejourService();

console.log(sejourService.searchByName("s1"));
console.log(sejourService.searchByName("s2"));
console.log(sejourService.searchByName("s3"));