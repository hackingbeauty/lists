class DashboardController < ApplicationController
  
  before_filter :evernote_authentication, :only => [:index]

  def index
    @urls = Url.find(:all)
    @neurons = []
    notebooks = @noteStore.listNotebooks(@authToken)
    notebooks.each do |notebook|
      noteFilter = Evernote::EDAM::NoteStore::NoteFilter.new()
      noteFilter.notebookGuid = notebook.guid
      noteList = @noteStore.findNotes(@authToken, noteFilter, 0, 100)
      noteList.notes.each do |note|
        @neurons << note
      end
    end
  end

end
