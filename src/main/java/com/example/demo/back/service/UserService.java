package com.example.demo.back.service;

import com.example.demo.back.DAO.UserRepository;
import com.example.demo.back.model.Channel;
import com.example.demo.back.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void add(User user){
//        Channel channel = new Channel("Par défaut");
//        user.add(channel);
        userRepository.save(user);
    }

    public List<User> getAll(){
        return userRepository.findAll();
    }

    public Optional<User> findById(Integer id){
        return userRepository.findById(id);
    }

    public void update(User user){
        userRepository.save(user);
    }

    public void delete(Integer id){
        userRepository.deleteById(id);
    }
}
