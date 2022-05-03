Rails.application.routes.draw do
  namespace :api do
    get 'greetings/random'
  end

  get 'static/index'
  root "static#index"
end
