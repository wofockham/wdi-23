class PagesController < ApplicationController

  def home
  end

  def numbers
    @amount = 234.2424
    @large_number = 241924892842
    @phone = 2125551212
  end

  def text
    @numbers = (1..20).to_a
    @friends_count = 1
    @enemies_count = 2
    @story = "A long, long time ago in a galaxy far, far, far, far away"
  end

  def assets
  end

  def url
  end

end
