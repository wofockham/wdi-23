Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home' # Defines the / root of the site (homepage)
  get '/home' => 'pages#home' # Pages Controller, home action
  get '/faq' => 'pages#faq'
  get '/about' => 'pages#about'

  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'

  get '/calc/:x/:y/:operator' => 'calculator#calculate'
end
