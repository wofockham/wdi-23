require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

get '/' do
  erb :form
end

get '/price' do
  redirect to('/') unless params[:stock]

  @stock_symbol = params[:stock]
  info = YahooFinance::get_quotes(YahooFinance::StandardQuote, @stock_symbol)
  @price = info[@stock_symbol].lastTrade
  erb :price
end

get '/about' do
  erb :about
end

get '/faq' do
  erb :faq
end
