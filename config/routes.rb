Rails.application.routes.draw do
  root to: 'messages#root'
  resources :messages, only: %i[create index]
  mount ActionCable.server, at: '/cable'
end
