Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*' # Or '*' to allow from everywhere
    resource '*',
      :headers => :any,
      :methods => %i(get post put patch delete options head)
  end
end
