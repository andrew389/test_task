# News Letter

This file contains information about the service and instructions for starting this service

## Why do you need this service?
With the help of this service, you can view a list of posts, each post is clickable, you can click on the "Learn more" button and see detailed information about the post

## Installation

Before you begin, make sure you have the following programs installed on your computer:

```bash
docker --version
```

If after running this command, you were shown the docker version, then go to the next step, else follow these steps:

- Docker: [Docker Installation Guide](https://docs.docker.com/get-docker/)
- Docker Compose: [Docker Compose Installation Guide](https://docs.docker.com/compose/install/)

### Steps

1. Copy the project repository:

    ```bash
    git clone https://github.com/andrew389/test_task.git
    ```

2. Go to the project directory:

    ```bash
    cd test_task
    ```

3. Start containers using Docker Compose:

    ```bash
    docker-compose up -d
    ```

_The `-d` option runs containers in the background._

4. After successful launch, you can access your project at `http://localhost:4200` in your web browser.

### Stopping the project

To stop the project, run the following command:

```bash
docker-compose down
```
