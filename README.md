# CS-260-Web-Dev
CS 260 Web Dev for Winter 2023

Startup Application:

Sales Pitch:
Have you ever tried to split the cost of something, when several people paid for it? For example, difficulty can arise when separate people have booked lodging or paid for food during a trip. The Expense Splitter application makes it so groups of people can record expenses for an event, then calculate the amount each person needs to pay to even out the expenses across the group. Once the calculation is complete, the group can be sure that everyone has paid their fair contribution to the event.

Key Features:
- Secure login over HTTPS
- Ability for admin to create new and delete old events
- Ability for admin to add or remove participants from events
- Ability for participants to input expenses (description and amount)
- Ability to edit expenses
- Live calculations
- Store results

![Application - Main](https://user-images.githubusercontent.com/123618573/215209048-bc01d015-4123-4ad0-a337-a219b43b9db4.jpg)
![Application - Manage](https://user-images.githubusercontent.com/123618573/215209121-e9910ad6-1804-457b-b159-fa90c5d52f93.jpg)
![Application - Add](https://user-images.githubusercontent.com/123618573/215209160-ff436334-4a9f-45a2-add0-712b99e29bef.jpg)
![Application - Calculations](https://user-images.githubusercontent.com/123618573/215209180-bedaacd8-b0cb-40de-9b3f-1b8d69bc4921.jpg)

AWS:
User name: dluke2 /n
My server's IPv4 address: http://18.223.130.210/
REMINDER - Release elastic IP for my instance at end of class

Caddy:
Learning VI is a much faster way of opening and making edits to files. It also doesn't require me to download things off of a server, then pushing changes.

Simon/HTML:
There are so many ways to do similar things in HTML. For example, I tried looking into the difference between menu and ul, and they can be used for the same things, although menu should be used for hyperlinks. I also realized the importance of seeing changes in real time. My live connection would pull up a file directory rather than the html page, so I need to get that figured out. I instead had to use CodePen, then copy the html back into VS Code, which was annoying because VS code has better completion. Using the right tools for the job makes it a lot easier.

CSS:
Making something visually appealing was difficult. I ended up just making a monstrosity to practice. However, I learned the value of understanding color combinations and proportions, as it was a lot more difficult than I expected to make something visually appealing.

Simon CSS: Just getting a base for head, body, and footer are important. Once that is in place, everything should fit well. A good way to do this is to set the header and footer with flex: 0, and the body at flex: 1. Using bootstrap can make customization difficult.

DOM is going to be vital for my project. The code here https://codepen.io/dluke2/pen/MWqpooM?editors=1010 will help me with my startup application. I'll need to learn to read in inputs, then edit arrays with the information to modify the table.

Simon-JavaScript: Reading in inputs is interesting. To display what has already been inputed, I need to use the following structure. The .player_name is a class. The following JavaScript shows how to capture and display data.

function login() {
  const nameEl = document.querySelector("#name");
  localStorage.setItem("userName", nameEl.value);
  window.location.href = "play.html";
}

    const playerNameEl = document.querySelector('.player-name');
    playerNameEl.textContent = this.getPlayerName();
    
Startup JavaScript: I struggled to make this work, I ended up having to change the way I wanted to do things. I struggled a lot with the math elements. I wanted to assign who would pay who, but this became a mess. It was easier just to determine how much everyone owed, which reduces the usefulness of the calculator. 
Luckily, the assignments we had in CodePen helped me figure out how to create the table and helped a lot. I stubbled across the contenteditable=true feature, which made capturing data easier. I started to use a lot of forms, but that got messy. I learned that getMonth() returns the letter, so I made an array instead to get the month name.

Fetch: Fetch is going to be imporant for pulling data from other sites or databases. I see the potential to make webscrapers with it.

Service: I think what stood out to me was the use of post and get. The post puts the new scores into the table, which is run by index.js. This information is stored in the server in a list using the port to ensure that it persists. This is important because everything in the public folder is run on the browser. The server needs to hold the data.

MongoDB: I learned about keeping keys safe. I didn't know variables could be stored in windows in the way we did. I'm pretty familiar with SQL databases, so storing objects as a JSON was something I never thought of. It makes sense thought, because you can define the attributes you need, so you don't need a bunch of null values if you're not using every attribute.

Login: This format is really important for creating login stuff:  

fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
  
This is used for many different things, such as login, creating users, logging out, and so forth. My environment needs to have the proper path variables setup to access the database.

Websocket: I think its interesting that connections close if too much time passes. It seems ineffecient to have to keeping pinging just to keep the connection. But I suppose it is also inefficient to keep a connection open when it is being unused.

Service: I had a lot of problems because of how I made my javascript. I think I'll need to refactor the entire thing, it just doesn't lend well to connecting to MongoDB. At the very least, I was able to figure out authentification and creating users and such. Debugging things in the client is super difficult. I had a lot of trouble making sure data went into the database. I didn't realized I needed to have websocket stuff implemented, so I'll need to fix that before my final project.

Simon React: Converting the code was a huge pain for me. It would have been much easier to start using React from the beginning. My take away is to start with the end in mind. Programming goes a lot smoother when I considered how to integrate each part into one another before getting started. Of course, in this case I needed to learn JS before React, but I still think it is a key mindset when it comes to development. I thought it was interesting that the React code is broken up into many more .jsx files than we had .js files initially. This actually makes looking through the code easier because we don't have to look through hundreds of lines in each file. Instead, we can better find what we are looking for and debug.
