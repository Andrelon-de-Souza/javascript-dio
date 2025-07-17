class formaDeBolo {
    constructor(saborDaMassa, SaborRecheio){
        this.saborDaMassa = saborDaMassa;
        this.SaborRecheio = SaborRecheio;
    }

    escrever() {
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.SaborRecheio}`);
    }

    assar() {
        console.log("Bolo assando de " + this.saborDaMassa);
        
    }
}

let boloFesta = new formaDeBolo("Chocolate", "Ninho");
let boloPremium = new formaDeBolo("Iorgute", "Chocolate");

boloFesta.saborDaMassa = "Floresta negra";

boloFesta.escrever();
boloPremium.escrever();
boloPremium.assar();