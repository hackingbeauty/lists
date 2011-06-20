class DashboardController < ApplicationController

  def index
    @urls = Url.find(:all)
    @neurons = Neuron.find(:all)
  end

end
