![Image](Rappi%20Crowd%20Len.png)
# Rappi Crowd Len
Crowdlending web application for delivery people.

### Description
Integration between borrowers and lenders to apply crowdlending, focused on the psychological characterization of the borrower through IBM Watson Personality Insights.

Developed for [Rappi](https://www.rappi.com.co/) Company in Colombia. This the final project [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) of Foundations in [Holberton School Colombia](https://www.holbertonschool.com/co).

### Features
  - Creation of Borrowers or "Rappi Tenderos".
  - Calculates the personality Score of "Rappitendero" based on the response of Watson IBM API.
  - Records the score for each "Rappitendero" and show it to investors
  - Creation of investors.
  - Simulates de inversion of money for each "Rappi Tendero".

### Tech
This project was developed with these technologies:

* [Django] - Backend
* [React] - Frontend
* [PostgreSQL] - Database
* [Twitter] - Frontend
* [Ibm Watson] - Personality Insights

### Demo
The project is in a temporary location [Link](http://161.35.98.240:8000).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites
You need to have and install:
```
Ubuntu 18.04 LTS
Python3
Node JS 12.18.1 LTS
postgresql
```
For Python:
```
virtualenv
django
djangorestframework
psycopg2
tweepy
request
python-dateutil
```

### Installing
After you have cloned this repository, you need to create a database, with user and password according to "settings.py".

This repository don't include de API Key of IBM and Twitter for security reasons. Because that, you won't make a real request to those API.

Open de directory rappicrowd/
```
RappiCrowd$ cd rappicrowd/
RappiCrowd/rappicrowd$ npm run dev
```
Stop process or open a new terminal and run virtualenv.
```
RappiCrowd/rappicrowd$ source rappicrowd/bin/activate
(rappicrowd) RappiCrowd/rappicrowd$ 
```
### Running
Run the API
```
(rappicrowd) RappiCrowd/rappicrowd$ python manage.py runserver localhost:8000
```
Open in a browser http://localhost:8000

## Authors
* **Diego Betancourt Quintero** - [GitHub](https://github.com/dfbq91)
* **Orlando Gomez Lopez** - [GitHub](https://github.com/oran2527)
* **Stuart Echeverry Solarte** - [GitHub](https://github.com/stuartses)

See also the list of [contributors](https://github.com/stuartses/RappiCrowd/blob/master/AUTHORS) who participated in this project.

### Update
June, 2020
