export default async function Read({ params }){
  console.log('Read 페이지 작동');
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`);
  const topic = await res.json(); //json->object
  console.log(topic);
  return(
    <>
    <h2>{topic.title}</h2>
    <p>{topic.message}</p>
    </>
  )
}