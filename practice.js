for (i = 0; i < 10; i++) {
    placeTile('mint')
    placeTile('orange')
    placeTile('mint')
  }

  // Change the text between the quotation marks and run your code to see the name of your favorite language animated!
drawText('Javascript');

// The code below will allow you to interact with the letters
bounceBubbles();

# We have hidden code in another file. If you're curious, open the folder to the left and inspect the simulate.py file

from simulate import simulate

num_people_in_room = 22 			#Change This Number (keep it smaller than 100 to save processing power)

simulate(num_people_in_room) 