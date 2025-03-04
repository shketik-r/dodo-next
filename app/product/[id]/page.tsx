
type Params = Promise<{ id: string }>


export default async function ProductPage( props : { params:  Params }) {
  const params = await props.params
  const id = params.id
  return (
    <div>ProductPage - {id}</div>
  )
}