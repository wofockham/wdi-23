require 'rails_helper'

RSpec.describe Fruit, type: :model do
  describe "An apple" do
    it "should not be squishy" do
      @apple = Fruit.new

      expect(@apple.squishy?).to eq false
      expect(@apple.squishy?).to be false
    end
  end


  describe "A pear" do
    it "should be squishy" do
      @pear = Fruit.new

      expect(@pear.squishy?).to eq true
      expect(@pear.squishy?).to be true
    end
  end
end
