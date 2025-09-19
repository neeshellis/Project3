# Project3
This project is for a backend application to represent the CRUD functionality of a database, using created data from a JSON file.

The project is running on the main branch in GitHub.

The database I am using is SQL and the GUI is MySQL WorkBench. Initially I created a new Reviews database in my Mac terminal having initially connected to my SQL server.

I then created a full MVC backend application in Visual Code and connected my new database using the file dbConnect.js.  I could check if this was successful by opening up MySQL WorkBench.

In Visual Code I then created each table in individual files under the models folder.  I repeated this with a componant for each table, and a routes files for each model with the CRUD commands. The server.js file when activated links the newly created Database to the Routes for each Model.

The database comprises of three model tables - Users, Bookings, Reviews.
The object of the database is to hold information for users utilizing an accommodation website.  The application provides three choices of accommodation to book and a reviews page where customers can leave their feedback having completed their stay.

The Users table contains the guests personal details. This table does not have a Foreign Key.
The Bookings table contains a Foreign Key linking back to the Users table through userID, the guests name, the accommodation of their choice and the datein, dateout and number of nights for their stay.
The final table Reviews contains feedback from the guests.  This has two foreign keys - one to the Users table and one to the Bookings Table, along with a review and a rating field.

The website has a login/sign up button for those who would like to book accommodation through the site.  Users can access this on the NavBar, or when they place a booking for one of the three accommodation offerings, the Book button will open up the Login/Signup window first to capture their username/password and their personal details for the User table.  Once this is complete the user will return to the bookings page.  Here the user can select their accommodation choice and the dates of their stay. This will populate the Bookings Table.

The reviews page is where previously registered users can log back in and leave a review. This Review table links to both the booking and user table through a foreign key.


