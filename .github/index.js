/* const Caroline = {
    name: "Caroline",
    dob: 2004,
    graduated: false,   
    age: function() {
        console.log(this);
        return 2020 - this.dob;
    }
}; */
 /*  const Caroline = {
  name: "Caroline",
  dob: 2004,
  graduated: false,
  age: function() {
    return 2020 - this.dob;
  }
};
 */
/* const Homer = {
    name: "Homer",
    age: 32,
    family: {
        wife: {
            name: "Marge"
        },
        son: {
            name: "Bart"
        }
    },
    pets: ["cat", "dog"]
};  */
/* const Haoran = {
    name: "how",
    dob: 2001,
    year: "Senior"
    age: function() {
        return 2020 = this.dob;
    }
}; */
/* //const Eric = Haoran; //Eric doesn't exist, just modifying Haoran
const Eric = Haoran.year; //reference to Haoran
Eric.name = "Eric";
const Christian = {};
Christian.dob = Haoran.dob;
// or Christian.dob = 2003;
 */

/* const calculator = {
    add: //function x + y
    subtract: //function x - y
}; */

const presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" }
  ];

  //Challenge 1
/*   const democrats = presidents.filter(president => president.party === "D");
  console.log(democrats); */

 //Challenge 2 *Tried to make the whole thing a function instead of const
/*  const oneTermRep = presidents.filter(function(president){
     if(president.terms === 1 && president.party === "R") {
         return true;
     }
 });
 console.log(oneTermRep);  */

 //Challenge 3 *Mine looks a little different, is that ok
/*  const reversedPres = presidents.reverse();
 const recent = presidents.slice(-3);
 console.log(recent); */

 //Challenge 4 *First is mine, second I got from video.
/*  const twoTermDem = presidents.filter(function(president){
    if(president.terms === 2 && president.party === "D") {
        return true;
    }
});
 console.log(twoTermDem); */

 //or

 /* const twoTermDem = presidents.filter(element => element.terms === 2 && element.party === "D")
 console.log(twoTermDem); */

 //Challenge 5 *I used filter instead of some, is that ok?
 
/* const LBJTheDem = presidents.filter(function(president){
    if (president => president.name === "Lyndon Johnson" && president.terms === 2) {
        alert ("LBJ served two terms");
    }
    else {
        alert ("LBJ was one and done");
    }
}) */

  //Challenge Questions
  //1) Filter all presidents, leaving only the Democratic ones
  
  //2)Filter all presidents to leave only one term Republican presidents HINT use If statement
  
  //3) return only the last three presidents
  
  //4) log all dems who served 2 terms. HINT use chain filter, filter and slice
  
  //BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"

 //presidents.forEach(el => console.log (el))

