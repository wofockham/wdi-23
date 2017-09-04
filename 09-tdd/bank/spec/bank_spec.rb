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
      bank = Bank.new "TDD Bank"
      bank.create_account 'Jonesy', 200
      expect(bank.accounts['Jonesy']).to eq 200
    end
  end
end
