# 'a+': create/open the file in append mode
f = File.open('bigbrother.txt', 'a+')

print 'Would you like to add another person to the database (y/n): '
response = gets.chomp.downcase

while response == 'y'
  # Retrieve some info about the person from the user
  print 'Enter name, age, gender: '
  info = gets.chomp

  # Save that info to the database
  f.puts info

  print 'Would you like to add another person to the database (y/n): '
  response = gets.chomp.downcase
end

f.close

f = File.open('bigbrother.txt', 'r') # 'r': read

people = []

f.each do |line|
  info = line.chomp.split(',')

  person = {
    :name => info[0],
    :age => info[1],
    :gender => info[2]
  }

  people << person
end

f.close


puts "Currently tracking:"
people.each do |p|
  puts "#{ p[:name] } is #{ p[:age] } years old and identifies as #{ p[:gender] }"
end
