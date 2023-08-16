# Kasa API for Kasa project
[Kasa project](https://github.com/GrimonprezAlexis/P11_kasa)

# Node.js Router for API Endpoints

This Node.js router handles API endpoints for retrieving customer and logement (housing) data. It uses the Express framework along with the `cors` middleware to enable Cross-Origin Resource Sharing. The router responds to various requests for customer and logement data.

## Getting Started

1. Make sure you have Node.js and npm installed on your system.
2. Clone or download this repository to your local machine.
3. Install the required dependencies by running the following command in the project directory:
`npm install`

4. Start the server by running:
`npm start`

5. The server will now be running at `http://localhost:5000`.
6. 
## Endpoints
### GET /api/customers
Returns a list of customers.

#### Response
```json
[
{ "id": 1, "firstName": "Alexis", "lastName": "Grz" },
{ "id": 2, "firstName": "John", "lastName": "Doe" },
{ "id": 3, "firstName": "Steve", "lastName": "Smith" }
]
````

### GET /api/logements
Returns a list of logements (housing data)


### GET /api/logements/:id
`Returns a specific logement (housing data) based on the provided id parameter.`

Parameters
- id: The ID of the logement to retrieve.
> `Logement (housing data) object based on the provided ID`

## Dependencies
- Express.js
- cors
