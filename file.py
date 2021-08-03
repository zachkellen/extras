num1 = 42 #- variable declaration, initialize number
num2 = 2.3 #- variable declaration, initialize number
boolean = True # variable declaration, initialize boolean
string = 'Hello World' # variable declaration, initialize String
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] # variable declaration, initialize List
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} # variable declaration, initialize Dictionary
fruit = ('blueberry', 'strawberry', 'banana') #  variable declaration, initialize Tuple
print(type(fruit)) # log statement, type check, Tuple - access value
print(pizza_toppings[1]) # log statement, list - access value
pizza_toppings.append('Mushrooms') # List - change value
print(person['name']) # log statement, Dictionary - access value
person['name'] = 'George' # Dictionary - change value
person['eye_color'] = 'blue' # Dictionary - change value
print(fruit[2]) # Log Statemenet, Tuple - access value

if num1 > 45: #Conditional - If, boolean check
    print("It's greater") #log statement
else: # Conditional - else
    print("It's lower") # log statement

if len(string) < 5: #conditional - If, boolean check
    print("It's a short word!") # Log statement
elif len(string) > 15: # conditional - else if, boolean check
    print("It's a long word!") # log statement
else: # conditional - else
    print("Just right!") # log statement

for x in range(5): # for loop, stop
    print(x) # log statement
for x in range(2,5): # for loop, start, stop
    print(x) # log statement
for x in range(2,10,3): #for loop, start, stop, increment
    print(x) # log statement
x = 0 # variable declaration, type number
while(x < 5): # while loop, boolean check, start
    print(x) # log statement
    x += 1 #increment

pizza_toppings.pop() #List - add value
pizza_toppings.pop(1) # List - delete value

print(person) # log statement, dictionary - access value
person.pop('eye_color') # dictionary, add value
print(person) # log statement

for topping in pizza_toppings: # for loop, start
    if topping == 'Pepperoni': # Conditional - if, boolean check
        continue # For loop - continue
    print('After 1st if statement') # log statement
    if topping == 'Olives': # Conditional - if - boolean check
        break #for loop - break

def print_hello_ten_times(): # function
    for num in range(10): #for loop - stop
        print('Hello') # log statement

print_hello_ten_times() #function - call

def print_hello_x_times(x): #function, parameter X
    for num in range(x):# for loop, stop at X
        print('Hello') # log statement

print_hello_x_times(4) # call function, argument

def print_hello_x_or_ten_times(x = 10): #function, parameter
    for num in range(x): # for loop, stop at x
        print('Hello') # log statement

print_hello_x_or_ten_times() #function, call
print_hello_x_or_ten_times(4) #function, argument


"""
Bonus section
"""

# print(num3) # variable not defined
# num3 = 72 # variable decleration
# fruit[0] = 'cranberry' # tuple does not support assignment - immutable
# print(person['favorite_team']) Key error
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)