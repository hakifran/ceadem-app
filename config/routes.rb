Rails.application.routes.draw do
  resources :members
  match '*path', to: "pages#index", via: :all
end
