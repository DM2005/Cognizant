package com.example.jwt_authentication_service.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

public class JwtUtil {

    private static final SecretKey KEY =
            Keys.hmacShaKeyFor(
                    "mysecretkeymysecretkeymysecretkey123456"
                            .getBytes(StandardCharsets.UTF_8));

    public static String generateToken(String username) {

        return Jwts.builder()
                .subject(username)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 3600000))
                .signWith(KEY)
                .compact();
    }
}