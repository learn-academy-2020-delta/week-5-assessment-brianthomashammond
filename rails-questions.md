# ASSESSMENT 5: Rails Practical Questions - Brian Thomas Hammond

1. What is the command to create a new Rails application with a Postgres database?

rails generate new app_name -d postgresql

(We've been using -T at the end of ours but my understanding is that is related to the default testing suite, not Postgres.)


2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - The http verb to read data.
library - is appended to the url to navigate to that page of our site.
:id - is also appended to the url in order to pass data to our site so it can be manipulated.
book - refers to a controller named book.
show - refers to a method in book that is being passed the data from :id in order to render the page. 


3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

For a model with classes Driver and Car:

$ rails generate migration AddForeignKeyToCars

In the migration file:

def change
    add_column :cars, :driver_id, :integer
end


4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

rails generate model Person shirt:boolean pants:boolean shoes:boolean


5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

navigate to app/models/person.rb

class Owner < ApplicationRecord
    validates: :shirt, :pants, :shoes, presence: true
end


6. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

A rails model is singular and named using PascalCase.

A table is plural and named using snake_case