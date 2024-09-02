## Weather App

### Overview
This is a simple React application that allows users to search for weather information by entering a city name. The app fetches weather data from the OpenWeatherMap API and displays it, including temperature, weather conditions, feels like temperature, humidity, and wind speed.

### Project Structure
- **`App.js`**: The main component responsible for handling user input, fetching weather data, and displaying the results.
- **`index.js`**: The entry point of the React application, rendering the `App` component.
- **`index.css`**: Contains styling for the application, including layout and responsiveness.

### Features
- **Search Functionality**: Users can search for weather data by entering the name of a city.
- **Weather Display**: The app displays the current weather, including temperature, weather description, feels like temperature, humidity, and wind speed.
- **Error Handling**: If the city is not found or there is another issue with the API request, an error message is displayed.
- **Loading State**: A loading message is shown while the weather data is being fetched.

### Installation Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Obtain an API Key**:
   - Sign up at [OpenWeatherMap](https://openweathermap.org/) to get an API key.
   - Replace the placeholder API key in `App.js` with your own API key:
     ```javascript
     const API_KEY = 'your_api_key_here';
     ```

4. **Run the application**:
   ```bash
   npm start
   ```

5. **Open the application**:
   - The application will be running at `http://localhost:3000`.

### How to Use

1. Enter the name of a city in the search box.
2. Click the **Search** button.
3. The weather information for the entered city will be displayed, or an error message if the city is not found.

### Technologies Used
- **React**: JavaScript library for building user interfaces.
- **CSS**: Styling and layout.
- **OpenWeatherMap API**: Provides weather data.

### License
This project is open-source and available under the [MIT License](LICENSE).

### Author
Billy Bradocks

Feel free to contribute to this project by submitting issues or pull requests!
