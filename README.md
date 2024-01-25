# Formula 1 Drivers Backend Application

📚 [**Overview**](#overview) • 📃 [**Features**](#features) • 🚀 [**Getting Started**](#getting-started) • ▶️ [**Running the Application**](#running-the-application)

# Table of Contents

1. [Overview](#overview)
2. [Features](#features)
    - Data Serving
    - Driver Ranking
    - Photo Serving
    - Driver Overtaking
3. [Getting Started](#getting-started)
    - Prerequisites
    - Installation
4. [Running the Application](#running-the-application)
5. [API Endpoints](#api-endpoints)
6. [Usage](#usage)


## Overview

This application is a simple web server built using Node.js and Express, serving data for Formula 1 drivers. It's written in modern TypeScript and integrates with a React frontend. The server handles requests to display information about Formula 1 drivers and mutate their ranking.

## Features

- **Data Serving**: Serves driver information from a JSON data source.
- **Driver Ranking**: Dynamically assigns rankings to drivers on startup.
- **Photo Serving**: Statically serves driver photos.
- **Driver Overtaking**: Allows a driver to overtake the one in front via a POST request.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Clone the repository to your local machine.

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/AnnaPominchuk/formula-1-backend.git
   ```
2. **Navigate to the project directory**
   ```sh
   cd formula-1-backend
   ```
3. **Install dependencies**
   ```sh
   npm install
   ```
4. **Create and edit .env**
    You can create .env file and specify port you want the application to run using variable called port. 
    Otherwise the application will try to run on port 8000.
5. **Build the project**
   ```sh
   npm run build
   ```

### Running the Application

1. **Start the server**
   ```sh
   node dist/server.js
   ```
2. The server will start running on a port you specified in .env file or on port 8000 by default(`http://localhost:8000`).

## API Endpoints

- **GET `/api/drivers`**: Fetches the list of all drivers and their current ranking.
- **POST `/api/drivers/{driverId}/overtake`**: Updates the ranking of the drivers to reflect overtaking.

## Usage

Once the server is running, you can use any HTTP client (like Postman) or your frontend application to interact with the API endpoints as described above.