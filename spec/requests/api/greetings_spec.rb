require 'rails_helper'

RSpec.describe "Api::Greetings", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/api/greetings/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/api/greetings/show"
      expect(response).to have_http_status(:success)
    end
  end

end
