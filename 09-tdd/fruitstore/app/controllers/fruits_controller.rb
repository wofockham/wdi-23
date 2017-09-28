class FruitsController < ApplicationController
  def index
    @fruits = Fruit.order('created_at DESC')

    respond_to do |format|
      format.html {} # An empty block here means render the default view
      format.json { render :json => @fruits }
    end
  end
end
