package com.ias.backend.repository;

import com.ias.backend.domain.Reserva;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ReservaRepository extends CrudRepository<Reserva,Integer> {

public Iterable<Reserva> findByPrestadorUsername(String username);

    
}
