console.log("This is the Exercise 5.2 of Assignment 5");
//count no. of vowels using Map.
//isVowel will check whether char is vowel or not
function isVowel(char){
    return "aeiou".includes(char);

}
//vowelCount will count the no of vowels in a String and return count using Map(key, value)
function vowelCount(str){
    const vowelMap=new Map();
    for(let char of str){
        let lowerCaseChar=char.toLowerCase();
        if(isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar,vowelMap.get(lowerCaseChar)+1);
                }
                else{
                    vowelMap.set(lowerCaseChar,1);
                }
            }
        }
        return vowelMap;
    }
    const a=vowelCount("suresh kumar");
    console.log(a);
    console.log(vowelCount("My name is Suresh Kumar"));
