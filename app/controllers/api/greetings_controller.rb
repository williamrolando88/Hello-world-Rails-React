class Api::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all
    render json: @greetings
  end

  def show
    @greeting = Greeting.find(params[:id])
    if @greeting
      render json: @greeting
    else
      render json: { error: "Greeting not found" }, status: 404
    end
  end
end
