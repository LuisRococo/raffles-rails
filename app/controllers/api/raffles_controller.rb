class Api::RafflesController < ApplicationController
    def index
        @raffles = Raffle.all
    end

    def tickets
        @tickets = Ticket.where(raffle_id: params[:id])
    end
end
