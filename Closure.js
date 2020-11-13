function Counter(step)
{
    var count = 0;
    return function increaseCount(){
        count = count+step;
        console.log(count);
    }


}

var inc1 = Counter(1);
var inc3 = Counter(3);

inc1();
inc1();
inc1();
inc3();
inc3();