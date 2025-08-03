Order Queue System
This project is a simple in-memory order queue system implemented in JavaScript. It supports adding regular orders to the end of the queue and priority orders to the front, processing them on a first-in, first-out basis. This is a solution for Task 2 of the Thrifty AI Coding Assessment.

Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for testing purposes.

Prerequisites
Make sure you have Node.js installed on your system. You can download it from nodejs.org.

1. Clone the Repository
First, clone the repository to your local machine using the following git command:

Bash

git clone https://github.com/himanshusingh9554/order-queue.git
2. Navigate to the Directory
Change your current directory to the newly cloned project folder:

Bash

cd order-queue
How to Run
The project includes a test file (OrderQueue.test.js) to demonstrate the functionality of the OrderQueue class.

To execute the test script, run the following command in your terminal:

Bash

node OrderQueue.test.js
Expected Output
After running the command above, you will see the following output in your console, which demonstrates the correct behavior of the queue system:

Shell

Initial Queue: []
After adding A001, A002: [ 'A001', 'A002' ]
After adding VIP01 (priority): [ 'VIP01', 'A001', 'A002' ]
Processed Order: VIP01
Queue after processing: [ 'A001', 'A002' ]
Queue after processing all: []
Processed from empty queue: undefined
