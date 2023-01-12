class Api::AuthController < ApplicationController
    include JsonWebToken

    def login
        reset_session
        username = params[:username]
        password = params[:password]

        user = User.find_by(username: username)

        unless user && user.authenticate(password)
            render json: format_response_error({ message: 'Incorrect username or password' }), status: 302
            return
        end
        
        token_payload = { 
            user_id: user.id
        }

        @token = jwt_encode(token_payload)
        @status = 200
    end
end
