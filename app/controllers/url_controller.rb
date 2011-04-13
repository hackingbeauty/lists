class UrlController < ApplicationController
  skip_before_filter :verify_authenticity_token
  
  def create
    post_data = request.body.read
    url = Url.find_or_create_by_name(post_data)
    url.save
    render :nothing => true
  end
  
  def new
  end
  
  def index
    @urls = Url.find(:all)
  end
  
  def show
  end
  
  def destroy
  end
  

end
