require 'rails_helper'

RSpec.describe "greetings/show", type: :view do
  before(:each) do
    @greeting = assign(:greeting, Greeting.create!(
      message: "Message"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Message/)
  end
end
