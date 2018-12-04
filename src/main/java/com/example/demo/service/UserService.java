package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void addUser(User user) {
        userRepository.save(user);
    }

    public void addUserToLead(Long leadId, Long userId) {
        userRepository.findById(leadId).ifPresent(lead -> userRepository.findById(userId).ifPresent(lead::addUser));
    }

    public User getUser(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }

    public Set<User> getUserOfLead(Long userId) {
        return userRepository.findById(userId).map(User::getUsers).orElse(null);
    }

    public Set<User> getAllUsers() {
        Set<User> users = new HashSet<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }
}
