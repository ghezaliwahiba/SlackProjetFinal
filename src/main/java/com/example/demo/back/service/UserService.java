package com.example.demo.back.service;

import com.example.demo.back.DAO.UserRepository;
import com.example.demo.back.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository users;

    public void add(User user){
        users.save(user);
    }

    public List<User> getAll(){
        return users.findAll();
    }

    public void findById(Integer id){
        users.findById(id);
    }

    public void update(User user){
        users.save(user);
    }

    public void delete(Integer id){
        users.deleteById(id);
    }
}
