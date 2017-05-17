source 'https://rubygems.org'

ruby '2.4.0'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# CORE
gem 'rails', '~> 5.1.1'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker'
gem 'rack-cors', require: 'rack/cors'
gem 'turbolinks', '~> 5'
gem 'devise'
# gem 'therubyracer', platforms: :ruby

# API
gem 'active_model_serializers', '~> 0.10.5'

# DEPLOYMENT
gem 'morpheus-heroku', '0.2.3'

# MISC
gem 'faraday', '~> 0.11.0'
gem 'rails_12factor', group: :production

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'rspec-rails', '~> 3.5'
  gem 'spring-commands-rspec'
  gem 'webmock', require: false
  gem 'pry-rails'
  gem 'pry-remote'
  gem 'factory_girl_rails'
  gem 'ffaker'
  gem 'simplecov', '~> 0.14.1', require: false
  gem 'selenium-webdriver'
end

group :development do
  gem 'annotate'
  gem 'better_errors'
  gem 'awesome_print'
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
