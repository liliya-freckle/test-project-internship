import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { fetchUsers } from "@/api/users";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default async function HomePage() {
  const users = await fetchUsers();

  return (
    <div>
      <Header/>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <Card key={user.id} className="p-4">
            <h2 className="text-lg font-bold">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">{user.company.name}</p>
            <Link href={`/user/${user.id}`} className="text-blue-500 underline mt-2 block">
            Подробнее
            </Link>
          </Card>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
