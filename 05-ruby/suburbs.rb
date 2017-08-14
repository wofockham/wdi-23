###3. Sydney Suburbs

# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing

print "Which suburb do you live in: "
suburb = gets.chomp.downcase

puts case suburb
when 'fairlight'
  "Nice views"
when 'bondi'
  "Don't speak to me"
when 'petersham'
  "Lawn bowls"
else
  "Also nice"
end
