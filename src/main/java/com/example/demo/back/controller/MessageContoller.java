package com.example.demo.back.controller;
import com.example.demo.back.model.Channel;
import com.example.demo.back.model.Message;
import com.example.demo.back.model.User;
import com.example.demo.back.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class MessageContoller {
    @Autowired
    MessageService messageService;
    @GetMapping("messages")
    public List<Message> findAll(){
        return messageService.getAll();
    }

    @PostMapping("messages")
    public ResponseEntity<String> login(@RequestBody Message message){
        if(message.getContent().isEmpty())
            return ResponseEntity
                    .badRequest()
                    .build();
        else {
            messageService.add(message);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }
    }
    @GetMapping("messages/{id}")
    public ResponseEntity<Message> findById(@PathVariable("id") Integer id){
        Optional<Message> opt = messageService.findById(id);
        if(opt.isEmpty())
            return ResponseEntity.notFound().build();
        else
            return ResponseEntity.ok(opt.get());
    }
    @DeleteMapping("messages/{id}")
    public ResponseEntity<Message> delete(@PathVariable("id") Integer id,
                                          @RequestBody Message message){
        Optional<Message> opt = messageService.findById(id);
        if (opt.isEmpty()){
            return ResponseEntity
                    .notFound()
                    .build();
        }    if (message.getId()!=id){

            return ResponseEntity
                    .notFound()
                    .build();
        }else
            messageService.delete(message.getId());
        return ResponseEntity.ok().build();
    }
    @PutMapping("messages/{id}")
    public ResponseEntity<Message> update(@PathVariable("id") Integer id,
                                          @RequestBody Message message){
       if (message.getId()!=id){
           return ResponseEntity
                   .notFound()
                   .build();
       }else
        messageService.update(message);
        return ResponseEntity.ok().build();
    }


/*
    @DeleteMapping("messages/{id}")
    public void delete(@PathVariable("id") Integer id) {
        messageService.delete(id);
    }
*/


     /*
    @PostMapping("messages")
    public void addMessage(@RequestBody MessageDTO message) {
        messageService.add(message);
    }
     */

 /*
        @GetMapping("messages")
        public List<MessageDTO> findAll(){
            List<MessageDTO> dtos = new ArrayList<>();
            for(Message entity :messageService.getAll())
                dtos.add(MessageMapper.convertToDTO(entity));
            return dtos;
        }
     */
    /*
    @PostMapping("messages")
    public void addMessage(@RequestBody Message message) {
        messageService.add(message.getContent(), message);
    }
     */
    /*
    @PatchMapping("messages/{id}")
    public ResponseEntity<?> update(@RequestBody Message message, @PathVariable("id") Integer id) {
        if (id.equals(message.getId())) {
            Optional<Message> optional = messageService.findById(id);
            if (optional.isEmpty()) {
                return ResponseEntity.badRequest().build();
            }
            if (message.getContent().isBlank()) {
                return ResponseEntity.badRequest().build();
            }
            messageService.add(message);
            return ResponseEntity.ok("message modifié");
        }
        return ResponseEntity.badRequest().build();
    }

     */

}