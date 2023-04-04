package nus.iss.tfip.workshop37.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder.EndpointConfiguration;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;

@Configuration
public class AppConfig {

    @Value("${do.storage.access.key}")
    private String accessKey;

    @Value("${do.storage.secret.key}")
    private String secretKey;

    @Value("${do.storage.endpoint}")
    private String endpoint;

    @Value("${do.storage.endpoint.region}")
    private String endpointRegion;

    @Bean
    public AmazonS3 createS3Client() {
        BasicAWSCredentials cred = new BasicAWSCredentials(accessKey, secretKey);
        EndpointConfiguration endConfig = new EndpointConfiguration(endpoint, endpointRegion);

        return AmazonS3ClientBuilder.standard()
                .withEndpointConfiguration(endConfig)
                .withCredentials(new AWSStaticCredentialsProvider(cred))
                .build();
    }
}
