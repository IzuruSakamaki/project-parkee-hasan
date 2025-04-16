package com.backoffice.parking.repository;

import com.backoffice.parking.model.TransactionModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TransactionRepository extends JpaRepository<TransactionModel, Long> {
    @Query("SELECT t FROM TransactionModel t WHERE t.plateNumber = :plateNumber AND t.isDeleted IS NOT TRUE")
    TransactionModel findByPlateNumberAndNotDeleted(@Param("plateNumber") String plateNumber);
}