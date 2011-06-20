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
       
      newNote = @noteStore.createNote(@authToken,note)
     
      respond_to do |type|
        if newNote
          url = Url.find_by_name(neuron)
          url.delete
          type.js { render :text => "successfully registered neuron" }
        else
          type.js { render :text => "Error saving neuron", :status => :unprocessable_entity }      
        end
      end
  
    rescue Evernote::EDAM::Error::EDAMErrorCode => e
      puts "Evernote error: #{e.message}"
    end

  end

  def index
    
  end
  
  def destroy
  end
  
  def show
    
  end  
  
end
