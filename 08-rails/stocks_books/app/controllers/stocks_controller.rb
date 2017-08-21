class StocksController < ApplicationController
  def form
  end

  def lookup
    @symbol = params[:stock_symbol].upcase
    info = YahooFinance::get_quotes(YahooFinance::StandardQuote, @symbol)
    @price = info[@symbol].lastTrade
  end
end
