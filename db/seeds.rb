# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create(username: 'root', 
            first_name: 'root',
            last_name: 'root',
            password: 'root')
User.create(username: 'root1', 
            first_name: 'root1',
            last_name: 'root1',
            password: 'root1')
User.create(username: 'root2', 
            first_name: 'root2',
            last_name: 'root2',
            password: 'root2')

TicketStatus.create!(id: 0, name: 'available')
TicketStatus.create!(id: 1, name: 'taken')
TicketStatus.create!(id: 2, name: 'bought')

Raffle.create_raffle(title: 'Super Car Raffle', quantity: 600)
Raffle.create_raffle(title: 'IPhone Raffle', quantity: 200)
Raffle.create_raffle(title: 'Elotito Raffle', quantity: 200)
