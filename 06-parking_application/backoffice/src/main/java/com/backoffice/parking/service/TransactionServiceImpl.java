package com.backoffice.parking.service;

import com.backoffice.parking.exception.GeneralException;
import com.backoffice.parking.mapper.TransactionMapper;
import com.backoffice.parking.model.TransactionModel;
import com.backoffice.parking.repository.PriceRepository;
import com.backoffice.parking.repository.TransactionRepository;
import org.springframework.stereotype.Service;

import static com.backoffice.parking.constant.GeneralConstant.CHECK_IN_ERROR_MESSAGE;
import static com.backoffice.parking.constant.GeneralConstant.CHECK_OUT_ERROR_MESSAGE;

@Service
public class TransactionServiceImpl implements TransactionService {
    private final PriceRepository priceRepository;
    private final TransactionRepository transactionRepository;
    private final TransactionMapper transactionMapper;

    public TransactionServiceImpl(PriceRepository priceRepository,
                                  TransactionRepository transactionRepository,
                                  TransactionMapper transactionMapper) {
        this.priceRepository = priceRepository;
        this.transactionRepository = transactionRepository;
        this.transactionMapper = transactionMapper;
    }

    @Override
    public TransactionModel get(String plateNumber) {
        TransactionModel tx = transactionRepository.findByPlateNumberAndNotDeleted(plateNumber);
        long validPrice = priceRepository.findTopByOrderByCreatedAtDesc().getPrice();
        if (tx == null) {
            return transactionMapper.mapNewTransaction(plateNumber, validPrice);
        }
        transactionMapper.calculatePrice(tx, validPrice);
        return tx;
    }

    @Override
    public TransactionModel create(String plateNumber) throws GeneralException {
        TransactionModel tx = this.get(plateNumber);
        if (tx.getId() == null) {
            return transactionRepository.save(transactionMapper.mapCreateTransaction(tx));
        } else {
            throw new GeneralException(CHECK_IN_ERROR_MESSAGE);
        }
    }

    @Override
    public TransactionModel update(String plateNumber) throws GeneralException {
        TransactionModel tx = this.get(plateNumber);
        if (tx.getId() != null) {
            return transactionRepository.save(transactionMapper.mapUpdateTransaction(tx));
        } else {
            throw new GeneralException(CHECK_OUT_ERROR_MESSAGE);
        }
    }
}
