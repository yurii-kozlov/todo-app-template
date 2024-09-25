import { Box } from "@chakra-ui/react";
import { TopBar } from "@/components/TopBar";
import { TodoList } from "@/components/TodoList";
import { TodoAdd } from "@/components/TodoAdd";

export default function Home() {
  return (
    <div>
      <main>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TopBar />
        <TodoList />
        <TodoAdd />
      </Box>
      </main>
    </div>
  );
}
