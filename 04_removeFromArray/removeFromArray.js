const removeFromArray = function(myArray, toRemove, ...moreToRemove) {




    //moreToRemove is an empty array by default

        moreToRemove.push(toRemove);


        for(let i=0; i<moreToRemove.length;i++)
        {
            let index = myArray.indexOf(moreToRemove[i])

            if(index>-1)
            {
                myArray.splice(index,1);
            }
        

        }



       

    return myArray;

};

// Do not edit below this line
module.exports = removeFromArray;
