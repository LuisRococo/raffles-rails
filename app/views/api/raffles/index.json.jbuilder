json.array!(@raffles) do |raffle|
    json.id raffle.id
    json.title raffle.title
end
