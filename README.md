# 🏠 PropFlow - Modern Property Listing Backend System 🚀

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-brightgreen)](https://www.mongodb.com)
[![Redis](https://img.shields.io/badge/Redis-7.0-red)](https://redis.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📹 System Demo Video
<video width="100%" controls>
  <source src="C:\Users\mjsin\Videos\Screen Recordings\Screen Recording 2025-05-27 171109.mp4" type="video/mp4">

</video>

> **Note:** Replace `YOUR_VIDEO_ID` with your actual YouTube video ID

## 🌟 Key Features
- **Full CRUD Operations** for property listings
- **JWT Authentication** with email/password
- **Advanced Search** with 10+ filterable attributes
- **Redis Caching** for high-performance queries
- **Favorites System** with user-specific collections
- **Property Recommendations** between users
- **Geospatial Queries** (radius-based search)

## 🛠 Tech Stack
| Component       | Technology |
|----------------|------------|
| Backend        | Node.js + TypeScript |
| Database       | MongoDB Atlas |
| Cache          | Redis |
| API Style      | RESTful |
| Deployment     | Docker + Render |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB 7.0+
- Redis 7.0+
- Docker (optional)

### Installation
bash
# Clone repository
git clone https://github.com/yourusername/propflow.git
cd propflow

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
