json.partial! 'api/common/response_format', status: @status, data: {
    folioNumber: @folio_number,
    tickets: @tickets,
    raffleTitle: @raffle.title,
    raffleId: @raffle.id
}
