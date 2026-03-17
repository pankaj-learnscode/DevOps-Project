resource "aws_instance" "web" {
  ami           = "ami-0cb97fa934f9145f6"
  instance_type = "m7i-flex.large"
}


resource "aws_security_group" "devops_sg" {
  name        = "Pankaj_DevOps"
  description = "Allow SSH, HTTP, App traffic"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "DevOps-SG"
  }
}

resource "aws_instance" "devops_ec2" {
  ami           = "ami-019715e0d74f695be"
  instance_type = "m7i-flex.large"
  key_name      = "real_project"

  vpc_security_group_ids = [aws_security_group.devops_sg.id]

  tags = {
    Name = "Restorautent_Mgmt_Project"
  }
}