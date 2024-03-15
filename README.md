## About

This is a Frontend for a Chat Interface

## Here is a link to the deployed version of the web application

[cnat-ui-task](https://insert-link-once-deployed)

## Functionality

- Chat Input that allows users to send messages.
- Chat Interface that allows users to view messages.
- Chat persists since the messages are stored in a database.
- Sidebar that allows users to view all chats.
- Chats are grouped by date. That is, all chats for a particular date are grouped together eg (Today, Previous 7 days etc)
- Users can delete chats.
- Users can react to chats with emojis.
- Users can view chat metadata such as source.
- Users can view past chats.
- Users can chat in past chats.

### Design Decisions

## Tech Stack

1. **Next.js** - This is a full-fledged framework for reactjs. With batteries-included in terms of built-in features such as routing, data-fetching and image optimization. This came in handy as this application had dynamic routes for the chat history sections to render to the ui. The in-built backend api allowed for seemless intergration of the backend service with the UI.
2. **Tailwind CSS** - This is a utility-first css framework i used to style my markup. The choice was informed by a ton of advantages that are included. There's no need of creating separate files for styling-this saved me time! Tailwind also takes the mobile-first approach, and throwing afew utility classes handles components' responsiveness.
3. **Typescript** - Offered type safety by preventing errors at runtime caused by unexpected types.
4. **Prisma** - This is an ORM that I used to interact with the database. It allowed me to define the database schema in a typesafe way. It also allowed me to interact with the database using typescript.
5. **Postgres** - This is the database I used to store the chat messages since its known for its reliability and performance.
6. **Context API** - This is a react feature that allowed me to manage the app-wide state of the application in a centralized way. It allowed me to pass data through the component tree without having to pass props down manually at every level.

## Implementation Decisions

- **Routing**: I moved to use the NextJS folder structure for routing since it is a very convenient and powerful tool. With the provision of next/navigaition's routing, I was able to send each chat details via the params and decoded the params allowing for fetching of the data in the individual chat's page.

## Continuous Integration and Deployment (CI/CD)

1. Github(VSC) -Github offererd a great level of security for my app, granular access and code documentation. It also intergrated well with my choice of deployment(vercel). It allowed to automatically trigger deployment from git pushes / pull request merges

### Project Structure

```
├── README.md
├── app
│   ├── [chaturl]
│   │   └── page.tsx
│   ├── api
│   │   └── chat
│   │       └── route.ts
│   ├── components
│   │   ├── chat
│   │   │   ├── chat-ai-metadat.tsx
│   │   │   ├── chat-input.tsx
│   │   │   ├── chat-reaction.tsx
│   │   │   ├── chat.tsx
│   │   │   ├── custom-spinner.tsx
│   │   │   └── message.tsx
│   │   ├── chat-history.tsx
│   │   ├── delete-chat-dialogue.tsx
│   │   ├── new-chat-initializer.tsx
│   │   ├── placeholder.tsx
│   │   ├── sidebar
│   │   │   ├── sidebar.tsx
│   │   │   └── user-profile.tsx
│   │   └── skeleton.tsx
│   ├── context
│   │   └── chatContext.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── utils
│       ├── actions.ts
│       ├── data.ts
│       ├── db.ts
│       └── utils.ts
├── chat.d.ts
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── prettier.config.js
├── prisma
│   ├── migrations
│   │   ├── 20240315145650_initialsetup
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── public
│   ├── next.svg
│   └── vercel.svg
├── tailwind.config.ts
├── tsconfig.json
└── tsconfig.tsbuildinfo
```

### Challenges

I encountered a few challenges while working on this project. The major ones include:

- **Simulating AI chat Response**: I had to simulate the AI chat response by creating a function that would generate a response after a user sends a message. This was a bit challenging since I had to ensure that the response was relevant to the user's message, hence sometimes a bit buggy. With more time, I would have improved this feature and even used a real AI chatbot.

If you ran into this issue, how did you resolve it? - Please reload the page and the chat will sync.

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:hinn254/chat-task.git
   ```

2. Install dependencies:
   `npm install`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
