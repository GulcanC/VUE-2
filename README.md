# VUE-2
### :point_right: Go to the Project Page
📌 https://gulcanc.github.io/VUE-2/

## The Purpose of the Project
The purpose of this project is taking over control over some HTML code with Vue.js and practicing with data binding, interpolation, v-bind, event binding with v-on, output lists of data with v-for, conditional content with v-if and v-else.


## About the Project
This is my personal VUE.js project. After I had learned some new topics about Vue.js with the course project “Monster Slayer Game”, I decided to prepare a slightly more advanced project like this one. 

The game starts with a player attack, when we click an attack button, another button does not become active. This means player can only attack if the round number is an even number, while the pirate can only attack if its round is an odd number. Clicking the buttons will make the bars smaller for both the player and the pirate. And there are two special attack buttons for each gamer, the pirate can only use this special attack in the 7th round, while the player can only use it in the 5th round. And for each player, there are healing buttons to heal themselves that can only be used if their health is below 6. And there is a battle log that shows all the actions realized by gamers. 

We start creating this Vue app by calling Vue.app() function and we store it as a constant, then we mount that app to the div element with an "id" name. Data is a core concept of Vue apps that we can thinks them as a variables in the regular JavaScript. In this game we manage some data like player's health and pirate's health. We need this data option in our Vue app configuration object and we return the object that holds our data.

Another important feature in Vue app is methods. For example, when we click "attack" button, we trigger a method that reduces the health. For this purpose we use random values. To calculate a random value, we use Math.random() function which gives us a random number between 0 and 1. In this project we want to get an integer random number between minimum and maximum value. For doing this we use Math.floor() method that rounds down a decimal number to get an integer number. (For exemple, 5.87 is 5, -5.98 is -6)

👆!Click Me! 👆 The formula to calculate an integer random number between 5 and 12
We need to connect our methods to our HTML file, for example for "attack button" we have to add "click listener" to it. We can do that by using v-on:click or @click and as a value we have to add our method's name like playerHealth or playerHealth().

When we click the buttons our health bars will be reduced, to achive this we use inline style attribute and set it dynamically, this means we use v-bind:style or :style. Then we pass an object to our style binding, in this object we define which CSS property we want to change and we give that property a potentially dynamic value. In our project we change width property and we set it a value which will be dynamic. For example for playerHealth the first way is :

💧 :style = "{playerHealth + '%'}"

Instead of this first way, we can create the computed property in our view instance config object. We use computed property because putting too much logic in our templates can make them bloated and hard to maintain.

💧 computed : { playerBarStyles() { return { width: this.playerHealth + '%' }; }

For "special attack buttons" we have to restrict the round numbers. To achive this, in computed property I set the restrciton for player the rounds are odd numbers and for pirate the rounds are even numbers. 

To calculate a heal value we use again the same get random value function. Here we check both gamers health when we add the heal value to it. If their health is above 6 they can not use the heal button. And if total value exceed 100, we set the gamer health to 100, so we can not go higher than that value. If our current health plus the calculated heal value does not exceed 100, we add the heal value to the player health but again we can not go above 100.

To check who won or lost the game we control the health values, for this reason we use watch property in our object. Here we use conditional content. First condition is draw, if player health is smaller than or equal to 0 and the pirate health also is smaller than or equal to 0, the result is draw. Second condition is the player health is smaller than or equal to 0, the pirate win the game. The third condition is that if the pirate health is smaller than or equal to 0 the player win the game.

When the game over, we will see the message who won or lost; for doing this we add a data property "winner" which initially equals to "null". By using this keyword in watch property we set winner message as draw or player or pirate. In our HTML template there is a container that shows these messages. Here we use thruty and falsy values; at the beginning winner is null so it is a falsy value, this means initially there is no winner or loser. For getting the message, we use v-if, v-else-if and v-else conditional statements.

To empty the health bars when the game over, we use again computed property to set the width of the loser's bar to 0%.

There is another button to restart the new game. For restarting the new game, we need a method that resets all parameters and returns all initial conditions. To achive this, we use again a method and @clik listener to bind the method to our HTML template.

Finally, we add a battle log to basically keep track of which action occured. We add a new method that includes three parameters who, what and value. It will give us the information about who attacked, what is the action and the value of the damage or the heal. In data property, we add a log message array which is initially empty. In this method we use unshift() method to add the message at the beginning of the array. To output of these messages, we have an unordered list in our HTML template and on list items we use v-for which allows us to repeat this list item elements. Here we use in keyword to access every single log message and interpolation to output the action by field like who, what and value.

Unshift() Method:
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

👆!Click Me! 👆
Technologies Used:
VUE 3 | CSS3 | HTML5 | Git | GitHub-pages

Techniques Used:
data binding 📍 interpolation 📍 v-bind 📍 event binding with v-on:click or @click 📍 output lists of data with v-for 📍 conditional content with v-if, v-else 📍 click listener @click 📍 unshift() method 📍
