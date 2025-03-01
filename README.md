Deployment instructions for running the project.

Prerequisites
GitHub account (for source code hosting)
Netlify account (for deployment)
Supabase account (for database)
Node.js installed (for local testing)


Clone the Repository


git clone https://github.com/faisalm36/computer_networking_csc_4220_project.git
cd computer_networking_csc_4220_project

Set Up Supabase
Create a project on Supabase.
Create a "users" table with columns:
      id (UUID, Primary Key, Default: gen_random_uuid())
      name (TEXT)
Copy the Supabase URL and the Anon Key from the API settings.


Configure Netlify Environment Variables
Go to Netlify Dashboard → Site Settings → Environment Variables
Add:
SUPABASE_URL = your-supabase-url (not adding for obvious reasons)
SUPABASE_ANON_KEY = your-anon-key (not adding for obvious reasons)
Click Save.

Deploy on Netlify
Go to Netlify and log in.
Click "New Site from Git" and connect your repository.
Click "Deploy Site" and wait for deployment.

Testing the Website
Open your Netlify site URL.
Enter a name in the input box and click Submit.
Refresh the page to see stored users.
