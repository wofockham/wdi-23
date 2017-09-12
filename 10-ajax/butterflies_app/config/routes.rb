Rails.application.routes.draw do
  resources :butterflies, :only => [:index, :show]
  resources :plants, :only => [:index, :show]
end
