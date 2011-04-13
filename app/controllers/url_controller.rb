class UrlController < ApplicationController

  def create
    url = request.raw_data
    puts "======"
    puts "url is #{url}"
  end
  
  def new
  end
  
  def index
  end
  
  def show
  end
  
  def destroy
  end
  

end
