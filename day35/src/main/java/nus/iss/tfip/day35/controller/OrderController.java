package nus.iss.tfip.day35.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.json.Json;
import jakarta.json.JsonObject;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequestMapping(path = "/order", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
@ResponseBody
@CrossOrigin("*")
public class OrderController {

    @PostMapping()
    public ResponseEntity<String> saveOrder() {
        // save the order
        JsonObject jObj = Json.createObjectBuilder()
                .add("orderId", "TestTest")
                .build();
        return new ResponseEntity<String>(jObj.toString(), HttpStatus.CREATED);
    }

}
