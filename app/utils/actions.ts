"use server";

import { isSameDay } from "date-fns";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { pickRandomSampleResponses } from "./data";
import { db } from "./db";

async function chatResponse(chatId: string) {
  try {
    const data = await db.chat.update({
      where: {
        id: chatId,
      },
      include: {
        chatMessages: true,
      },
      data: {
        chatMessages: {
          create: {
            response: pickRandomSampleResponses().content,
            userName: "AI",
          },
        },
      },
    });
    revalidatePath("/", "layout");

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteChatWithId(chatId: string) {
  console.log(chatId);
  try {
    const data = await db.chat.delete({
      where: {
        id: chatId,
      },
    });
    revalidatePath("/", "layout");

    console.log({ data }, "deleted");
  } catch (error) {
    console.error(error);
  } finally {
    redirect("/");
  }
}

export async function sendChat(
  message: { title: string; userName: string },
  chatId?: string,
) {
  const { title, userName } = message;

  if (!chatId) {
    const data = await db.chat.create({
      data: {
        title,
        chatMessages: {
          create: {
            response: title,
            userName: userName, // username
          },
        },
      },
      include: {
        chatMessages: true,
      },
    });

    const { id } = data;

    chatResponse(id);

    redirect(`/${id}`);
  } else {
    try {
      const data = await db.chat.update({
        where: {
          id: chatId,
        },
        data: {
          chatMessages: {
            create: {
              response: title,
              userName: userName, // username
            },
          },
        },
        include: {
          chatMessages: true,
        },
      });
      chatResponse(chatId);

      // const { id } = data;
      revalidatePath(`/${chatId}`, "layout");

      revalidatePath(`/${chatId}`);

      return { success: true, chatId };
    } catch (error) {
      console.error(error);
    }
  }
}

export async function getAllChatsFilterByDate() {
  const data = await db.chat.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  const chatHistory = data.reduce(
    (acc, chat) => {
      const date = chat.createdAt;
      const dateKey = isSameDay(date, new Date()) ? "Today" : "Previous 7 days";
      if (!acc[dateKey]) {
        acc[dateKey] = {
          id: dateKey,
          date: dateKey,
          dateHistory: [],
        };
      }
      acc[dateKey].dateHistory.push({
        name: chat.title,
        href: chat.id,
        initial: chat.title?.charAt(0).toUpperCase(),
        current: false,
      });
      return acc;
    },
    {} as Record<string, any>,
  );
  return Object.values(chatHistory);
}
