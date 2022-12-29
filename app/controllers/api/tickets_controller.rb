class Api::TicketsController < ApplicationController
    def take_tickets
        user_data = params[:data][:userInfo]
        @tickets = params[:data][:tickets]
        @raffle = Raffle.find(params[:id])

        tickets_available = Ticket.tickets_available(@tickets)

        if (!tickets_available)
            render json: format_response_error({ message: 'There are no available tickets' }), status: 500
            return
        end

        Ticket.transaction do
            folio_metadata = FolioMetadatum.find_by({raffle_id: @raffle.id}).lock!
            new_folio = folio_metadata.actual_number + 1
            @folio = Folio.create!(number: new_folio, first_name: user_data[:first_name],
                        last_name: user_data[:last_name],
                        cellphone: user_data[:cellphone],
                        state: user_data[:state],
                        raffle_id: @raffle.id)
            
            @tickets.each do |ticket|
                ticket_db = Ticket.find_by({ number: ticket })
                ticket_db.reservation_date = DateTime.current
                ticket_db.ticket_status_id = 1
                ticket_db.folio_id = @folio.id
                ticket_db.save!
            end

            folio_metadata.actual_number = new_folio
            folio_metadata.save!
        end

        @status = :success
    end
end
