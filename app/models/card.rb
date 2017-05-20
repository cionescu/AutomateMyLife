# == Schema Information
#
# Table name: cards
#
#  id          :integer          not null, primary key
#  text        :string
#  status      :integer          default(0)
#  creator_id  :integer
#  receiver_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_cards_on_creator_id   (creator_id)
#  index_cards_on_receiver_id  (receiver_id)
#

class Card < ApplicationRecord
  belongs_to :creator, class_name: 'User'
  belongs_to :receiver, class_name: 'User'
end
