class Raffle < ApplicationRecord
    def self.create_raffle(title:, quantity:)
        Raffle.transaction do
            raffle = Raffle.create!(title: title, quantity: quantity)

            # create tickets
            for i in 1..quantity do
                Ticket.create!(number: i, raffle_id: raffle.id, ticket_status_id: 0)
            end

            # create folio metadata
            FolioMetadata.create!(raffle_id: raffle.id, start_number: 10000, actual_number: 10000)
        end
    end
end