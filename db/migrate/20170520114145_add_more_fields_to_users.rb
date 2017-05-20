class AddMoreFieldsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_reference :users, :partner, index: true
    add_column :users, :notification_text, :string
  end
end
