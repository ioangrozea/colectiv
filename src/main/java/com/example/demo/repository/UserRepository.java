package com.example.demo.repository;


import com.example.demo.entity.Profil;
import com.example.demo.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
import java.util.Set;

public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User>  findUserByEmail(String email);
    Optional<User>  findUserByUserName(String userName);
}
