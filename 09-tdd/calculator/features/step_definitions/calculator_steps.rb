Given("I have a calculator") do
  @calculator = Calculator.new
end

Given("I have the number {int}") do |int|
  @calculator << int
end

When("I add them together") do
  @result = @calculator.add
end

When("I subtract them") do
  @result = @calculator.subtract
end

Then("I should see {int} on the terminal") do |int|
  assert_equal int.to_f, @result
end
