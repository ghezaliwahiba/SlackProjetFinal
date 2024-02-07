package com.example.demo.back.controller;

import com.example.demo.back.model.Channel;
import com.example.demo.back.model.Message;
import com.example.demo.back.service.ChannelService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public void addChannel(@RequestBody Channel channel) {
        channelService.add(channel);

    }

    @GetMapping("channels/{id}")
    public ResponseEntity<Channel> findById(@PathVariable("id") Integer id){
        Optional<Channel> opt = channelService.findById(id);
        if(opt.isEmpty())
            return ResponseEntity.notFound().build();
        else
            return ResponseEntity.ok(opt.get());
    }
//    @PutMapping("channels/{id}")
//    public Optional<Channel> update (@PathVariable("id") Integer id){
//        Optional<Channel> channel = channelService.findById(id);
//        if(channel.isEmpty())
//            return ResponseEntity.notFound().build();
//        else
//        channelService.update(channel);
//    }
}
