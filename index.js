function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue < 400) {
  return "This one is on me!"
  } else if (someValue < 2000) {
  return "That will be twenty bucks."
  } else if (someValue < 2500) {
  return "I will gladly take your thirty bucks."
  } else if (someValue <= 2501)
  return "No can do."  
};

function ternaryCheckCity(city){
  // Write your code here!
  return (city === "NYC" ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let thank;
  switch (tip) {
    case 'generous': 
      thank = 'Thank you so much.';
      break;
    case 'not as generous': 
      thank = 'Thank you.';
      break;
    default: 
      thank = 'Bye.';
      break;
  }
  return thank;
}