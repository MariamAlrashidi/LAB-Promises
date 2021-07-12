

// Look at the Menu
/* *************************************************************** */
// 1. Promise Foods has a method called `readMenu()`.
// Call this method and console.log the cheapest burger on the menu once the promise has been resolved.

// hint ('\n') ^_^

//CODE FOR QUESTION 1 HERE

var cheapestOrderName="";

function cheapest(msg){
  let min=Infinity;
  let result=[];
  let lines=msg.split("\n");
  for (let i = 3; i < lines.length; i++) {
    let line = lines[i].split(": ");
    let lastIndex=line.length-1;
    let number=parseFloat(line[lastIndex]);
    
    if(min > number){
      result=line;
      min=number;
    }
  }
  return result;
}


readMenu()
  .then(msg => {
    console.log(msg);
    console.log("------------");
    let arr=cheapest(msg);
    let name=arr[0].split("- ");
    console.log("The cheapest burger on the menu is "+name[1]);

  }).catch(err => {
    console.log(err)
  });



// Order Some Food
/* *************************************************************** */
// 2. For this task, you will use the method order() to order the cheapest burger on the menu.
// The order method has one argument, the name of the burger you would like to order.
// Once the promise has been resolved, console.log description and price .
// Don't be in a hurry; ordering will take a little time

// CODE FOR QUESTION 2 HERE

order("BLUE 'SHROOM")
  .then(msg => {
    console.log("the description is :" + msg.description);
    console.log("the price is :" + msg.price);

  })
  .catch(err => {
    console.log(err)
  });



// 3. Try and use the same method to order() a `quesadilla`.
//  Since Promise Burger only serves burgers, this will throw an error.
//  Make sure that your Promise can be dealt with when it is rejected.

// CODE FOR QUESTION 3 HERE
order("quesadilla")
  .then(msg => {
    console.log("the description is :" + msg.description);
    console.log("the price is :" + msg.price);

  })
  .catch(err => {
    console.log(err);
    console.log("-----------------")
  });

// Add A Burger To The Menu
/* *************************************************************** */

// 4. kitchen also has a method called `addToMenu`.
//  This method has one argument, which expects an object with a name, price, and description.
//  Use this method to add this burger to the menu.
//  Add a method to console.log the response once the promise is resolved!
//  Also add a method to catch an error if something goes wrong

const newBurger = {
  "name": "TRIPLE CORONARY BYPASS",
  "price": 28.95,
  "description": ' It becomes difficult to even describe this, the most preposterous of our Bypass Burgers. All you really need to know is that we use three burger patties, three fried eggs, fourteen slices of American cheese, and ten slices of bacon, all packed between two grilled cheese sandwiches. Figuring out how to add condiments is completely up to you. It’s served in a big bowl of french fries and tater tots covered, in lots of our Cheesy-Cheese Goo. Enjoy!'
}

// CODE FOR QUESTION 4 HERE
addToMenu({ name: newBurger.name, price: newBurger.price, description: newBurger.description }, 1000)
  .then(msg => {
    setTimeout(() => {
      console.log("---------------------------")
      console.log(msg);
    }, 500)
  }).then(msg => {
    readMenu()
      .then(msg => {
        setTimeout(() => {
          console.log(msg);
        }, 500)

      }).catch(err => {
        console.log(err)
      });
  })
  .catch(err => {
    console.log(err)
  });

// 5. Validate that the new item has been added to the menu by calling `readMenu` again.
// We only want to call `readMenu` after we get a response that is successful.
// Remember that we can chain promises together the same way that we can chain jQuery methods.
// db.addToMenu(newBurger)




// REFACTOR QUESTION 4 TO ACCOUNT FOR THIS REQUIREMENT

// Stretch Goals
/* *************************************************************** */
// 6. Let's be honest, people only go to Promise Burger when they are showing out-of-towners around.
// You old college roommates are all visiting Atlanta and want to try out this place.
// They already know what they want to eat!
// Loop through each customer and use the `.order` function on each object within the array.
// Then console.log `All Food Delivered` when ALL of the promises have been resolved.
// This will require you to use a method H3RO-Yasir covered in class !! 

const customers = [
  {
    name: "Khalid",
    order: "Holy Guacamole"
  }, {
    name: "Nostalgia", // try to translate this name for fun ^_^
    order: "Big Blue Buffalo"
  }, {
    name: "Ali bn Ali",
    order: "Blue 'Shroom",
  }, {
    name: "H3Ro",
    order: "Fat Elvis"
  }
]

// CODE FOR QUESTION 6 HERE

for (let i = 0; i < customers.length; i++) {
  const customer = customers[i];


  order(customer.order)
    .then(msg => {
      setTimeout(() => {
      console.log("the order is :" + customer.order);
      console.log("the description is :" + msg.description);
      console.log("the price is :" + msg.price);
      console.log("the order is ordered by :" + customer.name);
      console.log("#######################################");

      }, 1500);
    })
    .catch(err => {
      console.log(err)
    });

}

