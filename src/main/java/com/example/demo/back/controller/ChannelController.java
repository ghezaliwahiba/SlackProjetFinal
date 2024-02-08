package com.example.demo.back.controller;

import com.example.demo.back.model.Channel;
import com.example.demo.back.model.Message;
import com.example.demo.back.model.User;
import com.example.demo.back.service.ChannelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@RestController
public class ChannelController {
    @Autowired
    ChannelService channelService;
    @GetMapping("channels")
    public List<Channel> findAll(){
        return channelService.findAll();
    }

    @PostMapping("channels")
    public ResponseEntity<String> login(@RequestBody Channel channel){
        if(channel.getChannelName().isEmpty())
            return ResponseEntity
                    .badRequest()
                    .body("Le canal doit avoir un nom");
        else {
            channelService.add(channel);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }
    }

    /*
    @PostMapping("channels")
    public void addChannel(@RequestBody Channel channel) {
        channelService.add(channel);

    }

     */

    @GetMapping("channels/{id}")
    public ResponseEntity<Channel> findById(@PathVariable("id") Integer id){
        Optional<Channel> opt = channelService.findById(id);
        if(opt.isEmpty())
            return ResponseEntity.notFound().build();
        else
            return ResponseEntity.ok(opt.get());
    }

@PutMapping("channels/{id}")
public ResponseEntity<Channel> update(@PathVariable("id") Integer id,
                                   @RequestBody Channel channel){
    if(!channel.getId().equals(id)){
        return ResponseEntity
                .notFound()
                .build();
    } else {
        channelService.update(channel);
        return ResponseEntity.ok().build();
    }
}
}
