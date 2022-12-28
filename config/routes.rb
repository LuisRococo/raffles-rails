Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    resources :raffles, only: [:index, :show]
    get 'raffles/:id/tickets', to: 'raffles#tickets'

    post 'raffles/:id/take-tickets', to: 'tickets#take_tickets'
  end

  get '*path', to: 'home#index'
end
