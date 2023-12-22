import getShabads from "@/actions/getShabads";
import Header from "@/components/Header";

export const revalidate = 0;

export default async function Home() {
  const shabads = await getShabads();

  return (    
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Welcome back</h1>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h2 className="text-white text-2xl font-semibold">Newest Shabads</h2>
        </div>
        <PageContent />
      </div>
    </div>
  )
}
