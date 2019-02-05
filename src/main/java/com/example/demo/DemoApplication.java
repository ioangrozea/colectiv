package com.example.demo;

import com.example.demo.entity.Skill;
import com.example.demo.entity.User;
import com.example.demo.repository.SkillRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {

  public static void main(String[] args) {
    SpringApplication.run(DemoApplication.class, args);
  }

  @Bean
  public CommandLineRunner demo(UserRepository repository) {
    return (args) -> {
      User userr = new User("adfasdf", "adsfasdf", "adfasdfasdf");
      repository.save(userr);
    };
  }
}
