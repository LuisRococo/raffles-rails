class ApplicationController < ActionController::Base
    include Auth

    helper_method :current_user, :logged_in?
    skip_before_action :verify_authenticity_token

    # def format_response_success(data)
    #     {
    #         status: 'success',
    #         data: data
    #     }
    # end

    def format_response_error(data)
        {
            status: 'error',
            data: data
        }
    end
end
