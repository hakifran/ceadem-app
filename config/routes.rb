Rails.application.routes.draw do
  root to: 'page#index'
  
  namespace :api do
    namespace :v1 do
      resources :members , only: [:index, :create, :destroy, :update]
    end
  end
end
