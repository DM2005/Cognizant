package com.example.jwt_authentication_service.controller;

import com.example.jwt_authentication_service.util.JwtUtil;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public String authenticate() {

        return "{\"token\":\""
                + JwtUtil.generateToken("user")
                + "\"}";
    }
}