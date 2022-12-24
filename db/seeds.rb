# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

TicketStatus.create!(id: 0, name: 'available')
TicketStatus.create!(id: 1, name: 'taken')
TicketStatus.create!(id: 2, name: 'bought')

Raffle.create_raffle(title: 'Rifa 1', quantity: 200)
Raffle.create_raffle(title: 'Rifa 2', quantity: 200)
Raffle.create_raffle(title: 'Rifa 3', quantity: 200)