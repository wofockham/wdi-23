FactoryGirl.define do
  factory :user do |f|
    f.sequence(:email) { Faker::Internet.email }
  end

  factory :tweet do |f|
    f.sequence(:content) { Faker::Lorem.sentence }
  end
end
