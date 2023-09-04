package com.chat.controllers;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.chat.models.Message;


@RestController
public class MessageController {
	
			
	@MessageMapping("/message")
	@SendTo("/topic/return-to")
	public Message getContent(@RequestBody Message message)
	{
		try {
//				Processing
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return message;
	}
	
	
	
	
}