import { Commentaire } from "./comment";

export class Collegue {
    constructor(
        public pseudo:string, 
        public imageUrl:string, 
        public score:number,
        public commentaires:Commentaire[]
    ) {}
}
