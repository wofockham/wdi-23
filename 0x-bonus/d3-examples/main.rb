require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :home
end

get '/circles' do
  erb :circles
end

get '/barchart' do
  erb :barchart
end
