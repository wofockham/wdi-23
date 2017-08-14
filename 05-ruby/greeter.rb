# print does not include a new line at the end
print "What is your first name? "
first_name = gets.chomp # Read some text from the user and remove the trailing new line.

# puts does include a new line at the end
puts "Hello there, #{ first_name }."

print "What is your last name? "
last_name = gets.chomp

puts "Your full name is #{ first_name } #{ last_name }."

print "Where do you live? "
address = gets.chomp

puts "You reside at #{ address }."
