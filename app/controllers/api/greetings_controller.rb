class Api::GreetingsController < ApplicationController
  def random
    total_greetings = Greeting.count
    id = rand(1..total_greetings)
    @greeting = Greeting.find(id)
    render json: @greeting
  end
end
