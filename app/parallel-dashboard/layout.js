export default function DashboardLayout({
  children,
  assignments,
  notifications,
  quize,
}) {
  const isLoggedIn = true;
  return (
    <>
      {children}
      <div className="grid gap-6 grid-cols-2 grid-rows-2 p-8">
        {assignments}
        {isLoggedIn && notifications}
        {quize}
      </div>
    </>
  );
}
