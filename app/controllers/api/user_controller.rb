module Api
  class UserController < BaseController
    before_action :find_user, only: [:show]

    def show
      respond_to do |format|
        format.json { render json: @user }
      end
    end

    private

    def find_user
      @user = User.find params.require(:id)
    end
  end
end
