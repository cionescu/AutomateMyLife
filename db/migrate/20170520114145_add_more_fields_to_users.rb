class AddMoreFieldsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_reference :users, :partner, index: true
    add_column :users, :notification_text, :string
    add_column :users, :card_count, :integer, default: 0
  end
end
