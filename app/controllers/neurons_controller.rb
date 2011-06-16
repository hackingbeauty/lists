require 'evernote'

class NeuronsController < ApplicationController
  
  def create
    @neuron = Neuron.new
    @neuron.url = params[:data]
    respond_to do |type|
      if @neuron.save
        url = Url.find_or_create_by_name(@neuron.url)
        url.delete #delete the url after you've created a neuron
        type.js { render :text => "successfully registered neuron" }
      else
        type.js { render :text => "Error saving neuron", :status => :unprocessable_entity } 
      end
    end
  end
  
  def index
    @neurons = Neuron.find(:all)
  end
  
  def destroy
  end
  
  def show
    
  end  
  
end
