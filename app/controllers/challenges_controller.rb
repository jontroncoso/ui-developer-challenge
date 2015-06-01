class ChallengesController < ApplicationController
  def index
  end

  def check_authentication
    render json: current_user
  end
end
