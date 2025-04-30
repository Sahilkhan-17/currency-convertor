# Currency Converter App

A responsive currency converter application built with React and Tailwind CSS that provides real-time exchange rates.
This demonstrate the creation and usage of custom hooks in react.  

## Features

- **Real-time Exchange Rates**: Fetches up-to-date currency conversion rates
- **160+ Currencies**: Supports conversion between all major world currencies
- **Interactive UI**: Clean, user-friendly interface with intuitive controls
- **Swap Functionality**: Easily switch between source and target currencies
- **Responsive Design**: Works seamlessly on both desktop and mobile devices

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Custom Hooks**: `useCurrencyInfo` for fetching exchange rate data
- **React Hooks**: `useState` for state management ` useId` for generates a unique ID

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/currency-converter.git
   ```

2. Navigate to the project directory:
   ```bash
   cd currency-converter
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Project Structure

```
currency-converter/
├── src/
│   ├── components/
│   │   └── InputBox.jsx        # Reusable input component
│   │   └── index.js            # Approacch for exporting components
│   ├── hooks/
│   │   └── useCurrencyInfo.js  # Custom hook for fetching rates
│   ├── App.jsx                 # Main application component
│   └── main.jsx                # Application entry point
├── public/
├── package.json
└── README.md
```

## Usage

1. Enter the amount you want to convert in the "From" field
2. Select the source currency from the dropdown
3. Select the target currency from the second dropdown
4. Click "Convert" to see the result
5. Use the "Swap" button to quickly switch between currencies

## Customization

You can easily customize the app by modifying:

- **Colors**: Edit the Tailwind classes in the components
- **Background**: Change the background image URL in App.jsx
- **Default Currencies**: Modify the initial `from` and `to` states

## API Integration

This app uses free currency exchange rates from [ExchangeAPI](https://github.com/fawazahmed0/exchange-api).

### How it works:

1. The app gets exchange rates using this API endpoint:  
   `https://latest.currency-api.pages.dev/v1/currencies/eur.json`

2. By default, it shows rates compared to Euro (EUR)

### Important Notes:

- No API key needed - it's completely free
- Rates update automatically
- Works with 160+ world currencies

### Example API Response:
```json
{
  "eur": {
    "usd": 1.08,
    "inr": 89.42,
    "jpy": 157.32
    // ... more currencies
  }
}
```

## Dependencies

- react: ^18.2.0
- react-dom: ^18.2.0
- tailwindcss: ^3.3.0
- autoprefixer: ^10.4.0
- postcss: ^8.4.0

Made with ❤️ by [Sahil Khan](https://github.com/Sahilkhan-17)
