require 'pry'

def get_user_choice
  # Show the available operations
  puts "(+) - Addition"
  puts "(-) - Subtraction"
  puts "(q) - Quit"

  print "Enter your selection: "
  gets.downcase.chomp # Implicit return
end

def addition
  puts "Addition is coming soon"
  binding.pry
end

menu_choice = get_user_choice

until menu_choice == 'q'
  case menu_choice
  when '+'
    addition
  else
    puts "Invalid selection"
  end

  menu_choice = get_user_choice
end
