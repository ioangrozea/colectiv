package com.example.demo.controller;

import com.example.demo.entity.Project;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@Controller
@RequestMapping("user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/all")
    @ResponseStatus(HttpStatus.OK)
    public  @ResponseBody Set<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/allProjects/{userId}")
    @ResponseStatus(HttpStatus.OK)
    public  @ResponseBody Set<Project> getAllProjects(@PathVariable(value="userId") Long id) {
        return userService.getAllProjects(id);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public  @ResponseBody User getUser(@RequestParam Long userId) {
        return userService.getUser(userId);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void addUser(@RequestBody User user){
        userService.addUser(user);
    }

}
