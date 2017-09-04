class Bank
  attr_reader :name # Defining the getter #name
  attr_reader :accounts # Defining the getter #accounts

  def initialize(n)
    @name = n
    @accounts = {}
  end

  def create_account(name, deposit)
    @accounts[name] = deposit
  end
end
