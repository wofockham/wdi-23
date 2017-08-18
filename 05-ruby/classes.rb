require 'pry'

class Actor
  def award_speech
    "I would like to thank my parents"
  end
end

class MarxBrother < Actor
  attr_accessor :name, :instrument, :vice
  def initialize(n="Somebody Marx", i=nil, v=nil) # Variadic
    @name = n
    @instrument = i
    @vice = v
  end

  def biography
    "My name is #{ @name }, I play the #{ @instrument } and I enjoy #{ @vice }."
  end

  def sing
    "Tra la la la la la"
  end
end

class Stooge < Actor
end

groucho = MarxBrother.new 'Groucho', 'guitar', 'cigars'
harpo = MarxBrother.new 'Harpo', 'harp', 'mutism'

binding.pry
