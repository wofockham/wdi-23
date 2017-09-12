class Butterfly < ApplicationRecord
  belongs_to :plant, :optional => true
end
