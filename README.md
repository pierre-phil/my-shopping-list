#### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##### It is a simple shopping-list made for a student project that I improved a bit

Site is live here : https://www.my-shopping-list.com
(if broken link use https://practical-engelbart-e1a0c6.netlify.app/)

## Features

- dark mode
- localStorage
- set custom frequent items
- geolocation for weather forecast

## Packages used

Run `yarn` or `npm install` to install

- "bootstrap": "^5.0.0-alpha1",
- "react-flip-move": "^3.0.4",
- "use-position": "^0.0.8"

## Structure

```
src
└── index.js
    ├── App.js
    └── App.css
           ├── <ModeContextProvider>
              ├── <AppContainer>
                  ├── <Header>
                  ├── <ModeSwitch />
                  ├── <Header />
                      └── <ShoppingApp />
                          ├── <ShoppingList />
                          ├── <AddPopularProducts />
                          └── <AddProductForm />
                  ├── <Location />
                      └── <ReverseGeocoding />
                          └── <Weather />
                  └── <Cookie />
              ├── </AppContainer>
              └── <Footer />
           └── </ModeContextProvider>
```

## Bugs

- geolocation not working on mobile and sometimes on desktop.
  Removed location feature from the code.
  In the future, to re-implement, add `<Location />` component in `App.js`

  ```
  import Location from "./components/Location";

  <ShoppingApp />
  --> <Location />
      <Cookie />
  ```
