export default function Home() {
  let name = 'park'
  return (
    <div>
      <h4 className="title" style={{color:'red', fontSize:'30px'}}>상품목록</h4>
      <p className="title-sub">{name}</p>
    </div>
  )
}