class NeuronsController < ApplicationController
  
  def create
    @neuron = Neuron.new(params[:url])
    puts "========"
    puts " params is #{params}"
    puts "========"
    render :nothing => true
  end
  
  def index
  end
  
  def destroy
  end
  
  def show
  end  
  
end
