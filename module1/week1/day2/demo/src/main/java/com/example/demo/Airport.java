package com.example.demo;

import org.hibernate.validator.constraints.Length;
import javax.validation.constraints.NotNull;

import java.time.LocalDate;

public class Airport {
    @Length(min=5, max=40)
    private String name;
    @Length(min=5, max=40)
    private String icao;
    @NotNull
    private String iata;
    private String city;
    private String state;
    private String country;
    private String elevation;
    private Number lat;
    private Number lon;
    private String tz;
    private LocalDate date = LocalDate.now();

    public String getName() {
        return name;
    }

    public String getIcao() {
        return icao;
    }

    public String getIata() {
        return iata;
    }

    public String getCity() {
        return city;
    }

    public String getState() {
        return state;
    }

    public String getCountry() {
        return country;
    }

    public String getElevation() {
        return elevation;
    }

    public Number getLat() {
        return lat;
    }

    public Number getLon() {
        return lon;
    }

    public String getTz() {
        return tz;
    }

    public LocalDate getDate() {
        return date;
    }

    public Airport(String name, String icao, String iata, String city, String state, String country, String elevation, Number lat, Number lon, String tz, LocalDate date) {
        this.name = name;
        this.icao = icao;
        this.iata = iata;
        this.city = city;
        this.state = state;
        this.country = country;
        this.elevation = elevation;
        this.lat = lat;
        this.lon = lon;
        this.tz = tz;
        this.date = date;
    }

    public Airport() {
    }

}
