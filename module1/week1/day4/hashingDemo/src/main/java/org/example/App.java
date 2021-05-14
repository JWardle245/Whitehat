package org.example;

import org.jasypt.util.text.AES256TextEncryptor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class App 
{
    public static void main( String[] args )
    {
        // HASHING DEMO
        /*
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode("your password");

        System.out.println("Original password: " + "your password");
        System.out.println("Hashed password: " + hashedPassword);

        boolean isMatch = passwordEncoder.matches("your password", "$2a$10$mUkmYq9C4wlPLwzqqE1NlO.jpNlyIkoGL6Amn9ZuN2Z.8Yf8OnBia");
        System.out.println("Passwords match: " + isMatch);
        */

        //ENCRYPTION DEMO

        AES256TextEncryptor textEncryptor = new AES256TextEncryptor();
        String myText = "Encrypt this";
        textEncryptor.setPassword("PASSWORD");
        System.out.println("Original password: " + myText);

        String myEncryptedText = textEncryptor.encrypt(myText);
        System.out.println("Encrypted password: " + myEncryptedText);

        String plainText = textEncryptor.decrypt(myEncryptedText);
        System.out.println("Decrypted password: " + plainText);
    }
}
