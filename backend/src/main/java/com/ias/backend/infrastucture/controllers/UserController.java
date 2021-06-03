package com.ias.backend.infrastucture.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ias.backend.domain.User;
import com.ias.backend.repository.UserRepository;

@RestController
public class UserController {

    private UserRepository userRepository;

    public UserController(UserRepository _userRepository){
        this.userRepository = _userRepository;
    }
    @PostMapping
    @RequestMapping("/create")
    public ResponseEntity<User> createUser(@RequestBody User user){
        return new ResponseEntity<User>(userRepository.save(user), HttpStatus.CREATED);
    }

    @GetMapping
    @RequestMapping("/read")
    public ResponseEntity<Iterable<User>> readUser(){
        return new ResponseEntity<Iterable<User>>(userRepository.findAll(), HttpStatus.ACCEPTED);
    }

    @PutMapping
    @RequestMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        return new ResponseEntity<User>(userRepository.save(user), HttpStatus.NO_CONTENT);
    }




/*


    @GetMapping
    @RequestMapping("/login")
    public ResponseEntity<User> getUserByUsernameAndPasword(String username,String password) {
        
        return new ResponseEntity<User>(userRepository.findByUsernameAndPassword(username,password), HttpStatus.ACCEPTED);

*/
    @GetMapping
    @RequestMapping("/login")
    public ResponseEntity<User> getUserByUsernameAndPaswordAndRol(String username,String password,String rol) {
        
        return new ResponseEntity<User>(userRepository.findByUsernameAndPasswordAndRol(username,password,rol), HttpStatus.ACCEPTED);
    }

  
    /*
    
    
    @GetMapping
    @RequestMapping("/readr")
    public ResponseEntity<Iterable<User>>getUserByPhone(String phone){

        return new ResponseEntity<Iterable<User>>(userRepository.findByPhone(phone), HttpStatus.ACCEPTED);
    }

    */

    @GetMapping
    @RequestMapping("/readr")
    public ResponseEntity<Iterable<User>>getUserByPhone(String phone){

        return new ResponseEntity<Iterable<User>>(userRepository.findByPhone(phone), HttpStatus.ACCEPTED);
    }




}

