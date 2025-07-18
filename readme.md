# Hotel Rate Comparator using Temporal Workflows

## Overview

This backend service compares hotel prices from two mocked suppliers and returns the best-priced hotels. It is built using:
- Node.js + TypeScript
- Temporal.io SDK
- Dockerized microservices
- Deployable to AWS ECS
- Public API exposed for testing

---

## API Endpoints

### GET `/api/hotels?city=delhi`

Returns best-priced hotels for the given city.

Example response:
```json
[
  {
    "name": "Holtin",
    "price": 5340,
    "supplier": "Supplier B",
    "commissionPct": 20
  },
  {
    "name": "Radison",
    "price": 5900,
    "supplier": "Supplier B",
    "commissionPct": 13
  }
]

// Docker setup
Build & run locally:

docker-compose up --build


API available at:

http://localhost:3000/api/hotels?city=delhi  

user this endpoint in postman after running the docker it will return best hotel prices after comparing the price for multiple suppliers. (All done by temporal workers in parallel.)

//Aws deployment 
Note that this project is fully AWS deployable. we just need to upload the images to ECS service.Not able to do because of AWS pricing.


