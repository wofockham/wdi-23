class PagesController < ApplicationController
  def index
    @brother = %w{ Groucho Harpo Chico Zeppo Gummo }.sample
    @time = Time.now
    @uptime = `uptime`
  end
end
