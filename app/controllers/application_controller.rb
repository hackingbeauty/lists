require "config/evernote_config.rb"

class ApplicationController < ActionController::Base
  protect_from_forgery

  def evernote_authentication
    userStoreUrl = "https://sandbox.evernote.com/edam/user"
    userStoreTransport = Thrift::HTTPClientTransport.new(userStoreUrl)
    userStoreProtocol = Thrift::BinaryProtocol.new(userStoreTransport)
    userStore = Evernote::EDAM::UserStore::UserStore::Client.new(userStoreProtocol)    
    
    @config = YAML::load(File.open("#{::Rails.root.to_s}/config/evernote.yml"))

    authResult = userStore.authenticate(@config['sandbox']['username'],
                                         @config['sandbox']['password'],
                                         @config['sandbox']['consumer_key'],
                                         @config['sandbox']['consumer_secret'])
    @user = authResult.user
    @authToken = authResult.authenticationToken

    noteStoreUrl = "https://sandbox.evernote.com/edam/note/" + @user.shardId
    noteStoreTransport = Thrift::HTTPClientTransport.new(noteStoreUrl)
    noteStoreProtocol = Thrift::BinaryProtocol.new(noteStoreTransport)
    @noteStore = Evernote::EDAM::NoteStore::NoteStore::Client.new(noteStoreProtocol)
  end

end
