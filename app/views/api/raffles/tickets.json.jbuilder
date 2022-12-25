json.array!(@tickets) do |ticket|
    json.number ticket.number
    json.status ticket.ticket_status_id
end
