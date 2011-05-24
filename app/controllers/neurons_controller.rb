class NeuronsController < ApplicationController
  
  def create
    @neuron = Neuron.new
    @neuron.url = params[:data]
    respond_to do |type|
      if @neuron.save
        type.js { render :text => "yayay" }
        # type.js { render :json => jsonObj } // if you use this, must specify dataType in ajax call to be "json"
      else
        type.js { render :text => "Error saving neuron", :status => :unprocessable_entity } 
        # type.js { render :json => @neuron.errors.full_messages, :status => :unprocessable_entity }        
      end
    end
  end
  
  def index
  end
  
  def destroy
  end
  
  def show
  end  
  
end
