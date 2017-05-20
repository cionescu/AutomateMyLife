class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :card_count, :partner_name

  def partner_name
    object.partner&.name
  end
end
