Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    resources :raffles, only: [:index]
  end

  get '*path', to: 'home#index'
end
