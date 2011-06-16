require 'rubygems'
require 'evernote'
require 'pp'
require 'open-uri'

class NeuronsController < ApplicationController
  
  def create
    user_store_url = "https://sandbox.evernote.com/edam/user"
    unprocessable_entityser_store_url = "https://sandbox.evernote.com/edam/user"
    config = ::Rails.root.to_s + "/config/evernote.yml"
    user_store = Evernote::UserStore.new(user_store_url,config,'sandbox')
    auth_result = user_store.authenticate
    user = auth_result.user
    
    puts "user is #{user.inspect}"

#    @neuron = Neuron.new
#    @neuron.url = params[:data]
#    respond_to do |type|
#      if @neuron.save
#        url = Url.find_or_create_by_name(@neuron.url)
#        url.delete #delete the url after you've created a neuron
#        type.js { render :text => "successfully registered neuron" }
#      else
#        type.js { render :text => "Error saving neuron", :status => :unprocessable_entity } 
#      end
#    end
    #
  
    render :nothing => true
    
  end
  
  def index
    @neurons = Neuron.find(:all)
  end
  
  def destroy
  end
  
  def show
    
  end  
  
end
