require 'faker'

namespace :db do
  desc "Fill database with dummy urls"
  task :populate => :environment do
    Rake::Task['db:reset'].invoke
    99.times do |n|
      name = "http://www.test#{n+1}.com"
      Url.create!(:name => name)
    end
  end
end