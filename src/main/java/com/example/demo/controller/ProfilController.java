package com.example.demo.controller;


import com.example.demo.entity.Profil;
import com.example.demo.service.ProfilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("profil")

public class ProfilController {
    @Autowired
    private ProfilService profilService ;

    

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public  @ResponseBody
    Profil get(@RequestParam Long userId) {
        return profilService.getUserProfile(userId);
    }


}
