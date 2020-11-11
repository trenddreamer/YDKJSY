class Publication{
   constructor(one,two,three){
       this.one = one;
       this.two = two;
       this.three = three;
   };
   print(){
       console.log(`${this.one} , ${this.two} , ${this.three}`)
   }
}

class Book extends Publication{
    
    constructor(one,two,three,four){  
        super(one,two,three)
        this.four = four;
    }
    print(){
        super.print();
        console.log(this.four);
    }
}

var book = new Book("one","two","three","four");
book.print();