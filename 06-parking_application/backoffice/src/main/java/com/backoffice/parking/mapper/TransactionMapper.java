package com.backoffice.parking.mapper;

import com.backoffice.parking.model.TransactionModel;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.LocalDateTime;

@Component
public class TransactionMapper {
    public void calculatePrice(TransactionModel tx, long validPrice) {
        long rangeTime = (long) Math.ceil(Duration.between(tx.getCreatedAt(), LocalDateTime.now()).toMinutes() / 60.0);
        tx.setPrice(rangeTime * validPrice);
    }

    public TransactionModel mapNewTransaction(String plateNumber, long validPrice) {
        return TransactionModel.builder()
                .plateNumber(plateNumber)
                .price(validPrice)
                .build();
    }

    public TransactionModel mapCreateTransaction(TransactionModel tx) {
        tx.setCreatedAt(LocalDateTime.now());
        tx.setUpdatedAt(LocalDateTime.now());
        return tx;
    }

    public TransactionModel mapUpdateTransaction(TransactionModel tx) {
        tx.setUpdatedAt(LocalDateTime.now());
        tx.setIsDeleted(true);
        return tx;
    }
}
