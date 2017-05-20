class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :text
      t.integer :status, default: 0

      t.references :creator
      t.references :receiver

      t.timestamps null: false
    end
  end
end
