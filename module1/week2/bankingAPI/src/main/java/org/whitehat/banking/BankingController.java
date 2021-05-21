package org.whitehat.banking;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@RequestMapping("/banking")
public class BankingController {

    @GetMapping("/")
    @ResponseStatus(value = HttpStatus.OK) //200
    public String getAirports() {
        return ("Retrieved balance");
    }
}
