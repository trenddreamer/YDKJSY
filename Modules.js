function Publication(one,two,three)
{
    var API = {
         print(){
             console.log(`${one} , ${two} , ${three}`);
            } 
    };

    return API;

}

function Book(one,two,three,four)
{
    var pub = Publication(one,two,three);
    var API = {
        print(){
            pub.print();
            console.log(four);
        }
    }
    return API;
}

var book = Book("one","two","three","four");
book.print();