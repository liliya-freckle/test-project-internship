//sluck

import { fetchUserById } from "@/api/users";

interface UserPageProps {
    params: { id: string };
}

export default async function UserPage({ params }: UserPageProps) {
    const user = await fetchUserById(params.id);

    return (
        <div className="p-6 space-y-2">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Адрес:</strong> {user.address.street}, {user.address.city}</p>
            <p><strong>Телефон:</strong> {user.phone}</p>
            <p><strong>Вебсайт:</strong> {user.website}</p>
        <p><strong>Компания:</strong> {user.company.name}</p>
        </div>
    );
}