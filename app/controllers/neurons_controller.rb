class NeuronsController < ApplicationController
  
  before_filter :evernote_authentication, :only => [:create, :index]

  def create
    neuron = params[:data] 
    
    begin
      note = Evernote::EDAM::Type::Note.new()
      note.title = neuron
      note.content =  '<?xml version="1.0" encoding="UTF-8"?>' +
                      '<!DOCTYPE en-note SYSTEM "http://xml.evernote.com/pub/enml2.dtd">' +
                      '<en-note>'+ neuron +'<br/>' +
                      '</en-note>'
       
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
