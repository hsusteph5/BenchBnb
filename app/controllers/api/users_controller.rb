class Api::UsersController < ApplicationController
    def create 
        @user = User.new(user_params)
        if @user.save 
            login(@user)
            # redirect_to 
        else
            render json: @user.errors.full_messages, status: 422
        end
    end 

    def user_params
        params.require(:user).permit(:fname, :lname, :email, :password)
    end 
end
