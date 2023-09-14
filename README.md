# Node.js LogReader Inito-Project Application Dockerized

This repository contains a Node.js application that logs information and allows you to view and add logs through a web interface. You can easily set up and run this application using Docker.

## Prerequisites

- Docker installed on your system. You can download it [here](https://www.docker.com/get-started).

## Setup and Usage

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/HimanshuRaj98/logreader-inito-project.git
   cd logreader-inito-project

2. Build the Docker image for the application:

   ```bash
   docker build --tag node-docker .

3. Run the Docker container, mapping port 3000 on your local machine to port 3000 inside the container:

   ```bash
   docker run -p 3000:3000 node-docker 
   
4. Once the container is running, you can access the application in your web browser at http://localhost:3000.


## Application Routes

This repository contains a Node.js application with the following routes:

- `/`: View existing logs.
- `/addLogs`: Add new logs.
- `/styleAddLogs.css`: CSS file for the "Add Logs" page.
- `/styleViewLogs.css`: CSS file for the "View Logs" page.
- `/getLogs`: Retrieve and display the logged information.
- `/writeLogs`: Write new logs to the file.

## Adding Logs

To add logs, you can use the `/addLogs` route of the application. Provide the log details in the query parameters:

## Parameters

When adding logs using the `/addLogs` route, you need to provide the following parameters:

- `status`: Log status (e.g., INFO, ERROR).
- `operation`: Operation or event description.
- `message`: Log message content.

Logs will be appended to the file.txt file within the container.

These parameters allow you to specify the details for the logs that you want to add. For example:

**Example:**

```plaintext
http://localhost:3000/addLogs?status=INFO&operation=Login&message=User%20logged%20in
```





