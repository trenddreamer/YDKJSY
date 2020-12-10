function Publication(a,b,c){
    var API = {
        print (){
        console.log(`${a} ${b} ${c}`);
        }
    }
    return API;
}

function Book(a,b,c,d,e)
{
    var pub = Publication(a,b,c);

    var API = {
        print(){
            pub.print()
            console.log(`${d}  ${e}`);
        }
    }
    return API;
}

var myBook = Book('a', 'b', 'c','d','e');
myBook.print();