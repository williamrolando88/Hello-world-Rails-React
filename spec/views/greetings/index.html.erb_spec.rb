require 'rails_helper'

RSpec.describe 'greetings/index', type: :view do
  before(:each) do
    assign(:greetings, [
             Greeting.create!(
               message: 'Message'
             ),
             Greeting.create!(
               message: 'Message'
             )
           ])
  end

  it 'renders a list of greetings' do
    render
    assert_select 'tr>td', text: 'Message'.to_s, count: 2
  end
end
