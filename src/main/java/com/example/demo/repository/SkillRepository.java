package com.example.demo.repository;

import com.example.demo.entity.Skill;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface SkillRepository extends CrudRepository<Skill, Long> {
    Optional<Skill> findSkillBySkillName(String skillName);
    Optional<Skill> findSkillBySkillCategory(String skillCategory);
}
