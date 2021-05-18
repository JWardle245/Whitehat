package com.example.demo;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.util.Base64Utils;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
/**
 * JUnit to test the Hello World logic
 */
@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class AirportsControllerTest {
    private static final ObjectMapper om = new ObjectMapper();
    @Autowired
    private MockMvc mockMvc;
    @Before
    public void init() {
    }
    @Test
    public void getAirports_OK() throws Exception {
        mockMvc.perform(get("/airports/").header(HttpHeaders.AUTHORIZATION,
                "Basic " + Base64Utils.encodeToString("admin:nimda".getBytes())))
                //.andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string("Retrieved airports list"));
    }

    @Test
    public void postAirport_OK() throws Exception {
        mockMvc.perform(post("/airports/").header(HttpHeaders.AUTHORIZATION,
                "Basic " + Base64Utils.encodeToString("admin:nimda".getBytes())))
                .andExpect(status().isCreated())
                .andExpect(content().string("Airport added"));
    }

    @Test
    public void deleteAirports_OK() throws Exception {
        mockMvc.perform(delete("/airports/").header(HttpHeaders.AUTHORIZATION,
                "Basic " + Base64Utils.encodeToString("admin:nimda".getBytes())))
                .andExpect(status().isNoContent())
                .andExpect(content().string("All airports deleted"));
    }

    @Test
    public void getAirport_OK() throws Exception {
        mockMvc.perform(get("/airports/01").header(HttpHeaders.AUTHORIZATION,
                "Basic " + Base64Utils.encodeToString("admin:nimda".getBytes())))
                //.andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string("Retrieved airport"));
    }

    @Test
    public void putAirport_OK() throws Exception {
        mockMvc.perform(put("/airports/01").header(HttpHeaders.AUTHORIZATION,
                "Basic " + Base64Utils.encodeToString("admin:nimda".getBytes())))
                .andExpect(status().isNoContent())
                .andExpect(content().string("Airport updated"));
    }

    @Test
    public void deleteAirport_OK() throws Exception {
        mockMvc.perform(delete("/airports/01").header(HttpHeaders.AUTHORIZATION,
                "Basic " + Base64Utils.encodeToString("admin:nimda".getBytes())))
                .andExpect(status().isNoContent())
                .andExpect(content().string("Airport deleted"));
    }

    @Test
    public void fail_Authentication() throws Exception {
        mockMvc.perform(delete("/airports/01").header(HttpHeaders.AUTHORIZATION,
                "Basic " + Base64Utils.encodeToString("admin:wrong".getBytes())))
                .andExpect(status().isUnauthorized());
    }
//    private static void printJSON(Object object) {
//        String result;
//        try {
//            result = om.writerWithDefaultPrettyPrinter().writeValueAsString(object);
//            System.out.println(result);
//        } catch (JsonProcessingException e) {
//            e.printStackTrace();
//        }
//    }
}