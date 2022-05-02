Rails.application.routes.draw do
  namespace :api do
    resources :greetings, only: [:index, :show]
  end

  get 'static/index'
  root "static#index"
end
