package com.backoffice.parking.controller;

import com.backoffice.parking.exception.GeneralException;
import com.backoffice.parking.model.TransactionModel;
import com.backoffice.parking.request.TransactionRequest;
import com.backoffice.parking.response.BaseResponse;
import com.backoffice.parking.service.TransactionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.backoffice.parking.constant.GeneralConstant.*;

@RestController
@RequestMapping("/transactions")
public class TransactionController {
    private final TransactionService transactionService;

    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @GetMapping
    public ResponseEntity<BaseResponse<TransactionModel>> get(@RequestParam String plateNumber) {
        TransactionModel tx = transactionService.get(plateNumber.toUpperCase());
        return ResponseEntity.status(HttpStatus.OK)
                .body(new BaseResponse<>(tx.getId() == null ? NEW_STATUS : REGISTERED_STATUS, tx));
    }

    @PostMapping("/check-in")
    public ResponseEntity<BaseResponse<TransactionModel>> create(@RequestBody TransactionRequest request) throws GeneralException {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new BaseResponse<>(CHECK_IN_STATUS, transactionService.create(request.getPlateNumber().toUpperCase())));
    }

    @PutMapping("/check-out")
    public ResponseEntity<BaseResponse<TransactionModel>> update(@RequestBody TransactionRequest request) throws GeneralException {
        return ResponseEntity.status(HttpStatus.OK)
                .body(new BaseResponse<>(CHECK_OUT_STATUS, transactionService.update(request.getPlateNumber().toUpperCase())));
    }
}