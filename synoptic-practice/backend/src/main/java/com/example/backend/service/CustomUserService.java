package com.example.backend.service;

import com.example.backend.entities.User;
import com.example.backend.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserService implements UserDetailsService {

    @Autowired
    UserDetailsRepository userDetailsRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = userDetailsRepository.findByUserName(username);

        if(null == user) {
            throw new UsernameNotFoundException("User with username " + username + " not found.");
        }
        return user;
    }
}
