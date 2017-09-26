# For parsing documents:
require 'nokogiri'
# For opening urls:
require 'open-uri'
# For debugging:
require 'pry'

# The root URL to work with:
base_url = 'http://badtaxidermy.com/'

# Tell Nokogiri to expect an HTML document (served by open -- open-uri )
index = Nokogiri::HTML( open( base_url ) )

# Gets the value of the pagination bar down the bottom.
page_count = index.css('li')[-2].text.to_i

# Grabs the title from the index page
puts '--------------------------'
puts index.css('.title')[0].text.strip
puts '--------------------------'

# Visits each page on the site (counted by the pagination bar)
(1..page_count).to_a.each do |i|

  # Tells nokogiri to open each page individually
  page = Nokogiri::HTML( open(  base_url + "?page=" + i.to_s ) )

  # Print out the relative information for each page
    page.css('.post').each do | post |
    puts post.css('.title').text.strip
    puts post.css('img').attr('src').value
    puts '--------------------------'
  end # End loop
end # end program

puts "Scrape complete."
puts '--------------------------'