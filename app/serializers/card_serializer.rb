class CardSerializer < ActiveModel::Serializer
  attributes :id, :text, :status, :creator_id, :creator_name, :receiver_id, :receiver_name

  def creator_name
    object.creator&.name
  end

  def receiver_name
    object.receiver&.name
  end
end
