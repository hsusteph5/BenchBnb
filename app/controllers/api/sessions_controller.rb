class Api::SessionsController < ApplicationController
    def create 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user 
            render "api/users/show"
        else   
            render json: ['The email or password you entered is incorrect'], status: 401
        end
    end 


    def destroy 
        if current_user 
            current_user.reset_session_token!
            render json: {}
        else
            render json: {}, status: 404
        end
    end 
end
