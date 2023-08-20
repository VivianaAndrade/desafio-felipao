let nome = "Vivi"
let nome2 = "Pedro"
let xp = 1500
let xp2= 5000
  /*  switch (xp) {
        case xp <1000:
            xp = "Ferro"
        break
        case xp >=1000 && xp <2000:
            xp = "Bronze"
        break
        case xp >=2000 && xp <5000:
            xp = "Prata"
        break
        case xp >=5000 && xp <7000:
            xp = "Ouro"
        break
        case xp >=7000 && xp <8000:
            xp = "Platina"
        break
        default: 
        console.log("Escolha Invalida")
}*/
   for(let i=0; i<3; i++)
   {

        if (xp < 1000){
            xp = "Ferro"
        }
        else if (xp >=1000 && xp < 2000) {
            xp = "Bronze"
        }
        else if (xp >=2000 && xp < 5000){
            xp = "Prata"
        }
        else if (xp2 >=5000 && xp2 < 7000){
            xp2 = "Ouro"
        }
        else if (xp >=7000 && xp < 8000){
            xp= "Platina"
        }
        
        console.log("A Herói de nome " + nome2 + " está no nível de " + xp2)
        console.log("A Heroina de nome " + nome + " está no nível de " + xp)
        
   }