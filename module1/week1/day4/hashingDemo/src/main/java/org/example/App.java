package org.example;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class App 
{
    public static void main( String[] args )
    {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode("your password");

        System.out.println("Original password: " + "your password");
        System.out.println("Hashed password: " + hashedPassword);

        boolean isMatch = passwordEncoder.matches("your password", "$2a$10$mUkmYq9C4wlPLwzqqE1NlO.jpNlyIkoGL6Amn9ZuN2Z.8Yf8OnBia");
        System.out.println("Passwords match: " + isMatch);
    }
}
