function scuberGreetingForFeet(ride){
 if (ride <= 400) {
  return "This one is on me!";
} 
  else if (ride > 2500) {
    return "No can do.";
  }
  else if(ride > 2000) {
    return "I will gladly take your thirty bucks."
}
}
function ternaryCheckCity(city) {
const findCity = city === "NYC" ? "Ok, sounds good." : "No go."
 return findCity
}
function switchOnCharmFromTip(output){
  switch(output) {
    case (output) = "generous" :
      return "Thank you so much.";
    break;
    case (output) = "not as generous" :
      return "Thank you.";
    break;
    default:
      return "Bye.";
  }
}