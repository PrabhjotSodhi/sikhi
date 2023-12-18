import Header from "@/components/Header";

export default function Home() {
  return (
    
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Welcome back</h1>
        </div>
        <div className="mt-2 mb-7 px-6">
          <div className="flex justify-between items-center">
            <h2 className="text-white text-2xl font-semibold">Recently Played</h2>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-white text-2xl font-semibold">Newest songs</h2>
          </div>
        </div>
      </Header>
    </div>
  )
}
