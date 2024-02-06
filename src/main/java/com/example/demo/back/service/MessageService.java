package com.example.demo.back.service;
import com.example.demo.back.DAO.MessageRepository;
import com.example.demo.back.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class MessageService {
    @Autowired
    MessageRepository messageRepository;

    public void add(String content, Message message) {
        messageRepository.save(message);
    }

    /*
    public void add(MessageDTO messagedto){
        Message message= MessageMapper.convertToMessage(messagedto);
        messageRepository.save(message);
    }
     */
    public List<Message> getAll() {
        return messageRepository.findAll();
    }

    public Optional<Message> findById(Integer id) {
        return messageRepository.findById(id);
    }


    public void delete(Integer id){
        messageRepository.deleteById(id);
    }
    public void update(Integer id, Message message){
        messageRepository.save(message);
    }



}