source 'https://rubygems.org'

ruby '2.4.3'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# CORE
gem 'rails', '~> 5.1.4'
gem 'pg', '~> 0.21'
gem 'puma', '~> 3.11.0'
gem 'webpacker', '~> 3.2.0'
gem 'rack-cors', '~> 1.0.2', require: 'rack/cors'
gem 'turbolinks', '~> 5'
gem 'devise', '~> 4.4.0'
gem 'twilio-ruby', '~> 5.6.0'
gem 'config', '~> 1.6.1'
gem 'therubyracer', platforms: :ruby
gem 'selenium-webdriver', '~> 3.8.0'
gem 'nokogiri', '~> 1.8.1'

# Assets

source 'https://rails-assets.org' do
  gem 'rails-assets-tether', '~> 1.4.3'
end
gem 'uglifier', '~> 4.1.3'
gem 'sass-rails', '~> 5.0'
gem 'bootstrap', '~> 4.0.0.beta3'
gem 'jquery-rails'
gem 'sweetalert-rails'

# API
gem 'active_model_serializers', '~> 0.10.7'

# DEPLOYMENT
gem 'morpheus-heroku', '0.3.1'

# MISC
gem 'faraday', '~> 0.13.1'
gem 'rails_12factor', group: :production

group :development, :test do
  gem 'rspec-rails', '~> 3.7.2'
  gem 'spring-commands-rspec'
  gem 'webmock', require: false
  gem 'pry-rails'
  gem 'factory_girl_rails'
  gem 'ffaker'
  gem 'simplecov', '~> 0.15.1', require: false
  gem 'awesome_print', '~> 1.8.0', require: 'awesome_print'
end

group :development do
  gem 'annotate', '~> 2.7.2'
  gem 'better_errors'
  gem 'binding_of_caller', '~> 0.8.0'
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
