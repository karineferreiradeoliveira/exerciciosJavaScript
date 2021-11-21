function pcGamer (oProcessador, placadeVideo, aMemoria){
    return{
        oProcessador,
        placadeVideo,
        aMemoria,

        jogar() {
            console.log('Loading...')
        }
    }
}

function oPcGamer(oProcessador, placadeVideo, aMemoria){

    this.oProcessador  = oProcessador,
    this.placadeVideo = placadeVideo,
    this.aMemoria = aMemoria
    this.jogar = function() {
        console.log('Loading...')
    }
}

const oPcGamers = new oPcGamer('5700x', 3070, 64);

console.log(oPcGamers)