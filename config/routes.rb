Rails.application.routes.draw do
  devise_for :users
  root 'challenges#index'
end
