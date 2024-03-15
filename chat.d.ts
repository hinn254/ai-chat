interface Message {
  title: string;
  createdAt: Date;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
}

type ExpectedMessage = {
  id: string;
  content: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
};

interface HistoryType {
  id: number;
  date: string;
  dateHistory: {
    name: string;
    href: string;
    initial: string;
    current: boolean;
  }[];
}

interface SingleHistoryData {
  name: string;
  href: string;
  initial: string;
  current: boolean;
}
