class CreateButterflies < ActiveRecord::Migration[5.1]
  def change
    create_table :butterflies do |t|
      t.string :name
      t.string :family
      t.text :image

      t.timestamps
    end
  end
end
