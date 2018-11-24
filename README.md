# Citizen of Eye
- Track the expenses of each Member in the year 2017;
- See which were the most used social networks;

# Require (i used)
- Yarn ^1.12.3
- Knex ^0.15.2
- Mysql

# Usage

Back-end

It is recommended that you use the dump of the database present in the repository, since running the script to popular the database is time consuming, due to the limit of requests imposed by the site http://dadosabertos.almg.gov.br/ws

- If use dump
	- Create a database and configure it according to the file "backend/knexfile.js"
	- Import dump to the database ("dump.sql")

			cd Back-end
			yarn install
			cd src
			node app.js

- If use script
	- Create a database and configure it according to the file "backend/knexfile.js"

			cd Back-end
			yarn install
			knex migrate:latest
			cd src
			node script.js
	- Expect to complete the entire data insertion process!

			node app.js

Front-end

			cd Front-end
			yarn install
			yarn start
