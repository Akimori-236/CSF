package nus.iss.tfip.day35.service;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nus.iss.tfip.day35.Repository.OrderRepository;
import nus.iss.tfip.day35.model.Order;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepo;

    public String saveOrder(Order order) {
        Document doc = new Document()
        .append("name", order.getName())
        .append("email", order.getEmail());
        Document response = orderRepo.saveOrder(doc);
        return response.getObjectId("_id").toString();
    }
}
