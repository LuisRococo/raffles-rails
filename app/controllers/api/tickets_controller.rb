class Api::TicketsController < ApplicationController
    def take_tickets
        begin
            user_data = params[:data][:userInfo]
            @tickets = params[:data][:tickets]
            @raffle = Raffle.find(params[:id])

            take_ticket = TakeTicket.new

            @folio_number = take_ticket.take_tickets!(@raffle.id, @tickets, user_data)

            @status = :success
        rescue TicketNoAvailableException => e
            render json: format_response_error({ message: 'There are no available tickets' }), status: 500
        end
    end
end
