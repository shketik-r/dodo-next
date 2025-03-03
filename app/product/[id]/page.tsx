
type Params = Promise<{ id: string }>


export default async function ProductPage(PageProps: { params: Params }) {
  const { id } = await PageProps.params
  return (
    <div>ProductPage - {id}</div>
  )
}