package com.example.demo;

import com.example.demo.entity.Skill;
import com.example.demo.repository.SkillRepository;
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
  public CommandLineRunner demo(SkillRepository repository) {
    return (args) -> {
      // save a couple of customers
      repository.save(new Skill("C++", "Programming",10));
      repository.save(new Skill("Java", "Programming",9));
      repository.save(new Skill("ImageDev", "Photoshop",6));
    };
  }
}
