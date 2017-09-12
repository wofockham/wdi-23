class AddPlantIdToButterflies < ActiveRecord::Migration[5.1]
  def change
    add_column :butterflies, :plant_id, :integer
  end
end
