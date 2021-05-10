package org.example;

import java.net.URI;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;
import java.util.Map;

import static java.net.http.HttpRequest.BodyPublishers.noBody;


/**
 * Starter code which uses Java 11 java.net.http.HttpClient
 * to send HTTP Requests and receive HTTP Responses.
 * Note that you can also use Spring code to send HTTP Requests but
 * we have chosen to use java.net.http.HttpClient as it is nice and easy!
 */
public class HttpClientApp {
    public static void main( String[] args ) {

        String url = "https://http-challenge.multiverse-coaches.io";

        try {
            java.net.http.HttpClient client = java.net.http.HttpClient.newHttpClient();

            // first request (GET)
            System.out.println("FIRST REQUEST----------------------");

            HttpRequest request = HttpRequest.newBuilder(
                    URI.create(url))
                    .header("accept", "application/json")
                    .method("GET", noBody())
                    .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            System.out.println(response.body());

            // TODO - add code for second request (POST) here
            System.out.println("SECOND REQUEST----------------------");

            String jsonName = "{" +
                    "\"name\":\"jamie\"" +
                    "}";

            request = HttpRequest.newBuilder(
                    URI.create(url+"/apprentices"))
                    .header("Content-Type", "application/json")
                    .header("accept", "text/plain; text/html; /*/")
                    .method("POST", HttpRequest.BodyPublishers.ofString(jsonName))
                    .build();

            response = client.send(request, HttpResponse.BodyHandlers.ofString());
            System.out.println(response.body());

            // TODO - add code for third request (header) here
            System.out.println("THIRD REQUEST----------------------");

            // The code below will help you retrieve the "your-id" header from the HTTP Response

            String headerValue = null;

            Map<String, List<String>> map = response.headers().map();
            for (Map.Entry<String, List<String>> entry:map.entrySet()) {
                if ("your-id".equalsIgnoreCase(entry.getKey())) {
                    headerValue = entry.getValue().get(0);
                    break;
                }
            }

            request = HttpRequest.newBuilder(
                    URI.create(url+"/apprentices/"+headerValue))
                    .header("Content-Type", "application/json")
                    .headers("your-id", headerValue)
                    .header("accept", "text/plain; text/html; /*/")
                    .method("GET", noBody())
                    .build();

            response = client.send(request, HttpResponse.BodyHandlers.ofString());
            System.out.println(response.body());

            // TODO - add code for forth request (PATCH) here
            System.out.println("FOURTH REQUEST----------------------");

            String urlCodedName = "guests=gregg%2Cmary%2Cmonty";

            request = HttpRequest.newBuilder(
                    URI.create(url+"/apprentices/"+headerValue))
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .headers("your-id", headerValue)
                    .header("accept", "text/plain; text/html; /*/") //
                    .method("PATCH", HttpRequest.BodyPublishers.ofString(urlCodedName))
                    .build();

            response = client.send(request, HttpResponse.BodyHandlers.ofString());
            System.out.println(response.body());

            // TODO - add code for fifth request (GET with Query Parameters) here
            System.out.println("FIFTH REQUEST----------------------");

            String menuQueryParams = "starter=cheese&main=steak%20pie&dessert=ice%20cream";

            request = HttpRequest.newBuilder(
                    URI.create(url+"/apprentices/"+headerValue+"/menus?"+menuQueryParams))
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .headers("your-id", headerValue)
                    .header("accept", "text/plain; text/html; /*/") //
                    .build();

            System.out.println(request);

            response = client.send(request, HttpResponse.BodyHandlers.ofString());
            System.out.println(response.body());

            // TODO - EXTRA: DELETE request
            System.out.println("DELETE REQUEST----------------------");

            request = HttpRequest.newBuilder(
                    URI.create(url+"/apprentices/"+headerValue))
                    .header("Content-Type", "application/json")
                    .headers("your-id", headerValue)
                    .header("accept", "text/plain; text/html; /*/")
                    .method("DELETE", noBody())
                    .build();

            response = client.send(request, HttpResponse.BodyHandlers.ofString());
            System.out.println(response.body());

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}