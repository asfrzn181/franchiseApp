FROM node:20-alpine

# Install Java (Wajib untuk Firebase Emulator)
RUN apk add --no-cache openjdk11-jre bash

# Install Firebase CLI secara global
RUN npm install -g firebase-tools

WORKDIR /app

# Expose ports untuk Firebase Emulator & Vue Dev Server
EXPOSE 4000 8080 9099 5001 5173

CMD ["sh"]