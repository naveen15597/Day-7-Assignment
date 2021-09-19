

class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating=="" ? "PG" : rating;
    }
    getPG(movies){
        return movies.filter(val=>val.rating=='PG');
    }
}

const value1= new Movie('Casino Royale','Eon Productions','PG­13');
const value2= new Movie('Chandramukhi','2k Entertainment','PG­');
const value3= new Movie('MAster','SK Productions',"PG13");
const value4= new Movie('kanaa','SK Productions',"");
console.log(value3);
// console.log([value1,value2,value3].getPG([value1,value2,value3]));