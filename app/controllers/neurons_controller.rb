class NeuronsController < ApplicationController
  
  before_filter :evernote_authentication, :only => [:create, :index]

  def create
    neuron = params[:data] 
    
    begin
      note = Evernote::EDAM::Type::Note.new()
      note.title = neuron
      note.content = neuron
      @noteStore.createNote(@authToken,note)
      puts "neuron successfully stored"
    rescue Evernote::EDAM::Error::EDAMErrorCode => e
     puts "Evernote error: #{e.message}"
    end

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
