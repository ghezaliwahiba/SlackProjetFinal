package com.example.demo;

import com.example.demo.back.DAO.ChannelRepository;
import com.example.demo.back.DAO.MessageRepository;
import com.example.demo.back.DAO.UserRepository;
import com.example.demo.back.model.Channel;
import com.example.demo.back.model.Message;
import com.example.demo.back.model.User;
import com.example.demo.back.service.MessageService;
import org.aspectj.bridge.MessageUtil;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;

@SpringBootTest
class DemoApplicationTests {


	@Autowired
	MessageRepository messageRepository;
	@Autowired
	UserRepository userRepository;
	@Autowired
	ChannelRepository channelRepository;

	@Test
	void addMessageTest() {

		Message message = new Message("Bonjour");
		messageRepository.save(message);
	}

	@Test
	void addUserTest() {
		User user= new User("lili");
		userRepository.save(user);
	}
	@Test
	void addChannelTest() {
	Channel channel = new Channel("Pojet");
		channelRepository.save(channel);
	}

	@Test
	void addChanneUserTest() {

	    Channel channel=new Channel("ProjetSlack");
        channelRepository.save(channel);

		User user = new User("Massilya");
		userRepository.save(user);

		Message message = new Message("Aujiourd'hui notre 1er jour pour démarrer le projet");
		message.setUser(user);
		message.setChannel(channel);
		messageRepository.save(message);
	}





}
