require 'rails_helper'

RSpec.describe 'greetings/edit', type: :view do
  before(:each) do
    @greeting = assign(:greeting, Greeting.create!(
                                    message: 'MyString'
                                  ))
  end

  it 'renders the edit greeting form' do
    render

    assert_select 'form[action=?][method=?]', greeting_path(@greeting), 'post' do
      assert_select 'input[name=?]', 'greeting[message]'
    end
  end
end
