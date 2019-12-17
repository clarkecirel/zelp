class Api::RestaurantsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.suggestions(current_user.favorites)
  end

  def update
    current_user.favorites << params[:id].to_i
    current_user.save
  end

  def create
    
  end

end
