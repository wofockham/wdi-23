Rails.application.routes.draw do
  root :to => 'pages#index'
  get '/haml' => 'pages#haml_demo'
end
