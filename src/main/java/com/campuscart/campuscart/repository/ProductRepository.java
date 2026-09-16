package com.campuscart.campuscart.repository;

import com.campuscart.campuscart.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}