# Project Setup and Configuration

This guide will help you set up and configure the Nest Backend Bot and Weather Bot Admin Panel. Please follow these steps to get your project running smoothly.

## Installation

### Nest Backend Bot

1. Navigate to the `nest-backend-bot` directory:

    ```sh
    cd nest-backend-bot
    ```

2. Install project dependencies:

    ```sh
    npm install
    ```

3. Return to the parent directory:

    ```sh
    cd ..
    ```

### Weather Bot Admin Panel

4. Navigate to the `weather-bot-admin-panel` directory:

    ```sh
    cd weather-bot-admin-panel
    ```

5. Install project dependencies:

    ```sh
    npm install
    ```

## Configuration

### Nest Backend Bot

6. Navigate to the `nest-backend-bot` directory:

    ```sh
    cd nest-backend-bot
    ```

7. Create an `.env` file in this directory.

8. Add the following configuration keys to your `.env` file:

   - `TELEGRAM_BOT_TOKEN`: Your Telegram Bot Token
   - `CITY`: Your preferred city for weather information
   - `DATABASE_CONNECTION_STRING`: Your database connection string
   - `OPENWEATHERMAP_API_KEY`: Your OpenWeatherMap API Key

9. Save the `.env` file.

10. Return to the parent directory:

    ```sh
    cd ..
    ```

## Running the Applications

### Nest Backend Bot

11. Start the Nest Backend Bot server:

    ```sh
    cd nest-backend-bot
    npm start
    ```

### Weather Bot Admin Panel

12. Start the Weather Bot Admin Panel:

    ```sh
    cd ..
    cd weather-bot-admin-panel
    npm start
    ```

Your applications are now up and running!

