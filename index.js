const rect = require('./rectangle')

    function solveRect(l,b) {
        console.log("solving for rectangle with l =" + l +"and b ="+ b)
       
        rect(l,b, (err, rectangle) => {
            if(err){
                console.log("ERROR: ", err.message)
            }
            else{
                console.log("The area of the rect of dimentions l=" + l + " and b " + b + " is " + rectangle.area() )
                console.log("The perimeter of the rect of dimentions l=" + l + " and b " + b + " is " + rectangle.perimeter() )
            }

        })
        console.log("this statment is after the call to rect")

    }

solveRect(2,4)

solveRect(0,4)

solveRect(2,-4)

solveRect(12,24)