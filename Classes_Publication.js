class Publication{
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    print(){
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
    }
}

class Book extends Publication
{
    constructor(a,b,c,d,e){
        super(a,b,c);
        this.d = d;
        this.e = e;
    }
    print(){
        super.print();
        console.log(this.d);
        console.log(this.e);
    }
}

var mybook = new Book("a","b","c",'d','e');
mybook.print();