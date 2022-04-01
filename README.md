# VUE-2
### :point_right: Go to the Project Page
📌 https://gulcanc.github.io/VUE-2/

## About the Project
This is my personal VUE.js project. After I had learned some new topics about Vue.js with the course project “Monster Slayer Game”, I decided to prepare a slightly more advanced project like this one. 
There are some options for fighting against pirate, there is a battle log where we can see what happened. 

The Purpose of the Project
The purpose of this project is taking over control over some HTML code with Vue.js and practicing with data binding, interpolation, v-bind, event binding with v-on, output lists of data with v-for, conditional content with v-if and v-else.

About the Project
This is my first VUE.js project as a part of the projects of the bestselling course “UDEMY - Vue - The Complete Guide (w/ Router, Vuex, Composition API)”. This project is called “monster slayer game” that I dived deep into Vue JS. There are various options for fighting against a monster, there are health bars to be reduced and there is a battle log where we can see what happened. When we click monster attack button or player attack button, the bars will be reduced. We can use special attack button for every three round. And there is a heal button for just the player to heal itself.

We start creating this Vue app by calling Vue.app() function and we store it as a constant, then we mount that app to the div element with an "id" name. Data is a core concept of Vue apps that we can thinks them as a variables in the regular JavaScript. In this game we manage some data like player's health and monster's health. We need this data option in our Vue app configuration object and we return the object that holds our data.

Another important feature in Vue app is methods. For example, when we click "attack" button, we trigger a method that reduces the monster health. For this purpose we use random values. To calculate a random value, we use Math.random() function which gives us a random number between 0 and 1. In this project we want to get an integer random number between minimum and maximum value. For doing this we use Math.floor() method that rounds down a decimal number to get an integer number. (For exemple, 5.87 is 5, -5.98 is -6)

👆!Click Me! 👆 The formula to calculate an integer random number between 5 and 12
We need to connect our methods to our HTML file, for example for "attack button" we have to add "click listener" to it. We can do that by using v-on:click or @click and as a value we have to add our method's name like monsterHealth or monsterHealth().

When we click the buttons our health bars will be reduced, to achive this we use inline style attribute and set it dynamically, this means we use v-bind:style or :style. Then we pass an object to our style binding, in this object we define which CSS property we want to change and we give that property a potentially dynamic value. In our project we change width property and we set it a value which will be dynamic. For example for monsterHealth the first way is :

💧 :style = "{monsterHealth + '%'}"

Instead of this first way, we can create the computed property in our view instance config object. We use computed property because putting too much logic in our templates can make them bloated and hard to maintain.

💧 computed : { monsterBarStyles() { return { width: this.monsterHealth + '%' }; }

For "special attack button" we have to restrict the round number , this means we can only use "special attack button" every three rounds. To achive this we use disabled attribute, we access data property and use modulus operator to divide it by 3 find out what the remainder of this division is. If remainder is not 0, this is not dividable by three and therefore we know we are not in the third, sixth or ninth round. So we will disabled it if the divison of three does not leave a remainder of 0.

💧 :disabled = "currentRound % 3 !==0"

The heal button is just for the player to heal itself. To calculate a heal value we use again the same get random value function. Here we check player health when we add the heal value to it. If total value exceed 100, we set the player health to 100, so we can not go higher than that value. If our current health plus the calculated heal value does not exceed 100, we add the heal value to the player health but again we can not go above 100.

To check who won or lost the game we control the health values, for this reason we use watch property in our object. Here we use conditional content. First condition is draw, if player health is smaller than or equal to 0 and the monster health also is smaller than or equal to 0, the result is draw. Second condition is the player health is smaller than or equal to 0, the monster win the game. The third condition is that if the monster health is smaller than or equal to 0 the player win the game.

When the game over, we will see the message who won or los; for doing this we add a data property "winner" which initially equals to "null". By using this keyword in watch property we set winner message as draw or player or monster. In our HTML template there is a container that shows these messages. Here we use thruty and falsy values; at the beginning winner is null so it is a falsy value, this means initially there is no winner or loser. For getting the message, we use v-if, v-else-if and v-else conditional statements.

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
