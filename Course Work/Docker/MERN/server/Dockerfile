FROM node:16.15.0


LABEL jfurbe <jfurbe@gmail.com>

# Step 3.1 - Add working directory
WORKDIR /server

# Step 3.2 - Copy npm dependencies
COPY package.json /server/package.json

# Step 3.3 - Install dependencies
RUN npm install



# Copy app source code

COPY . .

#Expose port and start the application

EXPOSE 8080

CMD ["npm", "start"] 