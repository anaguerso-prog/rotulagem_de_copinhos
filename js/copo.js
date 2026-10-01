class Copo{
    constructor(raioMaior, raioMenor, altura){
        this.raioMaior = raioMaior
        this.raioMenor = raioMenor
        this.altura = altura
    }
    calcGeratris(){
        return (this.altura * this.altura) + ((this.raioMaior - this.raioMenor) * (this.raioMaior - this.raioMenor))
    }
    calcABMaior(){
        return Math.PI * (this.raioMaior * this.raioMaior)
    }
    calcABMenor(){
        return Math.PI * (this.raioMenor * this.raioMenor)
    }
    calcAreaLateral(){
        return Math.PI * this.calcGeratris() * (this.raioMaior + this.raioMenor)
    }
    calcVolume(){
        return Math.PI * this.altura / 3 * ((this.raioMaior * this.raioMaior) + this.raioMaior * this.raioMenor + (this.raioMenor * this.raioMenor))
    }
    classificar(){
        
        if(this.calcVolume() <= 180){
            return ' copo de dose! Ideal para café!'
        }else if(this.calcVolume() >= 181 && this.calcVolume() <= 350){
            return ' copo padrão! Ideal para servir água ou chá!'
        }else if(this.calcVolume() >= 350){
            return ' copo grande! Ideal para sucos e refrigerantes!'
        }

    }

}

module.exports = Copo
