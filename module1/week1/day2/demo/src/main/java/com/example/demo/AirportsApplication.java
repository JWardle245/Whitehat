package com.example.demo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;

@SpringBootApplication
public class AirportsApplication {

    public static void main(String[] args) {
        SpringApplication.run(AirportsApplication.class, args);
    }

    @Bean
    public OpenAPI customOpenAPI(@Value("${springdoc.version}") String appVersion) {

        return new OpenAPI()
                .info(new Info()
                        .title("Airports")
                        .version(appVersion)
                        .description("28,000 airports")
                )
                .addServersItem(new Server().url("http://localhost:8080/"))
                .addServersItem(new Server().url("https://api.whitehatcoaches.org.uk/"));
    }
}

/*
in /src/main/resources/application.properties
  springdoc.swagger-ui.path=/api-docs
  springdoc.version=1.0.0
*/

// `http://localhost:8080/api-docs`