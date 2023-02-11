package com.ssafy.common.api.user.dto;

import com.ssafy.common.api.user.domain.UserRole;
import com.ssafy.common.api.user.domain.UserStatus;
import lombok.Getter;

@Getter
public class UserRequestJoinForm {
    private String userId;
    private String password;
    private String name;
    private String nickName;
    private String phoneNumber;
    private String email;
    private UserRole role;
    private UserStatus userStatus;
}
