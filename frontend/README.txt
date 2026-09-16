# CampusCart – Campus Product Management System

## 📌 Project Overview

CampusCart is a full-stack web application developed for managing products in a campus environment.

The application allows users to add, view, search, update, and delete product information through a simple and user-friendly web interface.

The project demonstrates CRUD operations using HTML, CSS, JavaScript, Java Spring Boot, Spring Data JPA, and MySQL.

---

## 🎯 Objectives

- To develop a campus product management system.
- To implement complete CRUD operations.
- To connect a frontend application with a Spring Boot REST API.
- To store product information in a MySQL database.
- To understand full-stack web application development.
- To gain practical experience with Git and GitHub.

---

## 🛠️ Technologies Used

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Java
- Spring Boot
- Spring Data JPA
- REST API

### Database
- MySQL

### Tools
- Visual Studio Code
- MySQL Workbench
- Maven
- Git
- GitHub

---

## ✨ Features

- Add new products
- View available products
- Search products
- Edit existing products
- Delete products
- Display product count
- Store product information in MySQL
- REST API communication
- Simple and user-friendly interface

---

## 🔄 CRUD Operations

| Operation | HTTP Method | API Endpoint |
|-----------|-------------|--------------|
| Create Product | POST | `/products` |
| Read Products | GET | `/products` |
| Update Product | PUT | `/products/{id}` |
| Delete Product | DELETE | `/products/{id}` |

---

## 🏗️ System Architecture

```text
              User
                |
                ↓
        Frontend Application
       HTML + CSS + JavaScript
                |
                ↓
             REST API
                |
                ↓
        Spring Boot Backend
                |
                ↓
        Spring Data JPA
                |
                ↓
          MySQL Database