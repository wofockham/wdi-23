require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX
get '/butterflies' do
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  @butterflies = db.execute "SELECT * FROM butterflies"

  db.close

  erb :butterflies_index
end

# SHOW
get '/butterflies/:id' do
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  @butterfly = db.execute "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
  @butterfly = @butterfly.first # Strip off the container array

  db.close

  erb :butterflies_show
end
