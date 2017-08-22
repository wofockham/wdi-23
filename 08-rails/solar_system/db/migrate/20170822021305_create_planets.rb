class CreatePlanets < ActiveRecord::Migration[5.1]
  def change
    create_table :planets do |t|
      t.text :name
      t.text :image
      t.float :orbit
      t.float :diameter
      t.float :mass
      t.integer :moons
      t.timestamps
    end
  end
end
