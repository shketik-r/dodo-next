import type {Metadata} from "next";
type Params = Promise<{ id: string }>


export async function generateMetadata(PageProps: { params: Params }):Promise<Metadata> {
  const { id } = await PageProps.params

  return{
      title: `Продукт: ${id}`,
  }
}

export default async function ProductPage( PageProps: { params: Params } ){
  const { id } = await PageProps.params
  return (
    <div>ProductPage - {id}</div>
  )
}