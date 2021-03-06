class Api::V1::UsersController < Api::V1::ApplicationController

    skip_before_action :authorized, only: [:create]

    def index
        @users = User.all
        render json: @users
    end

    def profile
        render json: { user: UserSerializer.new(current_user) }, status: :accepted
    end

    def create
      @user = User.create!(user_params)
      if @user.valid?
        @token = issue_token(user_id: @user.id)
        puts @token
        render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
      else
        render json: { error: 'failed to create user' }, status: :not_acceptable
      end
    end
   
    private
   
    def user_params
      params.require(:user).permit(:username, :password, :first_name, :last_name)
    end
  end
  