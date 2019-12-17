100.times do
  name = Faker::Restaurant.name
  rating = Faker::Number.between(from: 1, to: 5)
  description = Faker::Restaurant.description
  rest_type = Faker::Restaurant.type
  logo = 'http://marktanner.com/blog/wp-content/uploads/2012/03/Chairman-Mao-KFC1.gif'

  Restaurant.create(name: name, rating: rating, description: description, rest_type: rest_type, logo: logo)
end