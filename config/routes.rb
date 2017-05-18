Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    resources :notification, only: [:create] do
      collection do
        post :twilio
      end
    end
  end

  root to: "home#index"
end
