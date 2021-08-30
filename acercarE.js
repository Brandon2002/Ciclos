export default class E{
    constructor(e){
        this._e = e;
    }

    getAprox(){
        let aprox = 0;
        for(let i = 1; i < 10; i++){
            aprox += 1/this.getFact(i);
        } 
        return aprox;
    }

    getFact(num){
        let fact = 1;
        for(let i = 1; i < num; i++){
            fact = fact * i;
        }
        return fact;
    }
}