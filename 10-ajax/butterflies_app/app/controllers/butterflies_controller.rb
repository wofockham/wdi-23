class ButterfliesController < ApplicationController
  def index
    butterflies = Butterfly.all
    render :json => butterflies.to_json(:include => :plant)
  end

  def show
    butterfly = Butterfly.find params[:id]
    render :json => butterfly.to_json(:include => :plant)
  end
end
