package com.backoffice.parking.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class BaseResponse<T> {
    private String status;
    private T data;
}
