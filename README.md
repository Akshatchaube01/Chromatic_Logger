# Chromatic Logger

Welcome to **Chromatic Logger**, a simple and colorful logging library designed to make your console logs vibrant and visually appealing. With a variety of functions at your disposal, you can highlight important information, warnings, errors, and successes using different colors. This README will guide you through the available functions and how to use them effectively.

## Available Functions

### 1. `Log.sky`

Prints blue console text.

#### Parameters:
- `text` (string): The text to be printed in blue.

#### Example:
```javascript
Log.sky("This is a message in blue.");
```

### 2. `Log.danger`

Prints red console text with a yellow background.

#### Parameters:
- `text` (string): The text to be printed in red with a yellow background.

#### Example:
```javascript
Log.danger("This is a danger alert!");
```

### 3. `Log.my_color`

Prints text with the color of your choice.

#### Parameters:
- `text` (string): The text to be printed.
- `color` (string): The color of the text.

#### Example:
```javascript
Log.my_color("This is a custom colored message.", "purple");
```

### 4. `Log.success`

Prints green console text.

#### Parameters:
- `text` (string): The text to be printed in green.

#### Example:
```javascript
Log.success("This is a success message!");
```

## Usage

To use Chromatic Logger, simply call the desired function with the appropriate parameters. Each function is designed to make your logs more readable and visually distinct, helping you quickly identify different types of messages.

Here is a quick overview of how you can use these functions in your code:

```javascript
// Import Chromatic Logger (adjust the import statement based on your setup)
// import { Log } from 'chromatic-logger';

Log.sky("Application started successfully.");
Log.success("Data loaded successfully.");
Log.my_color("User logged in.", "orange");
Log.danger("Error: Unable to connect to the server.");
```

By using these functions, you can enhance your console output, making it easier to monitor and debug your applications.

## Conclusion

Chromatic Logger is a simple yet powerful tool to add color to your console logs. With functions for blue, red, green, and custom colored text, you can make your logs stand out and improve the overall readability of your console output.

Happy logging!