
type Params = { id: string };


export default async function ProductPage(PageProps: { params: Params }) {
  const { id } =  PageProps.params
  return (
    <div>ProductPage - {id}</div>
  )
}