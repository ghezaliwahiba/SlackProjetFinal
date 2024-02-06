package com.example.demo.back.controller;
import com.example.demo.back.model.Message;
import com.example.demo.back.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@RestController
public class MessageContoller {
@Autowired
    MessageService messageService;
    @GetMapping("messages")
    public List<Message> findAll(){
        return messageService.getAll();
    }

/*
    @GetMapping("messages")
    public List<MessageDTO> findAll(){
        List<MessageDTO> dtos = new ArrayList<>();
        for(Message entity :messageService.getAll())
            dtos.add(MessageMapper.convertToDTO(entity));
        return dtos;
    }
 */
    @PostMapping("messages")
    public void addMessage(@RequestBody Message message) {
            messageService.add(message);
            LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
        }

    /*
    @PostMapping("messages")
    public void addMessage(@RequestBody MessageDTO message) {
        messageService.add(message);
    }

     */

    @GetMapping("messages/{id}")
    public ResponseEntity<Message> findById(@PathVariable("id") Integer id){
        Optional<Message> opt = messageService.findById(id);
        if(opt.isEmpty())
            return ResponseEntity.notFound().build();
        else
            return ResponseEntity.ok(opt.get());
    }

}
