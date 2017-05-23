class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  rescue_from ActionController::RoutingError, with: -> { try_with_angular }

  def try_with_angular
    redirect_to root_path(redirect_to: request.path)
  end
end
