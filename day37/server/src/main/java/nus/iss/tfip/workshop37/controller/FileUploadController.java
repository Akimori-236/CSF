package nus.iss.tfip.workshop37.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import nus.iss.tfip.workshop37.service.FileUploadService;

@Controller
@RequestMapping(path = "/api")
public class FileUploadController {

    @Autowired
    private FileUploadService fileSvc;

    @PostMapping(path = "/post", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> saveUpload(@RequestPart MultipartFile imgFile, @RequestPart String title,
            @RequestPart String comments) {
        String key = null;

        try {
            key = this.fileSvc.upload(imgFile);
        } catch (IOException e) {
            System.err.println(e);
        }

        JsonObject jObj = Json.createObjectBuilder()
                .add("message", key)
                .build();

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .contentType(MediaType.APPLICATION_JSON)
                .body(jObj.toString());

    }
}
