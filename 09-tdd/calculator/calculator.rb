class Calculator
  def initialize
    @input = []
  end

  # An array style append
  def <<(n)
    @input.push n.to_f
  end

  def add
    # @input.inject { |memo, n| memo + n }
    @input.inject(&:+)
  end

  def subtract
    @input.inject(&:-)
  end
end
