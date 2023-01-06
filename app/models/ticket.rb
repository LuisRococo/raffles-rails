class Ticket < ApplicationRecord
    def self.tickets_status(id_raffle, tickets)
        status = []
        tickets.each do |ticket|
            db_ticket = Ticket.find_by({raffle_id: id_raffle, number: ticket})
            status.push(db_ticket.ticket_status_id)
        end
        return status
    end

    def self.tickets_available(id_raffle, tickets)
        statuses = Ticket.tickets_status(id_raffle, tickets)
        statuses.each do |status|
            return false if status != 0
        end
        return true
    end
end
