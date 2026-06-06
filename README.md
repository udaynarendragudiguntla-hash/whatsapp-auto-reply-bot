# WhatsApp Auto Reply Bot

## Overview

This project is a simple WhatsApp chatbot built using Node.js and whatsapp-web.js. The bot automatically replies to messages based on predefined keywords and ignores group messages.

This project demonstrates backend fundamentals such as event-driven programming, message handling, and automation.

---

## Features

✅ QR Code Authentication

✅ Automatic Message Replies

✅ Keyword Based Responses

✅ Ignores Group Messages

✅ Handles Invalid Messages Safely

✅ Friendly Auto Reply System

✅ Event Driven Message Handling

---

## Tech Stack

* Node.js
* whatsapp-web.js
* qrcode-terminal

---

## Project Structure

```text
project-folder/
│
├── node_modules/
├── package.json
├── package-lock.json
├── bot.js
├── README.md
└── .gitignore
```

---

## Installation

Clone Repository

```bash
git clone <your-repository-url>
```

Move into project folder

```bash
cd project-folder
```

Install Dependencies

```bash
npm install
```

Install Required Packages

```bash
npm install whatsapp-web.js qrcode-terminal
```

---

## Running The Project

Start the bot:

```bash
node bot.js
```

After running:

1. QR code appears in terminal
2. Open WhatsApp on mobile
3. Go to Linked Devices
4. Scan QR Code
5. Bot becomes active

---

## Supported Responses

| User Message       | Bot Response        |
| ------------------ | ------------------- |
| hello              | Greeting message    |
| how are you        | Friendly reply      |
| what are you doing | Casual conversation |
| good morning       | Morning greeting    |
| good night         | Night greeting      |
| thanks             | Welcome response    |
| bye                | Goodbye message     |
| cool               | Fun response        |

For unknown messages:

```text
Haha I see... tell me more!
```

---

## Example

User:

```text
hello
```

Bot:

```text
Hey! Hows it going?
```

---

## How It Works

* User sends message to WhatsApp
* Bot receives message event
* Message is converted into lowercase
* Bot checks matching keywords
* Appropriate reply is sent automatically

---

## Future Improvements

* Database Integration
* AI Generated Replies
* Admin Controls
* Custom Commands
* Web Dashboard
* Multi User Support

---

## Author

Created as a backend learning project for practicing Node.js, automation, and event-driven programming.
