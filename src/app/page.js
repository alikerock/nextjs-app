import Image from 'next/image'

const Home = ()=>{
  return (
    <>
      <h2>Welcome</h2>
      <p>Hello Web!</p>
      <Image
        src="/home_icon.png"
        width={50}
        height={50}
        alt="Home icon"
      />
    </>
   );
}
export default Home