package nus.iss.tfip.day35.model;

import lombok.Data;

@Data
public class Order {
    private String name;
    private String email;
    private LineItem[] lineItems;
}
