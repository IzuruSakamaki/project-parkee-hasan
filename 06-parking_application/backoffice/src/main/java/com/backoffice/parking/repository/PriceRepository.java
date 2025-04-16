package com.backoffice.parking.repository;

import com.backoffice.parking.model.PriceModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PriceRepository extends JpaRepository<PriceModel, Long> {
    PriceModel findTopByOrderByCreatedAtDesc();
}
