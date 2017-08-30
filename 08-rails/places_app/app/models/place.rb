class Place < ApplicationRecord
  geocoded_by :address
  validates :address, :presence => true
  after_validation :geocode
end
