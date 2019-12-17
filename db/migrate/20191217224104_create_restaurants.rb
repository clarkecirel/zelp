class CreateRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.integer :rating
      t.text :description
      t.string :type

      t.timestamps
    end
  end
end
