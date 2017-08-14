#Title: Guess The Number

print "What is the maximum possible number? "
MAX_NUM = gets.to_i

secret_number = rand 0..MAX_NUM # Range

def ask_for_guess
  print "What is your guess? "
  gets.to_i # Implicit return
end

guess = ask_for_guess

until guess == secret_number
  if guess > secret_number
    puts "Wrong, guess lower!"
  else
    puts "Wrong, guess higher!"
  end
  guess = ask_for_guess
end

puts "Congratulations!"

# ###Extensions:
#
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"
