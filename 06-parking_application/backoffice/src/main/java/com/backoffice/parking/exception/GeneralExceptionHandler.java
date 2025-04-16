package com.backoffice.parking.exception;

import com.backoffice.parking.response.BaseResponse;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import static com.backoffice.parking.constant.GeneralConstant.ERROR_STATUS;
import static com.backoffice.parking.constant.GeneralConstant.GENERAL_ERROR_MESSAGE;

@ControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE)
public class GeneralExceptionHandler {
    @ExceptionHandler(GeneralException.class)
    protected ResponseEntity<Object> handleGeneralException(GeneralException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(new BaseResponse<>(ERROR_STATUS, ex.getMessage()));
    }
    @ExceptionHandler(DataAccessException.class)
    protected ResponseEntity<Object> handleGeneralException(DataAccessException ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new BaseResponse<>(ERROR_STATUS, GENERAL_ERROR_MESSAGE));
    }
}