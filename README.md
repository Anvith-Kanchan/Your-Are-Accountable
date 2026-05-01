# Your Are Accountable: Mistake Tracker & Learning Journal

An intelligent, AI-powered learning journal designed to help you document your errors, identify cognitive blind spots, and accelerate your growth. Never repeat the same mistake twice.

## 🚀 Features

- **Quick Capture**: Log mistakes in seconds with structured entries (title, context, solution, and tags).
- **Pattern Detection**: Uses AI to analyze your entries and surface recurring blind spots you might miss.
- **Apple-Inspired UI**: A clean, premium dark mode interface with frosted glass effects, smooth animations, and zero distractions.
- **Persistent Storage**: All entries are securely saved to a MySQL database using Prisma.

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Next.js API Routes (Serverless)
- **Database**: MySQL, Prisma ORM
- **AI Integration**: Groq SDK (running Meta's `llama-3.1-8b-instant` model for lightning-fast insights)

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone git@github.com:Anvith-Kanchan/Your-Are-Accountable.git
cd Your-Are-Accountable
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root directory and add the following keys:

```env
# Database connection string (Update with your MySQL credentials)
DATABASE_URL="mysql://root:your_password@localhost:3306/mistake_tracker"

# Groq API Key for AI Insights (Get one free at https://console.groq.com/keys)
GROQ_API_KEY="gsk_your_api_key_here"
```

### 4. Set up the Database
Run the following Prisma commands to push the schema to your MySQL database and generate the client:
```bash
npx prisma db push
npx prisma generate
```

### 5. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can view and manage your database visually by running `npx prisma studio` in a separate terminal.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.
