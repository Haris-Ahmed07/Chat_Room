package com.chat.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

	@GetMapping("/chat-room")
	public String chatRoom()
	{
		return "chat-room";
	}
	
}
