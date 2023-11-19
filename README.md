# Log Ingestor

## Overview
This project implements a log ingestor designed to handle and store logs efficiently. It includes a backend built with Ruby on Rails and a frontend developed with React.

## System Requirements
- Ruby
- Node.js
- MongoDB

## Setup Instructions

### Backend (Ruby on Rails)
1. Install Ruby dependencies: `bundle install`
2. Start the Rails server: `bin/dev`

### Frontend (React)
1. Install Node.js dependencies: `yarn install`
2. Build the frontend: `yarn build`

### Database (MongoDB)
Ensure MongoDB is installed and running.

## System Design
The system follows a client-server architecture with the following components:
- **Backend**: Ruby on Rails server handling log ingestion and retrieval.
- **Frontend**: React application for interacting with the log ingestor.
- **Database**: MongoDB for storing log data.

## Features
- Log ingestion in JSON format.
- Search logs based on a query parameter.

## API Endpoints

### Ingest Log
- **URL:** `/ingest`
- **Method:** `POST`
- **Payload Example:**
  ```json
  {
    "level": "error",
    "message": "Failed to connect to DB",
    "resourceId": "server-1234",
    "timestamp": "2023-09-15T08:00:00Z",
    "traceId": "abc-xyz-123",
    "spanId": "span-456",
    "commit": "5e5342f",
    "metadata": {
      "parentResourceId": "server-0987"
    }
  }
