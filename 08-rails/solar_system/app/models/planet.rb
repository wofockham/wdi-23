# == Schema Information
#
# Table name: planets
#
#  id         :integer          not null, primary key
#  name       :text
#  image      :text
#  orbit      :float
#  diameter   :float
#  mass       :float
#  moons      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Planet < ActiveRecord::Base
end
