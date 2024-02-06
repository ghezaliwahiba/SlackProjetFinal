package com.example.demo.back.service;

import com.example.demo.back.DAO.ChannelRepository;
import com.example.demo.back.model.Channel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChannelService {
    @Autowired
    private ChannelRepository channelRepository;
    public void add( Channel c){
        channelRepository.save(c);
    }

    public List<Channel> getAll(){
        return channelRepository.findAll();
    }

    public Optional<Channel> findById(Integer id){
        return channelRepository.findById(id);
    }

    public void delete(Integer id) {
        channelRepository.deleteById(id);
    }

    public void update(Channel channel) {
        channelRepository.save(channel);
    }

}
