class TakeTicket
    def take_tickets!(id_raffle, tickets, user_data)
        tickets_available = Ticket.tickets_available(id_raffle, tickets)
        new_folio_number = nil

        raise TicketNoAvailableException.new unless tickets_available

        Ticket.transaction do
            folio_metadata = FolioMetadatum.find_by({raffle_id: id_raffle}).lock!
            new_folio_number = folio_metadata.actual_number + 1
            
            folio = Folio.create!(number: new_folio_number, first_name: user_data[:first_name],
                        last_name: user_data[:last_name],
                        cellphone: user_data[:cellphone],
                        state: user_data[:state],
                        raffle_id: id_raffle)
            
            tickets.each do |ticket|
                ticket_db = Ticket.find_by({ number: ticket })
                ticket_db.reservation_date = DateTime.current
                ticket_db.ticket_status_id = 1
                ticket_db.folio_id = folio.id
                ticket_db.save!
            end

            folio_metadata.actual_number = new_folio_number
            folio_metadata.save!
        end

        return new_folio_number
    end
end
