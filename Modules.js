function Publication(one,two,three)
{
    var API = {
         print(){
             console.log(`${one} , ${two} , ${three}`);
            } 
    };

    return API;

}

var pub = Publication("one","two","three");
pub.print();