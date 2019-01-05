package com.example.demo.service;

import com.example.demo.entity.Project;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void addUser(User user) {
        if(user.getId()!= null) {
          Optional<User> dbUser = userRepository.findById(user.getId());
          if(dbUser.isPresent()){
            if(user.getProfile() == null)
              user.setProfile(dbUser.get().getProfile());
            if(user.getProjects().size() ==0)
              user.setProjects(dbUser.get().getProjects());
            if(user.getUsers() == null)
              user.setUsers(dbUser.get().getUsers());
            if(user.getEmail() == null)
              user.setEmail(dbUser.get().getEmail());
            if(user.getPassword() == null)
              user.setPassword(dbUser.get().getPassword());
            if(user.getUserName() == null)
              user.setUserName(dbUser.get().getUserName());
          }
        }
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

    public Set<Project> getAllProjects(Long userId){
        return userRepository.findById(userId).map(User::getProjects).orElse(null);

    }

    public Set<User> getAllUsers() {
        Set<User> users = new HashSet<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }
}
