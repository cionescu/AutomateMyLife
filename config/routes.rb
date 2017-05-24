Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    resources :user, only: [:show]
    resources :card, only: [:create]
    resources :notification, only: [:create] do
      collection do
        post :twilio
      end
    end
  end

  root to: "home#index"

  match '*path', to: "application#try_with_angular", via: :all
end
