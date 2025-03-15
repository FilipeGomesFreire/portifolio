# Estágio 1: Construir o React
FROM node:18 as react-build
WORKDIR /app
COPY src/main/resources/static/react-app/package.json src/main/resources/static/react-app/package-lock.json ./
RUN npm install
COPY src/main/resources/static/react-app .
RUN npm run build

# Estágio 2: Construir o Spring Boot
FROM openjdk:17-jdk-alpine as spring-build
WORKDIR /app
COPY . .
RUN ./mvnw clean package

# Estágio 3: Rodar a aplicação
FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY --from=spring-build /app/target/atividade-0.0.1-SNAPSHOT.jar app.jar
COPY --from=react-build /app/build /app/src/main/resources/static
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]