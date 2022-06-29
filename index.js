var rect ={
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)

}
    function solveRect(l,b) {
        console.log("solving for rectangle with l =" + l +"and b ="+ b)
        if(l<=0 ||b<=0){
            console.log("rect dimention should e greater than zero: l =")
        }
        else{
            console.log("area of rect is " + rect.area(l,b))
            console.log("perimeter of rect is" + rect.perimeter(l,b))
        }

    }

solveRect(2,4)

solveRect(0,4)

solveRect(2,-4)

solveRect(12,24)