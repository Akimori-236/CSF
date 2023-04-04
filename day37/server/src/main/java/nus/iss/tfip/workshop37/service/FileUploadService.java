package nus.iss.tfip.workshop37.service;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;
import java.util.UUID;

import org.joda.time.Instant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;

@Service
public class FileUploadService {

    @Value("${do.storage.bucket.name}")
    private String bucketName;

    @Autowired
    private AmazonS3 s3Client;

    public String upload(MultipartFile file) throws IOException {
        Map<String, String> userMetadata = new HashMap<>();
        userMetadata.put("name", "amongus");
        userMetadata.put("uploadTime", Instant.now().toString());
        userMetadata.put("originalFilename", file.getOriginalFilename());

        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentType(file.getContentType());
        metadata.setContentLength(file.getSize());
        metadata.setUserMetadata(userMetadata);

        String key = UUID.randomUUID().toString().substring(0, 8);
        // split(".")
        StringTokenizer tokenizer = new StringTokenizer(file.getOriginalFilename(), ".");

        int count = 0;
        String filenameExt = "";
        String finalFileUpload = "";
        // FIND FILE EXTENSION
        while (tokenizer.hasMoreTokens()) {
            if (count == 1) {
                filenameExt = tokenizer.nextToken();
                break;
            }
            count++;
        }
        // finalise filename if .blob
        if (filenameExt.equals("blob")) {
            finalFileUpload = filenameExt + ".png";
        }

        PutObjectRequest putRequest = new PutObjectRequest("akimori-tfip",
                "myObject/%s.%s".formatted(key, finalFileUpload),
                file.getInputStream(), metadata);
        // SET FILE AS PUBLIC READABLE
        putRequest.withCannedAcl(CannedAccessControlList.PublicRead);
        s3Client.putObject(putRequest);

        // RETURN FINAL FILENAME
        return "myObject/%s.%s".formatted(key, finalFileUpload);
    }
}
