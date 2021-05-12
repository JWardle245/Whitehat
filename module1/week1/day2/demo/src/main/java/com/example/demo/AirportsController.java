package com.example.demo;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/airports")
public class AirportsController {

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

    }*/

    @GetMapping("/")
    @ResponseStatus(value = HttpStatus.OK) //200
    public String getAirports() {
        return ("Retrieved airports list");
    }

    @PostMapping("/")
    @ResponseStatus(value = HttpStatus.CREATED) //201
    public String postAirport() {
        return ("Airport added");
    }

    @DeleteMapping("/")
    @ResponseStatus(value = HttpStatus.NO_CONTENT) //204
    public String deleteAirports() {
        return ("All airports deleted");
    }

    @GetMapping("/{id}")
    public String getAirport() {
        return ("Retrieved airport");
    }

    @PutMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT) //204
    public String putAirport() {
        return ("Airport updated");
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT) //204
    public String deleteAirport() {
        return ("Airport deleted");
    }

    // You can build out the rest of the endpoints
    // just a heads-up http://localhost:8080/airports/ remember the trailing slash.
    // Because Java is strongly typed swagger will to most of the work to document your endpoint - you can add extra information (go see the docs https://springdoc.org/)
}
