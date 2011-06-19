class NeuronsController < ApplicationController
  
  before_filter :evernote_authentication, :only => [:create, :index]

  def create
    neuron = params[:data] 
    
    begin
      #note = Evernote::EDAM::Type::Note.new()
      #note = Evernote::NoteStore::Type::Note.new
      
      #note.title = neuron
      #note.content = neuron
      #@note_store.createNote(@auth_token,note)
      puts "neuron successfully stored"
    rescue Exception => e
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
