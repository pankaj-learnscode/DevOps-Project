# 🚀 MERN Stack End-to-End DevOps Project on AWS

This repository contains a **real-world, production-style MERN application** deployed on **AWS** using **DevOps best practices**.
It is designed **specifically for students** who want hands-on experience with **Cloud + DevOps + Full Stack** in one integrated project.

---

## 📌 Project Objective

The goal of this project is to help students understand:

* How a **MERN application** is built and structured
* How cloud services are used in **real production environments**
* How **DevOps tools** automate build, test, deployment, and infrastructure
* How monitoring, security, and scalability are handled in AWS

This is **not a demo-only project** — it follows **industry-style architecture**.

---

## 🧩 Tech Stack Used

### 🔹 Application Stack (MERN)

* **MongoDB** – Database
* **Express.js** – Backend framework
* **React.js** – Frontend UI
* **Node.js** – Server runtime

### 🔹 AWS Cloud Services

* **EC2** – Backend & container hosting
* **S3** – Static frontend hosting
* **CloudFront** – CDN for frontend delivery
* **IAM** – Users, roles, and permissions
* **CloudWatch** – Logs, metrics, monitoring
* **SNS** – Alerts & notifications

### 🔹 DevOps & Automation Tools

* **Docker** – Containerization
* **Kubernetes (K8s)** – Container orchestration
* **Jenkins** – CI/CD pipeline
* **Terraform** – Infrastructure as Code (IaC)
* **GitHub** – Source code & version control

---

## 🏗️ High-Level Architecture

1. User accesses the application via **CloudFront CDN**
2. CloudFront serves **React frontend from S3**
3. Frontend sends API requests to **Backend running on EC2 / Kubernetes**
4. Backend communicates with **MongoDB**
5. Application logs & metrics are pushed to **CloudWatch**
6. **SNS** sends alerts on failures or high resource usage
7. **Jenkins** automates build & deployment
8. **Terraform** provisions AWS infrastructure

---

## 📂 Repository Structure

<img width="354" height="483" alt="image" src="https://github.com/user-attachments/assets/2922d89a-eb59-443e-ba90-3c448d719ddf" />


## 🧪 Application Features

* User registration & authentication
* CRUD operations (Create, Read, Update, Delete)
* RESTful API design
* Environment-based configuration
* Secure secrets handling

---

## 🐳 Docker Implementation

* Separate Dockerfiles for **frontend** and **backend**
* Application is packaged as Docker images
* Images are used locally and inside Kubernetes

**Why Docker?**

* Consistent environment
* Easy deployment
* Industry standard for microservices

---

## ☸️ Kubernetes Deployment

* Application deployed using **Pods, Deployments, and Services**
* Enables:

  * Auto-healing
  * Scalability
  * Rolling updates

Kubernetes simulates **real production workloads**.

---

## 🔁 CI/CD Pipeline with Jenkins

### Pipeline Flow:

1. Code pushed to GitHub
2. Jenkins job triggered automatically
3. Application build starts
4. Docker images created
5. Images deployed to Kubernetes
6. Health checks performed

**Result:** Fully automated deployment 🚀

---

## 🏗️ Infrastructure as Code (Terraform)

Terraform is used to provision:

* EC2 instances
* IAM roles & policies
* Security groups
* Networking components

**Benefits:**

* Reusable infrastructure
* Version-controlled cloud setup
* Easy teardown & recreation

---


---

## 🔐 Security Best Practices

* IAM roles with **least privilege access**
* Environment variables for secrets
* No hardcoded credentials
* Secure access to EC2 and services

---

* **AWS / DevOps Engineer roles**
* **Full Stack Developer roles**
* Real-world production environments

---
Final Outputs 
<img width="1366" height="609" alt="image" src="https://github.com/user-attachments/assets/bbda058f-51a9-4bbd-ba89-4e9551a8864f" />

<img width="1366" height="697" alt="image" src="https://github.com/user-attachments/assets/cd7cb22b-f899-4c0f-a688-8a53c37f4e5e" />

<img width="1366" height="615" alt="image" src="https://github.com/user-attachments/assets/7b10c6f9-f42d-4bb4-b1ce-c875728f043f" />

<img width="1364" height="616" alt="image" src="https://github.com/user-attachments/assets/b49cb916-49ea-4892-b11c-66d396fbd4b4" />

<img width="1366" height="511" alt="image" src="https://github.com/user-attachments/assets/b4c968ba-35ce-4c0c-8293-4f32d8409def" />







## ⭐ Final Note

This project is intentionally designed to **connect theory with real-world practice**.
Students are encouraged to **break things, fix them, and experiment**.

If you understand this project end-to-end — you are **industry ready**.

---

**Happy Learning & Building! 🚀**
