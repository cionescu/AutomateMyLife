class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :card_count
end
