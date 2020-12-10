import Publication from './Publication.mjs';

export default function Book(a,b,c,d,e)
{
    var p = Publication(a,b,c);
    var API = {
        print(){
            p.print();
            console.log(`${d} , ${e}`);
        }
    }
    return API;
}