package com.example.demo.repository;

import com.example.demo.entity.Skill;
import com.example.demo.entity.SkillCategory;
import com.example.demo.entity.SkillName;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface SkillRepository extends CrudRepository<Skill, Long> {
    Optional<Skill> findSkillBySkillName(SkillName skillName);
    Optional<Skill> findSkillBySkillCategory(SkillCategory skillCategory);
}
