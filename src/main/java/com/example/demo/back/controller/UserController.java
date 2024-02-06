package com.example.demo.back.controller;

import com.example.demo.back.model.User;
import com.example.demo.back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    // POST (Created)
    @PostMapping("users")
    @ResponseStatus(HttpStatus.CREATED)
    public void addUser(@RequestBody User user){
        userService.add(user);
    }

    // GET (All)
    @GetMapping("users")
    public List<User> findAll(){
        return userService.getAll();
    }

    // GET (id)
    @GetMapping("users/{id}")
    public ResponseEntity<User> findById(@PathVariable("id") Integer id){
        Optional<User> opt = userService.findById(id);
        if(opt.isEmpty()){
            return ResponseEntity
                    .notFound()
                    .build();
        } else {
            User user = opt.get();
            return ResponseEntity.ok(user);
        }
    }

    // PUT (Update)
    @PutMapping("users/{id}")
    public ResponseEntity<User> update(@PathVariable("id") Integer id,
                                       @RequestBody User user){
        if(!user.getId().equals(id)){
            return ResponseEntity
                    .notFound()
                    .build();
        } else {
            userService.update(user);
            return ResponseEntity.ok().build();
        }
    }

    // DELETE
    @DeleteMapping("users/{id}")
    public ResponseEntity<User> delete(@PathVariable("id") Integer id){
        if(userService.findById(id).isPresent()){
            userService.delete(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
