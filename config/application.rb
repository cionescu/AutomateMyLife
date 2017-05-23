require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Lizncata
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    config.generators do |g|
      g.test_framework :rspec, fixture: true
      g.fixture_replacement :factory_girl, dir: 'spec/factories'
      g.view_specs false
      g.helper_specs false
      g.stylesheets = false
      g.javascripts = false
      g.helper = false
    end

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'localhost:3000', 'lizncata.herokuapp.com'
        resource '*', headers: :any, methods: [:post, :options, :put, :delete]
      end
    end

    config.exceptions_app = self.routes
  end
end
