class UrlsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  
  def create
    post_data = request.body.read
    url = Url.find_or_create_by_name(post_data)
    url.save
    render :nothing => true
  end
  
  def destroy
    puts "========"
    puts "inside destroy"
    Url.find(params[:id]).destroy
    puts "destroyed"
    render :nothing => true
  end
  
  def new
  end
  
  def index
    @urls = Url.find(:all)
    # render :json => @urls
    respond_to do |type|
      type.html
      type.js {render :json => @urls}
    end
  end
  
  def show
    @the_url = Url.find(params[:id])
    puts "======"
    puts @the_url.name
    puts @the_url.id
  end

end
