module Api
  class NotificationController < BaseController
    def create
      head :no_content
    end

    def twilio
      head :ok
    end
  end
end
