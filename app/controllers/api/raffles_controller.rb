class Api::RafflesController < ApplicationController
    def index
        @raffles = Raffle.all
    end

    def tickets
        per_page = 100
        per_page = params[:limit] if params[:limit]
        
        @tickets = Ticket.where(raffle_id: params[:id])
        @tickets = @tickets.paginate(page: params[:page], per_page: per_page)
    end
end
