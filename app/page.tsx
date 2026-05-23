const Home = () => {
  return (
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}} className="grid grid-cols-1 gap-4 border border-red-500 min-h-10">
      <div className="bg-blue-200">A</div>
      <div className="bg-green-200">aB</div>
      <div className="bg-green-200">aB</div>
      <div className="bg-green-200">aB</div>
    </div>
  )
}

export default Home
