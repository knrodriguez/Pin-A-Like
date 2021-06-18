# Pin-A-Like
A Pinterest clone.

## Features

### Infinite Scrolling 

![Infinite Scrolling](https://github.com/knrodriguez/Pin-A-Like/blob/main/public/assets/readme-assets/infinite-scrolling.gif?raw=true)

The infinite scroll was designed as part of the pin grid, so that if widgets were added to the same view with the pin grid, the pin grid will still scroll infinitely and render random pins. For version 2.0, I would like to add a loading screen when new pins are being fetched.

### Pinterest-Style Grid
![Grid Layout](./public/assets/readme-assets/grid-layout.png)

Using React-Responsive-Masonry, I was able to incorporate a Pinterest-style grid for the pins. The components made it easy to add items to the grid; however, the rendering of the grid items is not even (i.e., one column can still have pins while another column had whitespace). For version 2.0, I would build out my own grid. 

### Resizeable Pin Grid
![Resizeable Pin Grid](https://github.com/knrodriguez/Pin-A-Like/blob/main/public/assets/readme-assets/resizable-pin-grid.gif?raw=true)

The pin grid is responsive due to a custom function written in the AllPins component. There is a component from the React-Reponsive-Mansory library that makes the grid responsive; however, it only takes the window size into account when resizing. The pin grid is a reusable component, so when other components are added to the same view as the pin grid, the pin grid needs to be resized and the number of columns rendered re-calculated. The following image demonstrates this ability.

![Pin Grid with Widgets](https://github.com/knrodriguez/Pin-A-Like/blob/main/public/assets/readme-assets/pin-grid-with-widgets.png?raw=true)

## Getting Started

### Dependencies
These programs are needed before installation: 
* Node.js
* A web browser

### Installing

Fork and clone this repo to your local machine. To clone, enter:
```
git clone https://github.com/knrodriguez/Pin-A-Like.git
```
Open the directory for this project in a terminal or editor of your choice.

### Executing program

Install the dependencies required to run Pin-A-Like by running in the terminal:
```bash
npm install
```

**macOS and Linux**

To run the program in macOS or Linux, enter into your terminal:
```bash
npm start
```

**Windows**

For Windows, open two terminals. In one terminal, enter the following to build the bundle:
```
npm run build
```
In the other teminal, enter the following command to start the server: 
```
npm run start-dev
```

**Website**

To interact with Pin-A-Like, enter into your browser's URL bar `localhost:3000`.

## FAQ

**Why is it taking a while to clone this repo?**  
The readme-assets folder contains some rather large gifs, which may take some time to download on your machine. If it takes longer than 5 minutes, abort and try cloning it again. If the issue, persists, submit an issue. 

**How are you loading data?**  
A route on the server reads the JSON file and sends its contents. On the client side, an HTTP request is made to that route and fetches the JSON pin data. For version 2.0, I would set up a PostgreSQL database and seed it with the JSON data. 

## Authors

[![LinkedIn Logo](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.polycom.com%2Fcontent%2Fdam%2Fpolycom%2Fwww%2Fimages%2Ficons-and-buttons%2Flogo-linkedin-small.png&f=1&nofb=1)](https://www.linkedin.com/in/kirstierodriguez/) Kirstie Rodriguez


## Acknowledgments
This code was made with love and appreciation to the following creators: 

* [react-responsive-masonry](https://github.com/cedricdelpoux/react-responsive-masonry#readme) for creating the Pinterest-style grid.
* [NYC Tech Talent Pipeline](https://ttp.nyc/join) for supplying the challenge.