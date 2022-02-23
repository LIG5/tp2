var film = {
    init : function (titre , annee){
        this.titr = titre;
        this.annee = annee;

    },

    decrire : function (){
        var description = this.titre + " (" + this.annee +")";
        return description ;
    }
};

var films =[];
var film = object.create(film)
film.init("ta'ang", 2016);
films.push(film);

film = object.create(film);
film.init("divines", 2016);
films.push(film);

film = object.create(film);
film.init("djuste la fin du monde", 2016);
films.push(film);

films.forEch(function (film){}) ;{
    console.log(film.decrire());

}

function recherche(){
var x =form.inp.value ;
for (var i=0 ; i<films.length;i++){
    if(x===films[i])
    console.log(films[i])
}
}
 



