Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    resources :raffles, only: [:index]
    get 'raffles/:id/tickets', to: 'raffles#tickets'
  end

  get '*path', to: 'home#index'
end
