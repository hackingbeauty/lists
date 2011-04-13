require 'spec_helper'

describe UrlController do
  render_views
  
  before(:each) do
    @url = Factory(:url)
  end

  describe "POST 'create'" do
   
    it "should create a new url if it does not already exist" do
      lambda do
        post :create, :body => @url
      end.should change(Url, :count).by(1)
    end

    pending23 "should not create a new url if it already exists" do
      lambda do
        post :create, :body => @url
      end.should change(Url, :count).by(0)
    end
      
  end
    
end