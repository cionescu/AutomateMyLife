class MarksController < ApplicationController
  def index
    @marks = User.find_by(name: "Liz").metadata
  end
end
