require_relative '../bank'

describe Bank do
  let (:bank) { Bank.new "TDD Bank" }

  describe '.new' do
    it "creates a new bank object" do
      expect(bank).to_not eq nil
    end

    it "assigns the bank a name" do
      expect(bank.name).to eq "TDD Bank"
    end

    it "starts with no accounts" do
      expect(bank.accounts.count).to eq 0
    end
  end

  describe '#create_account' do
    it "creates an account for some jerk with some starting deposit" do
      bank.create_account 'Jonesy', 200
      expect(bank.accounts['Jonesy']).to eq 200
    end
  end

  describe '#deposit' do
    it "deposits an amount from a customer into their account" do
      bank.create_account 'Craigsy', 200
      bank.deposit 'Craigsy', 300
      expect(bank.accounts['Craigsy']).to eq 500 # Thanks Harrison
    end
  end

  describe '#withdraw' do
    it "withdraws an amount from a customer's account" do
      bank.create_account 'Shazza', 200
      bank.withdraw 'Shazza', 50
      expect(bank.accounts['Shazza']).to eq 200-50
    end
  end
end
