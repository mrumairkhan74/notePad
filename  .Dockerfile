# Step 1: Use the official Node.js image as the base image
FROM node:16

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files into the container
COPY . .

# Step 6: Expose the port your app runs on (assuming port 3000)
EXPOSE 3000

# Step 7: Define the command to run your app (assuming app.js is your entry point)
CMD ["npm", "start"]
