namespace :cron do
  desc 'Gets Series Info'
  task update: :environment do
    UmsJob.new.perform
  end
end
