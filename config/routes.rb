Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }
  root 'challenges#index'
  get '/check-authentication', to: 'challenges#check_authentication'
end
