require 'spec_helper'

describe NeuronsController do
  render_views
  
  before(:each) do
    @url = Factory(:url)
  end
  
  describe "'POST' create" do
    
    it "should create new neuron if it doesn't already exist" do
      lambda do
        post :create, :body => @url
      end.should change(Neuron, :count).by(1)
    end
    
  end
  
end
