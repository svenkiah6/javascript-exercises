const sumAll = function(num1, num2) {




    if(typeof(num1) != "number" || typeof(num2) != "number")
    {
        return "ERROR";
    }

    if(num1<0 || num2<0 )
    {

        return "ERROR";
    }



    let start = num1;
    let end = num2;
    let sum = 0;

    if(num1>num2)
    {
        start =num2;
         end=num1;  
    }

   
    for(i=start;i<=end;i++)
    {
        sum+=i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
