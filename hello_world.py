# 1. TASK: print "Hello World"
print("Hello World!")
# 2. print "Hello Noelle!" with the name in a variable
name = "Zach"
print("Hello" , name , "!")	# with a comma
print("Hello " + name + "!")	# with a +
# # 3. print "Hello 42!" with the number in a variable
name = 17
print("Hello" , name , "!")	# with a comma
print("Hello " + str(name) + "!")	# with a +	-- this one should give us an error!
# # 4. print "I love to eat sushi and pizza." with the foods in variables
fave_food1 = "tacos"
fave_food2 = "nachos"
print("I love to eat {} and {}.".format(fave_food1,fave_food2)) # with .format()
print(f"I love to eat {fave_food1} and {fave_food2}.") # with an f string


# Bonus

myName = "Zach"

print(myName.upper())
print(myName.lower())
print(myName.split("c"))