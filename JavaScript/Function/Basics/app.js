function singSong()
{
    console.log("Calm Down");
    console.log("Calm Down");
}

function rant(message)
{
    message.toUpperCase()
    console.log(message);
    console.log(message.toUpperCase());
}

function repeat(str, numTimes)
{
    let result = '';
    for(let i=0; i<numTimes; i++)
        result += str;
    console.log(result);
}

function returnDay(num)
{
    const weekArr = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    if(num < 1 || num > 7)
        return null;
    else
        return weekArr[num];
}