package com.example.demo.back.controller;

import com.example.demo.back.model.Channel;
import com.example.demo.back.model.Message;
import com.example.demo.back.model.User;
import com.example.demo.back.service.ChannelService;
import jakarta.annotation.PostConstruct;
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
    public List<Channel> findAll() {
        return channelService.findAll();
    }

    @PostMapping("channels")
    public ResponseEntity<Channel> login(@RequestBody Channel channel) {
        if (channel.getChannelName().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }/*
        // Vérifier si le nom du canal à ajouter est le même que celui du canal général
        if(channelService.equals(channel.getChannelName())) {
            // Si le canal général existe déjà, retourner une réponse BadRequest
            return ResponseEntity.badRequest().build();
        }
        */ else {
            channelService.add(channel);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }
    }

    @GetMapping("channels/{id}")
    public ResponseEntity<Channel> findById(@PathVariable("id") Integer id) {
        Optional<Channel> opt = channelService.findById(id);
        if (opt.isEmpty())
            return ResponseEntity.notFound().build();
        else
            return ResponseEntity.ok(opt.get());
    }

    @PutMapping("channels/{id}")
    public ResponseEntity<Channel> update(@PathVariable("id") Integer id,
                                          @RequestBody Channel channel) {
        if (!channel.getId().equals(id)) {
            return ResponseEntity
                    .notFound()
                    .build();
        }
        //15 c'est l'id du canal général sur ma base donnée cette id c'est on fonction de votre le canal général
        if (id.equals(15)) {
            return ResponseEntity.badRequest().build();
        } else {
            channelService.update(channel);
            return ResponseEntity.ok().build();
        }
    }

    @DeleteMapping("channels/{id}")
    public ResponseEntity<Message> delete(@PathVariable("id") Integer id,
                                          @RequestBody Channel channel) {
        Optional<Channel> opt = channelService.findById(id);
        if (opt.isEmpty()) {
            return ResponseEntity
                    .notFound()
                    .build();
        }
        if (channel.getId() != id) {

            return ResponseEntity
                    .notFound()
                    .build();
        }

        Channel existingChannel = opt.get();
        if (existingChannel.getChannelName().equals("Géneral")) {

            return ResponseEntity.badRequest().build();
        } else
            channelService.delete(channel.getId());
        return ResponseEntity.ok().build();
    }
}
