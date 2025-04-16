package com.backoffice.parking.exception;

import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
public class GeneralException extends Exception {
    public GeneralException(String message) {
        super(message);
    }
}