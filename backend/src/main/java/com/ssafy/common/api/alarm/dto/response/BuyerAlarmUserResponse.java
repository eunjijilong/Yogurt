package com.ssafy.common.api.alarm.dto.response;

import com.ssafy.common.api.alarm.domain.BuyerAlarm;
import com.ssafy.common.api.alarm.domain.SellerAlarm;

public class BuyerAlarmUserResponse {

    private final BuyerAlarmResponse buyerAlarmResponse;

    private final Long BuyerAlarmId;

    public BuyerAlarmUserResponse(BuyerAlarm buyerAlarm) {
        buyerAlarmResponse= new BuyerAlarmResponse(buyerAlarm);
        BuyerAlarmId=buyerAlarm.getId();
    }
}
