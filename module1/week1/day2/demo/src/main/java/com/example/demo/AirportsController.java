package com.example.demo;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/airports")
public class AirportsController {

    @GetMapping(value={"/hello"})
    public String sayHello() {
        return ("Hello from Spring Boot");
    }

/*
    private static List<Airport> airports;

    static {
        // next line is using the Try-With-Resource syntax to ensure that the
        // input stream gets closed (very important else get memory leaks!)
        try (InputStream is = AirportsController.class.getResourceAsStream("/static/airports.json");){
            ObjectMapper mapper = new ObjectMapper();

            airports = mapper.readValue(is, new TypeReference<List<Airport>>() {
            });
        } catch(IOException e) {
            e.printStackTrace();
        }

    }

    @GetMapping("/")
    public List<Airport> getAirports() {
        return AirportsController.airports;
    }
*/
    // You can build out the rest of the endpoints
    // just a heads-up http://localhost:8080/airports/ remember the trailing slash.
    // Because Java is strongly typed swagger will to most of the work to document your endpoint - you can add extra information (go see the docs https://springdoc.org/)
}