class Api::SessionsController < ApplicationController
    def create 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user 
            login(@user)
            render "api/users/show"
        else   
            render json: ['The email or password you entered is incorrect'], status: 401
        end
    end 


    def destroy 
        puts current_user
        if current_user 
            logout
            render json: {}
        else
            render json: ["There is no one to sign out"], status: 404
        end
    end 
end
