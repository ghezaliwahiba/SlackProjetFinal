package com.example.demo.back.DAO;

import com.example.demo.back.model.Message;
import com.example.demo.back.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    // empty
}
