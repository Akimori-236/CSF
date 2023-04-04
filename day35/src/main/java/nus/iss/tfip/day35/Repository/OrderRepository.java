package nus.iss.tfip.day35.Repository;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import nus.iss.tfip.day35.MyConstants;

@Repository
public class OrderRepository implements MyConstants{
    @Autowired
    private MongoTemplate template;

    public Document saveOrder(Document doc) {
        Document response = template.insert(doc, COLLECTION_ORDERS);
        return response;
    }
}
