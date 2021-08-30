export default class S{
    constructor(s){
        this._s = s;
    }

    getAprox(){
        let ap = 4
        let nw = 3;
        for(let i = 1; i < 10; i++){
            ap -= 4/nw;
            nw += 2;
            ap += 4/nw;
            nw += 2;
        }
        return ap;
    }
}