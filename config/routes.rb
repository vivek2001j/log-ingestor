Rails.application.routes.draw do
  root 'homepage#index'
  post '/ingest', to: 'ingestor#ingest_log'
  get '/search', to: 'ingestor#search_logs'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
