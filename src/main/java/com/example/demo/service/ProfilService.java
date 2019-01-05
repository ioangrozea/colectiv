package com.example.demo.service;


import com.example.demo.entity.Profil;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.concurrent.atomic.AtomicReference;

@Service

public class ProfilService {
    @Autowired
    private UserRepository userRepository;

    public Profil getUserProfile(Long userId) {
        AtomicReference<Profil> profile = new AtomicReference<>();
        userRepository.findById(userId).ifPresent(user -> profile.set(user.getProfile()));
        return profile.get();
    }

}
