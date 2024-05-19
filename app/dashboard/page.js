import Assignment from "../components/Assignment";
import Notification from "../components/Notification";
import Quiz from "../components/Quiz";

export default function DashboardPage() {
  return (
    <>
      <Assignment />
      <Notification />
      <Quiz />
    </>
  );
}
