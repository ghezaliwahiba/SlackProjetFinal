package com.example.demo.back.DAO;

import com.example.demo.back.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    // empty
}
