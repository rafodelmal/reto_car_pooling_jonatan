package com.ias.backend.infrastucture.controllers;

import com.ias.backend.domain.Reserva;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.ias.backend.repository.ReservaRepository;

@RestController
public class ReservaController {
    
    private ReservaRepository reservaRepository;

    public ReservaController(ReservaRepository _reservaRepository){
        this.reservaRepository = _reservaRepository;
    }


    @GetMapping
    @RequestMapping("/leareserba")
    public ResponseEntity<Iterable<Reserva>> readReserva(@RequestParam(name="user") String user){
        return new ResponseEntity<Iterable<Reserva>>(reservaRepository.findByPrestadorUsername(user), HttpStatus.ACCEPTED);
    }

/*
 @GetMapping
    @RequestMapping("/leareserba")
    public ResponseEntity<Iterable<Reserva>> readReserva(){
        return new ResponseEntity<Iterable<Reserva>>(reservaRepository.findAll(), HttpStatus.ACCEPTED);
    }

*/

}
