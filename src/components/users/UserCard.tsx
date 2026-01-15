export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}



interface UserCardProps {
  user: User;
}
export function UserCard({ user }: UserCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg">
      <h2 className="mb-2 text-xl font-bold text-gray-800">{user.name}</h2>
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-start">
          <span className="mr-2">📧</span>
          <span className="break-all">{user.email}</span>
        </div>
        <div className="flex items-start">
          <span className="mr-2">📞</span>
          <span>{user.phone}</span>
        </div>
        <div className="flex items-start">
          <span className="mr-2">🌐</span>
          <span className="break-all">{user.website}</span>
        </div>
        <div className="flex items-start">
          <span className="mr-2">🏙️</span>
          <span>{user.address.city}</span>
        </div>
        <div className="flex items-start">
          <span className="mr-2">🏢</span>
          <span>{user.company.name}</span>
        </div>
      </div>
    </div>
  );
}
