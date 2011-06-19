#oequire "config/evernote_config.rb"

class ApplicationController < ActionController::Base
  protect_from_forgery

  def evernote_authentication
    userStoreUrl = "https://sandbox.evernote.com/edam/user"
    userStoreTransport = Thrift::HTTPClientTransport.new(userStoreUrl)
    userStoreProtocol = Thrift::BinaryProtocol.new(userStoreTransport)
    userStore = Evernote::EDAM::UserStore::UserStore::Client.new(userStoreProtocol)    
    config = ::Rails.root.to_s + "/config/evernote.yml"
    auth_result = userStore.authenticate(config)
    @user = auth_result.user
    puts "user is #{@user.name}"

    puts "successfully loaded evernote libs i guess" 

    #noteStoreUrl = "https://sandbox.evernote.com/edam/note/" + shard_id
    #noteStoreTransport = Thrift::HTTPClientTransport.new(noteStoreUrl)
    #noteStoreProtocol = Thrift::BinaryProtocol.new(noteStoreTransport)
    #noteStore = Evernote::EDAM::NoteStore::NoteStore::Client.new(noteStoreProtocol)
        
    
#    user_store_url = "https://sandbox.evernote.com/edam/user"
#    unprocessable_entityser_store_url = "https://sandbox.evernote.com/edam/user"
#    config = ::Rails.root.to_s + "/config/evernote.yml"
#    @user_store = Evernote::UserStore.new(user_store_url,config,'sandbox')
#    auth_result = @user_store.authenticate
#    outh_token = auth_result.authenticationToken
#    @user = auth_result.user
#    note_store_url = "http://sandbox.evernote.com/edam/note/#{@user.shardId}"
#    @note_store = Evernote::NoteStore.new(note_store_url)
  end

end
