Rails.application.routes.draw do
  devise_for :users
  root 'challenges#index'
  get '/check-authentication', to: 'challenges#check_authentication'
end
