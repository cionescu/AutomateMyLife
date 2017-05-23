Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    resources :user, only: [:show]
    resources :notification, only: [:create] do
      collection do
        post :twilio
      end
    end
  end

  match '*path', to: "application#try_with_angular", via: :all

  root to: "home#index"
end
