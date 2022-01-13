let userName = prompt("Welcome to GC mini-golf! What is your name?");
let numHoles = prompt("Hi, "+userName+"! Would you like to play 3 or 6 holes?");
let total = 0;

if (numHoles === "3"){
    for (let i = 1; i <= numHoles; i++) {
        let par = Number( prompt("How many putts for hole "+i+"? (par: 3)"))  
        total += par
    }
    if (total === 9){
    console.log("Good game, "+userName+". Your total par was 0.");
    }
    else if (total < 9){
        let result = 9 - total;
    console.log("Great job, "+userName+"! Your total par was -"+result+"."); 
    }
    else if (total > 9){
        result = total - 9;
    console.log("Nice try, "+userName+"... Your total par was +"+result+".");   
    }
    }
if (numHoles === "6"){
    for (i = 1; i <= numHoles; i++) {
        let par = Number (prompt ("How many putts for hole "+i+"? (par: 3)"))
        total += par
    }
    if (total === 18){
    console.log("Good game, "+userName+". Your total par was 0.")
    }
    else if (total < 18){
        let result = 18 - total;
    console.log("Great job, "+userName+". Your total par was -"+result+".");
    }
    else if (total > 18){
        result = total - 18;
    console.log("Nice try, "+userName+"... Your total par was +"+result+".")}
    }

    




