package com.backoffice.parking.service;

import com.backoffice.parking.exception.GeneralException;
import com.backoffice.parking.model.TransactionModel;

public interface TransactionService {
    TransactionModel get(String plateNumber);
    TransactionModel create(String plateNumber) throws GeneralException;
    TransactionModel update(String plateNumber) throws GeneralException;

}
