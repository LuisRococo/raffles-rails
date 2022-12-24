class Api::RafflesController < ApplicationController
    def index
        @raffles = Raffle.all
    end
end
