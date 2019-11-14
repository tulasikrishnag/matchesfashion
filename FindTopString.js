/*
The function takes the input as a string and split by the space of each word and store it into the array.
Hedge case: If the splitted word contains special characters for example:
"In a, village of La Mancha, the name of which I have
no desire to call to
mind, there lived not long since one of those gentlemen that keep a, lance
in the lance-rack, an old buckler, a, lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a, salad on most
nights, scraps on Saturdays, lentils on Fridays, and a, pigeon or so extra
on Sundays, made away with three-quarters of his income."
','after each word 'a', added the if checks to handle the scenario.
This logic can also be done using Map, and store the key and counter.

*/
function prac(str)
{
    let keyValue = {
    }

    var getValue = function (propertyName) {
        return keyValue[propertyName];
    };
    
    var words = str.replace("//","").trim().toLowerCase().split(" ");
    for(i = 0 ; i<words.length; i++)
    {
        let curWord = words[i];
        if(curWord.includes(','))
        {
            curWord = curWord.split(",")[0]
        }
        if(curWord.includes('.'))
        {
            curWord = curWord.split(".")[0]
        }
        if(getValue(curWord) === undefined )
        {
            keyValue[curWord] = 1;
        }
        else
        {
            keyValue[curWord] = getValue(curWord) + 1;
        }
    }
   let highOccr = []
    keysSorted = Object.keys(keyValue).sort(function(a,b){return keyValue[b]-keyValue[a]})
    for(let i=0; i<keysSorted.length;i++) {
        if(i >=3)
            break;
       highOccr.push(keysSorted[i].replace(/[^a-zA-Z']/g, ""))
    }
    console.log(JSON.stringify(highOccr));
}
