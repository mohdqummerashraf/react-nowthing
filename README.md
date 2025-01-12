# Carousel Package

A simple and customizable carousel component for React applications.

## Installation

You can install the package using npm:

```bash
npm install react-carousel-package
```

Or with yarn:

```bash
yarn add react-carousel-package
```

## Usage

Here is a basic example of how to use the carousel component in your React application:

```jsx
import React from 'react';
import Carousel from 'react-carousel-package';

const App = () => {
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
    ];

    return (
        <div>
            <h1>My Carousel</h1>
            <Carousel images={images} />
        </div>
    );
};

export default App;
```

## Props

The carousel component accepts the following props:

- `images` (array): An array of image URLs to display in the carousel.
- `interval` (number): The time interval (in milliseconds) between slides. Default is 3000.
- `showIndicators` (boolean): Whether to show navigation indicators. Default is true.
- `showControls` (boolean): Whether to show next/prev controls. Default is true.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact [mohd69191@gmail.com].
