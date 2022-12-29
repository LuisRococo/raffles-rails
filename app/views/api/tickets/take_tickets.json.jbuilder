json.partial! 'api/common/response_format', status: @status, data: {
    folioNumber: @folio.number,
    tickets: @tickets,
    raffleTitle: @raffle.title,
    raffleId: @raffle.id
}
