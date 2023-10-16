## 1. Create environmental variables
First step is very important. Inside od `server` directory create new `.env` file. Inside the file create 2 variables: `PORT` where the server will run and `DB_CONNECTION_URI` with the value of your MongoDB connecton uri:
```
PORT = '8080'
DB_CONNECTION_URI = '<your_uri>'
```
<b>Make sure that PORT is set 8080</b>, otherwise the frontend app won't know what the endpoint for requests is.


## 2. Install dependencies
Install required dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## 3. Run the server

### a) development mode with nodemon
Then, you can run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


### b) run with node
You can also start the server using:

```bash
npm start
```

## Send data with your frontend
Now, when the server is working, you can easily send your answers to MongoDB.